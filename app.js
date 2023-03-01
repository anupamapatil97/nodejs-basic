// const http = require('http');
const express = require("express");

const app = express();

const port = 3000;
app.use("/", (req, res, next) => {
    console.log("Always runs");
    next()
  }),

app.use("/add-products", (req, res, next) => {
  console.log("In Second Middleware");
  res.send(`<h1>Add Your product</h1>`);
});

app.use("/", (req, res, next) => {
  console.log("Hello from middleware");
  res.send(`<h1>Hello from middleware</h1>`);
  // next()
}),
  // const server= http.createServer(app);

  // server.listen(port);

  app.listen(port);
