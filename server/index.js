import test from "./test";
import express from "express";

const app = express();
test("threes");

app.get("/test", function(req, res, next) {
  res.send("TESTING");
});

app.listen(5000, err => {
  if (err) {
    return console.log("nope", err);
  }
});
