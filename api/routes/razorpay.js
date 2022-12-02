const router = require("express").Router();

const Razorpay = require("razorpay");
const shortid = require("shortid");


var razorpay = new Razorpay({
  key_id: "rzp_test_Hhk1Sht36toHVl",
  key_secret: "FAowFlY2NbxWsx7uO6cSwVH5",
});

router.post("/payment",async (req, res) =>  {
  // console.log"hii")
  console.log(req.body,"hey")
  const payment_capture = req.body.payment_capture;
  const amount = req.body.amount;
  const currency = req.body.currency;

  const options = {
    amount,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log("res",response);
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
