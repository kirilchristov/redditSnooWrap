const snoowrap = require("snoowrap");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const reddit = new snoowrap({
  userAgent: "Chunch2023",
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  username: USERNAME,
  password: PASSWORD,
});

app.get("/", async (req, res) => {
  try {
    reddit
      .getNew("aww", {
        limit: 2,
      })
      .then((result) => {
        res.send(result);
      });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
