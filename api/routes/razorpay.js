const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY
// // const KEY= "pk_test_51Lsn2wSCi7h082cZt1xt2tWmqiVfPZO1uryLF6YgBneBaPEwpderFuoe6I6xKxbCkDIVVhS2sxnIN9Kz0T2Uw9rh00WVdMpDVq"

// // const stripe = require("stripe")(KEY);

// router.post("/payment", (req, res) => {
//   stripe.charges.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "inr",
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });

// module.exports = router;

// const express = require("express");
// const path = require("path");
const Razorpay = require("razorpay");
const shortid = require("shortid");
// const bodyParser = require("body-parser");
// const crypto = require("crypto");
// const cors = require("cors");

// require("dotenv").config();

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

var razorpay = new Razorpay({
  key_id: "rzp_test_Hhk1Sht36toHVl",
  key_secret: "FAowFlY2NbxWsx7uO6cSwVH5",
});

// app.get("/logo.svg", (req, res) => {
//   res.sendFile(path.join(__dirname, "logo.svg"));
// });

// app.post("/verification", (req, res) => {
//   const secret = "FAowFlY2NbxWsx7uO6cSwVH5";

//   console.log(req.body);

//   const shasum = crypto.createHmac("sha256", secret);
//   shasum.update(JSON.stringify(req.body));
//   const digest = shasum.digest("hex");

//   console.log(digest, req.headers["x-razorpay-signature"]);

//   if (digest === req.headers["x-razorpay-signature"]) {
//     console.log("request is legit");
//     res.status(200).json({
//       message: "OK",
//     });
//   } else {
//     res.status(403).json({ message: "Invalid" });
//   }
// });

router.post("/payment",async (req, res) =>  {
  // console.log"hii")
  const payment_capture = 1;
  const amount = 100;
  const currency = "INR";

  const options = {
    amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;


// const PORT = process.env.PORT || 1337;

// app.listen(PORT, () => {
//   console.log(`Listening on ${PORT}`);
// });
