const router = require("express").Router();

const Razorpay = require("razorpay");
const shortid = require("shortid");


var razorpay = new Razorpay({
  key_id: "rzp_test_Hhk1Sht36toHVl",
  key_secret: "FAowFlY2NbxWsx7uO6cSwVH5",
});

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
