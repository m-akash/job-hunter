const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const port = process.env.PORT || 3000;

const client = require("./config/db");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hire-hub-823a0.web.app",
      "https://hire-hub-823a0.firebaseapp.com",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// JWT verification middleware
const jwt = require("jsonwebtoken");
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

// Import routes
const jobRoutes = require("./routes/job.routes");
const userRoutes = require("./routes/user.routes");
const jobApplicationRoutes = require("./routes/jobApplication.routes");
const authRoutes = require("./routes/auth.routes");
const candidateRoutes = require("./routes/candidate.routes");

// Use routes
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);
app.use("/api/job-applications", jobApplicationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/candidates", candidateRoutes);

// Example protected route (for job applications by email)
const JobApplicationController = require("./controllers/jobApplication.controller");
app.get(
  "/api/protected/job-applications",
  verifyToken,
  JobApplicationController.getApplicationsByEmail
);

app.get("/", (req, res) => {
  res.send("Hello");
});

async function startServer() {
  try {
    await client.connect();
    app.listen(port, () => {
      console.log(`Server running on: ${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

startServer();

//
