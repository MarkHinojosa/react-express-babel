import test from "./test";
import express from "express";

const app = express();
test("logging test production again");

app.get("/test", function(req, res, next) {
  res.send({ express: "testing api production again" });
});

app.listen(5000, err => {
  if (err) {
    return console.log("nope", err);
  }
});
