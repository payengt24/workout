const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/apiRoutes");
const path = require("path");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "exercise.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "stats.html"));
});

