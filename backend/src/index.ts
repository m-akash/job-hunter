import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import client from './config/db';
import { verifyToken } from './middleware/auth';
import JobApplicationController from './controllers/jobApplication.controller';

// Import routes
import jobRoutes from './routes/job.routes';
import userRoutes from './routes/user.routes';
import jobApplicationRoutes from './routes/jobApplication.routes';
import authRoutes from './routes/auth.routes';
import candidateRoutes from './routes/candidate.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://hire-hub-823a0.web.app',
      'https://hire-hub-823a0.firebaseapp.com',
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Use routes
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use('/api/job-applications', jobApplicationRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/candidates', candidateRoutes);

// Example protected route (for job applications by email)
app.get(
  '/api/protected/job-applications',
  verifyToken,
  JobApplicationController.getApplicationsByEmail
);

app.get('/', (req, res) => {
  res.send('Hello');
});

async function startServer(): Promise<void> {
  try {
    await client.connect();
    app.listen(port, () => {
      console.log(`Server running on: ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

startServer(); 