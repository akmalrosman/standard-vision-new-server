require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const registerRoutes = require("./routes/register");
const authRoutes = require("./routes/auth");
const downloadWindowsRoutes = require("./routes/downloadWindows");
const downloadLinuxRoutes = require("./routes/downloadLinux");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/register", registerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/downloadwindows", downloadWindowsRoutes);
app.use("/api/downloadlinux", downloadLinuxRoutes);

const port = 9001;
app.listen(port, console.log(`Listening on port ${port}...`));