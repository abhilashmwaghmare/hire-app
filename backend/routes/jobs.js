const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json({ message: "Job Added Successfully" });
});

module.exports = router;

