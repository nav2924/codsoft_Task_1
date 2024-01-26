const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

// middleware
app.use(express.json());
app.use(cors());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Nvn_2924:Jimmy29012004@cluster.bscwboa.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7

    const db = client.db("mernJobPortal");
    const jobsCollection = db.collection("demoJob");

    //post a job
    app.post("/post-job" , async(req , res) => {
      const body = req.body;
      body.createAt = new Date()
      //console.log(body);
      const result = await jobsCollection.insertOne(body);
      if(result.insertedId){
        return res.status(200).send(result);
      }else{
        return res.status(404).send({
          message : "can not insert! try again later",
          status : false
        })
      }
    })
    // get all jobs 
    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await jobsCollection.find({}).toArray();
        res.send(jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ error: 'Internal Server Error', stack: error.stack });
      } finally {
        // Close the MongoDB connection
        //await client.close();
      }
    });

    

    //await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send("Hey");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
