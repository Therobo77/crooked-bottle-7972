const express = require("express");
const router = express.Router();
// const app = express();
// const mongoose = require("mongoose");
const Insta = require("instamojo-nodejs");

console.log("testing");
router.post("/pay", (req, res) => {
  console.log("testing1");
  Insta.setKeys(
    test_1b1551a5622db3e378dd35b07d2,
    test_7f9c1499883695d5e693e775700
  );
  const data = new Insta.PaymentData();
  Insta.isSandboxMode(true);

  data.purpose = req.body.purpose;
  data.amount = req.body.amount;

  Insta.createPayment(data, function (error, response) {
    if (error) {
      // some error
    } else {
      // Payment redirection link at response.payment_request.longurl
      console.log(response);
      res.status(200).json(response);
    }
  });
});

module.exports = router;
