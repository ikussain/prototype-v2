const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/oauth/token", (req, res) => {
  console.log(req.body);
  const token = req.body.token;
  if (token === "12345") {
    res.send(200);
    return;
  }
  res.send(403);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
