const express = require("express");
const app = express();
const newRouter = require("./routes/routes");

app.use("/things", newRouter);
app.use("/dynamic", require("./routes/dynamic"));

app.get("/hello", (req, res) => {
  res.send("ini halaman hello");
});
app.post("/hello", (req, res) => {
  res.send("You just called the post method at hello");
});

app.listen(3001);
