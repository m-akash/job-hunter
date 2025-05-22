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

    app.get("/jobs", async (req, res) => {
      const query = jobsData.find();
      const result = await query.toArray();
      res.send(result);
    });

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsData.findOne(query);
      res.send(result);
    });

    const userData = client.db("HireHubDB").collection("userInfo");

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
      const result = userData.insertOne(info);
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
