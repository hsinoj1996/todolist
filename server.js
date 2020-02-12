require("./config/configure");
const express = require("express");
const app = express();
const routes = require("./router/router");
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log("server running"));
