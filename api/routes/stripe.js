const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = process.env.STRIPE_KEY
// const KEY= "pk_test_51Lsn2wSCi7h082cZt1xt2tWmqiVfPZO1uryLF6YgBneBaPEwpderFuoe6I6xKxbCkDIVVhS2sxnIN9Kz0T2Uw9rh00WVdMpDVq"

// const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
