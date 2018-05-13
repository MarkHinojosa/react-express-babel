import test from "./test";
import express from "express";

const app = express();
test("logging test");

app.get("/test", function(req, res, next) {
  res.send({ express: "testing api" });
});

app.listen(5000, err => {
  if (err) {
    return console.log("nope", err);
  }
});
