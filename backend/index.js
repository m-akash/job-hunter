const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

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

    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userData.findOne(query);
      res.send(result);
    });

    app.post("/user", async (req, res) => {
      const newUser = req.body;
      const info = {
        fName: newUser.fName,
        lName: newUser.lName,
        email: newUser.email,
        regAs: newUser.regAs,
      };
      const result = await userData.insertOne(info);
      res.send(result);
    });

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

    app.get("/job-applications", async (req, res) => {
      const email = req.query.email;
      const query = {
        applicant_email: email,
      };
      const result = await jobApplicationData.find(query).toArray();
      for (const application of result) {
        console.log(application.job_id);

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
