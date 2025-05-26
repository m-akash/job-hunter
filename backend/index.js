const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: "Unauthorize access" });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorize access" });
    }
    req.user = decoded;
    next();
  });
};

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@testmongodb.urxadh3.mongodb.net/?retryWrites=true&w=majority&appName=TestMongoDB`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const jobsData = client.db("HireHubDB").collection("jobs");
    const userData = client.db("HireHubDB").collection("userInfo");
    const jobApplicationData = client
      .db("HireHubDB")
      .collection("jobApplication");

    //Start JWT
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1h" });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false, //It would be true only for secure production url.
        })
        .send({ success: true });
    });

    app.post("/logout", async (req, res) => {
      res
        .clearCookie("token", {
          httpOnly: true,
          secure: false,
        })
        .send({ success: true });
    });
    //End JWT

    //Start User
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userData.findOne(query);
      res.send(result);
    });

    app.get("/user", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const result = await userData.find(query).toArray();
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      const newUser = req.body;
      const info = {
        name: newUser.name,
        email: newUser.email,
        regAs: newUser.regAs,
      };
      const result = await userData.insertOne(info);
      res.send(result);
    });

    //End User

    //Start Jobs
    app.get("/jobs", async (req, res) => {
      const email = req.query.email;
      let query = {};

      if (email) {
        query = { hr_mail: email };
      }

      const cursor = jobsData.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/job-count", async (req, res) => {
      const count = await jobsData.estimatedDocumentCount();
      res.send({ count });
    });

    app.post("/jobs", async (req, res) => {
      const job = req.body;
      const result = await jobsData.insertOne(job);
      res.send(result);
    });

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsData.findOne(query);
      res.send(result);
    });

    app.get("/job-application/jobs/:job_id", async (req, res) => {
      const jobId = req.params.job_id;
      const query = { job_id: jobId };
      const result = await jobApplicationData.find(query).toArray();
      res.send(result);
    });

    app.get("/job-applications", verifyToken, async (req, res) => {
      const email = req.query.email;
      const query = {
        applicant_email: email,
      };

      if (req.user.email !== req.query.email) {
        return res.status(403).send({ message: "forbidden access" });
      }

      const result = await jobApplicationData.find(query).toArray();
      for (const application of result) {
        const query1 = { _id: new ObjectId(application.job_id) };
        const job = await jobsData.findOne(query1);
        if (job) {
          application.title = job.title;
          application.company = job.company;
          application.location = job.location;
        }
      }
      res.send(result);
    });

    app.post("/job-application", async (req, res) => {
      const applicationData = req.body;
      const result = await jobApplicationData.insertOne(applicationData);

      const query = { _id: new ObjectId(applicationData.job_id) };
      const job = await jobsData.findOne(query);
      let cnt = 0;
      if (job.applicationCount) {
        cnt = job.applicationCount + 1;
      } else {
        cnt = 1;
      }

      const filter = { _id: new ObjectId(applicationData.job_id) };
      const updateDoc = {
        $set: {
          applicationCount: cnt,
        },
      };

      const updateResult = await jobsData.updateOne(filter, updateDoc);

      res.send(result);
    });

    app.patch("/job-application/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;

      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: body.status,
        },
      };
      const result = await jobApplicationData.updateOne(filter, updateDoc);
      res.send(result);
    });

    //End Jobs
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", async (req, res) => {
  res.send("Hello ");
});

app.listen(port, () => {
  console.log(`Server running on: ${port}`);
});

//
