const express = require("express");
const router = express.Router();
// const app = express();
// const mongoose = require("mongoose")
const Insta = require("instamojo-nodejs");

let API_KEY = process.env.API_KEY;
let AUTH_KEY = process.env.AUTH_KEY;

console.log("testing");
router.post("/pay", (req, res) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Content-Type, Authorization, Content-Length, X-Requested-With"
  // );
  res.json({ message: "payment is still process" });
  console.log("testing1");
  Insta.setKeys(API_KEY, AUTH_KEY);
  const data = new Insta.PaymentData();
  Insta.isSandboxMode(true);

  data.purpose = req.body.purpose;
  data.amount = req.body.amount;
  data.currency = "INR";

  Insta.createPayment(data, function (error, response) {
    if (error) {
      // some error
    } else {
      // Payment redirection link at response.payment_request.longurl
      console.log(response);
      const responseData = JSON.parse(response);
      console.log(responseData);
      res.status(200).json(response);
    }
  });
});

module.exports = router;
