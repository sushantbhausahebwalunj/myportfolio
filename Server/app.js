const dotenv = require("dotenv")

const express = require("express");
const app = express();
const sendMail = require("./controller/sendMail");
const cors = require("cors");
dotenv.config({
  path:"./.env"
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("I'm from backend");
});

app.post("/send-mail", sendMail);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
