import React, { use, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { data } from "react-router-dom";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h1 className="text-2xl text-center">My PostedJob : {jobs.length}</h1>
    </div>
  );
};

export default MyPostedJobs;
