console.log("express checkpoint");

const express = require("express");

const app = express();

const port = 5000;

//app.get("/hello", (req, res) => {
//  res.send("hello world");
// });
//verification date

const verifdate = (req, res, next) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hour = new Date().getHours();

  if (
    days[new Date().getDay()] !== "Saturday" &&
    days[new Date().getDay()] !== "Sunday" &&
    hour >= 9 &&
    hour < 17
  ) {
    next();
  } else {
    res.send("oops! date not avilable");
  }
};

app.use(verifdate);

app.use(express.static("public"));
app.listen(port, (err) => {
  err ? console.log(err) : console.log("the server is running on port " + port);
});
