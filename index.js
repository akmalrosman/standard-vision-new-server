require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

const getall = require("./routes/getall");
const getone = require("./routes/getone");
const update = require("./routes/update");
const deleted = require("./routes/delete");
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
app.use("/api/getall", getall);
app.use("/api/getone", getone);
app.use("/api/update", update);
app.use("/api/delete", deleted);
app.use("/api/register", registerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/downloadwindows", downloadWindowsRoutes);
app.use("/api/downloadlinux", downloadLinuxRoutes);

const port = 9001;
app.listen(port, console.log(`Listening on port ${port}...`));