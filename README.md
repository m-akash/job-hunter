# Job Hunter

---

## About

**Job Hunter** is a modern, full-stack job portal that connects job seekers with employers. It provides a seamless experience for users to browse, apply, and manage job applications, while employers can post, edit, and track job listings and applicants. Built with scalability and usability in mind, Job Hunter leverages the latest technologies for a robust and responsive platform.

---

## Features

### For Job Seekers

- Register and log in securely
- Browse and search for jobs by category, location, or keyword
- View detailed job descriptions
- Apply for jobs and track application status
- Manage and update user profile
- View list of applied jobs

### For Employers

- Register and log in securely
- Post new job listings
- Edit or delete existing job postings
- View applicants for each job
- Manage company profile
- Dashboard for managing all postings and applications

### General

- Role-based access control (job seeker, employer)
- Responsive, modern UI/UX
- Secure authentication with Firebase
- RESTful API backend

---

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Auth
- **Deployment:** Vercel (backend), Firebase Hosting (frontend)

---

## Folder Structure

```
job-hunter/
  backend/
    config/           # Database and environment config
    controllers/      # Express route controllers
    models/           # Mongoose models
    routes/           # Express routes
    index.js          # Entry point
    package.json      # Backend dependencies
  frontend/
    public/           # Static assets
    src/
      assets/         # Images, icons, lottie files
      context/        # React context providers
      firebase/       # Firebase config
      hooks/          # Custom React hooks
      layouts/        # Layout components
      pages/          # Page components
      routes/         # Route components
      App.jsx         # Main app component
      main.jsx        # Entry point
    package.json      # Frontend dependencies
  README.md           # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)
- Firebase project for authentication

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/m-akash/job-hunter.git
   cd job-hunter/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `backend/` with the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   FIREBASE_API_KEY=your_firebase_api_key
   # Add other environment variables as needed
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. In a new terminal, navigate to the frontend:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase in `src/firebase/firebase.init.js`:
   ```js
   // Example
   const firebaseConfig = {
     apiKey: "your_api_key",
     authDomain: "your_auth_domain",
     projectId: "your_project_id",
     // ...
   };
   export default firebaseConfig;
   ```
4. Start the frontend dev server:
   ```bash
   npm run dev
   ```

---

## API Documentation

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### Jobs

- `GET /api/jobs` — List all jobs
- `GET /api/jobs/:id` — Get job details
- `POST /api/jobs` — Create a new job (employer only)
- `PUT /api/jobs/:id` — Update a job (employer only)
- `DELETE /api/jobs/:id` — Delete a job (employer only)

### Applications

- `POST /api/applications` — Apply for a job
- `GET /api/applications` — List user applications
- `GET /api/applications/:jobId` — List applicants for a job (employer only)

---

## Contact

For issues, please open an [mehedihasan1769@gmail.com](mehedihasan1769@gmail.com).

## Author

Created by [Mehedi Hasan Akash](https://github.com/m-akash)
