const express = require("express");
const app = express(); 
const mongoose = require("mongoose");
const dotenv = require("dotenv"); 
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
<<<<<<< HEAD
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
//sheetal sharma demo comment

=======
const razorpayRoute = require("./routes/razorpay");
const cors = require("cors"); 
>>>>>>> ff7bec9565b211e39ec497156ff13dc14515a655
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
<<<<<<< HEAD
app.use("/api/checkout", stripeRoute);
//hello
app.get("/", (eq, res) => {
  res.end("home");
});

=======
app.use("/api/checkout", razorpayRoute);

app.get("/",(req,res)=>{
  res.end("home")
})
>>>>>>> ff7bec9565b211e39ec497156ff13dc14515a655
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
