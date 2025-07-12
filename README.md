# Job Hunter - Full Stack TypeScript Project

A modern job hunting platform built with TypeScript, featuring both frontend (React) and backend (Node.js/Express) applications. Connect job seekers with employers through a seamless, type-safe experience.

## Features

- **Full TypeScript Support**: End-to-end type safety across frontend and backend
- **Job Posting & Application**: Employers post jobs, candidates apply with real-time tracking
- **User Authentication**: Firebase authentication with JWT token management
- **Role-based Access**: Separate interfaces for candidates and employers
- **Responsive Design**: Modern UI with Tailwind CSS and DaisyUI
- **Real-time Updates**: Live job listings and application status tracking

## Tech Stack

### Frontend

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** + **DaisyUI** for modern styling
- **React Router** for client-side navigation
- **Firebase** for authentication
- **Axios** for API communication

### Backend

- **Node.js** with TypeScript
- **Express.js** framework
- **MongoDB** with native driver
- **JWT** for secure authentication
- **CORS** enabled for cross-origin requests

## Project Structure

```
job-hunter/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # API controllers
│   │   ├── models/          # Data models
│   │   ├── routes/          # API routes
│   │   ├── types/           # TypeScript type definitions
│   │   ├── middleware/      # Custom middleware
│   │   └── index.ts         # Main server file
│   ├── dist/                # Compiled JavaScript output
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── pages/           # Page components (35 TypeScript files)
│   │   ├── context/         # React context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── types/           # TypeScript type definitions
│   │   ├── layouts/         # Layout components
│   │   ├── assets/          # Static assets
│   │   ├── firebase/        # Firebase configuration
│   │   ├── routes/          # Route components
│   │   ├── main.tsx         # Main entry point
│   │   └── App.tsx          # Main app component
│   ├── public/              # Public assets
│   ├── dist/                # Build output
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database
- Firebase project

### Backend Setup

1. **Navigate to backend directory:**

```bash
cd backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment file:**

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
DB_USER=your_db_username
DB_PASS=your_db_password
```

4. **Start development server:**

```bash
npm run dev
```

5. **Build for production:**

```bash
npm run build
npm start
```

### Frontend Setup

1. **Navigate to frontend directory:**

```bash
cd frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment file:**

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
```

4. **Start development server:**

```bash
npm run dev
```

5. **Build for production:**

```bash
npm run build
```

## Development Scripts

### Backend

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint with TypeScript support

## API Endpoints

### Authentication

- `POST /api/auth/jwt` - Login and get JWT token
- `POST /api/auth/logout` - Logout and clear token

### Jobs

- `GET /api/jobs` - Get paginated jobs
- `GET /api/jobs/:id` - Get specific job details
- `POST /api/jobs` - Create new job posting
- `GET /api/jobs/count` - Get total job count

### Users

- `GET /api/users/:id` - Get user by ID
- `GET /api/users` - Get user by email
- `POST /api/users` - Create new user account

### Job Applications

- `GET /api/job-applications` - Get applications by email
- `POST /api/job-applications` - Submit job application
- `PATCH /api/job-applications/:id` - Update application status

## Key Features

### For Job Seekers

- Browse and search jobs by category, location, or keyword
- View detailed job descriptions with requirements
- Apply for jobs with cover letter and resume
- Track application status in real-time
- Manage profile and application history

### For Employers

- Post new job listings with detailed requirements
- View and manage applications for each job
- Update job status and application tracking
- Manage company profile and job postings
- Dashboard for comprehensive job management

## Deployment

### Backend (Vercel)

- Automatic deployment from Git
- Environment variables configured in Vercel dashboard
- MongoDB Atlas for database hosting

### Frontend (Firebase Hosting)

- Build and deploy with Firebase CLI
- Environment variables in Firebase project settings
- CDN distribution for fast loading

## Feedback

- If you have any feedback, please reach out to [mehedihasan1769@gmail.com](mailto:mehedihasan1769@gmail.com)

## Authors

- [Mehedi Hasan Akash](https://github.com/m-akash)

