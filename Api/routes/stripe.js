const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  let KEY = process.env.STRIPE_KEY;
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (Autorization = KEY),
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        console.log("RRRRRRRRRRRespue4sta", stripeRes);
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
