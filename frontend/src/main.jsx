import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import PostJob from "./pages/PostJob/PostJob";
import JobDetails from "./pages/JobDetails/JobDetails";
import AuthProvider from "./context/AuthContext/AuthProvider";
import Jobs from "./pages/Jobs/Jobs";
import PrivateRouter from "./routes/PrivateRouter";
import Candidates from "./pages/Candidates/Candidates";
import Employers from "./pages/Employers/Employers";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import JobApply from "./pages/JobApply/JobApply";
import AppliedJobs from "./pages/AppliedJobs/AppliedJobs";
import MyPostedJobs from "./pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "./pages/ViewApplications/ViewApplications";
import Profile from "./pages/Profile/Profile";
import FeatureJobs from "./pages/FeatureJobs/FeatureJobs";
import Categories from "./pages/Categories/Categories";
import JobCategories from "./pages/Categories/JobCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/candidates",
        element: <Candidates></Candidates>,
      },
      {
        path: "/employers",
        element: <Employers></Employers>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/user",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
        loader: () => fetch("http://localhost:3000/job-count"),
      },
      {
        path: "/jobs/category/:category",
        element: <JobCategories></JobCategories>,
      },
      {
        path: "/featureJobs",
        element: <FeatureJobs></FeatureJobs>,
      },
      {
        path: "/postjob",
        element: (
          <PrivateRouter>
            {" "}
            <PostJob></PostJob>
          </PrivateRouter>
        ),
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRouter>
            {" "}
            <JobDetails></JobDetails>{" "}
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/applyjob/:id",
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRouter>
            <AppliedJobs></AppliedJobs>
          </PrivateRouter>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRouter>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRouter>
        ),
      },
      {
        path: "/viewApplication/jobs/:job_id",
        element: (
          <PrivateRouter>
            <ViewApplications></ViewApplications>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/job-application/jobs/${params.job_id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
