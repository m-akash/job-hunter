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
        element:  <Login></Login>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/postjob",
        element: <PostJob></PostJob>,
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
