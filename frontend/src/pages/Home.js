import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h4>{job.title}</h4>
          <p>{job.company} - {job.location}</p>
        </div>
      ))}
    </div>
  );
}

