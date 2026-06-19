const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// POST Route
app.post("/create-profile", (req, res) => {
  const { name, bio, location, company, image } = req.body;

  // Validation
  if (!name || !bio || !location || !company || !image) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Profile Object
  const profileCard = {
    name,
    bio,
    location,
    company,
    image,
  };

  res.json({
    success: true,
    profile: profileCard,
  });
});

// Home Route
app.get("/", (req, res) => {
  res.send("Profile Card Server Running");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});