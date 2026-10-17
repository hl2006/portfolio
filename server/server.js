const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("./models/contact");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.get("/api/resume/pdf", (req, res) => {
  res.download(
    path.join(__dirname, "resumes", "resume.pdf"),
    "Hardik_Lavti_Resume.pdf"
  );
});

app.get("/api/resume/docx", (req, res) => {
  res.download(
    path.join(__dirname, "resumes", "resume.docx"),
    "Hardik_Lavti_Resume.docx"
  );
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required."
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({
      message: "Message saved successfully!",
      id: contact._id
    });
  } catch (error) {
    console.error("Contact form error:", error.message);

    res.status(500).json({
      message: "Could not save your message."
    });
  }
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
