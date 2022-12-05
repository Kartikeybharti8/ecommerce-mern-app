import { Add, LocalDrinkSharp, Remove } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./cart.css";
import { publicRequest } from "../requestMethods";
import { order } from "../redux/apiCalls";
import { clearingCart } from "../redux/cartRedux";
import "./cart.css";
import Wishlist from "./Wishlist";
// import swal from "sweetalert";
import {
  clearCart,
  removeFromCart,
  getTotals,
  updateamount,
} from "../redux/cartRedux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  background-color: #f5fbfd;
  border: 0;
  color: black;
  cursor: pointer;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  color: black;
  background: #f5fbfd;
  cursor: pointer;
  margin: 0px 10px;
  padding: 5px;
  border-radius: 30px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

// const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #ee6c4d;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f5fbfd;
  border: 0;
  color: black;
  font-weight: 600;
`;

const Cart = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const quantity = 0;

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const updateonclick = (id, type) => {
    dispatch(updateamount({ id, type }));
  };
  const handleRemoveFromCart = (product) => {
    // console.log(product)

    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function showRazorpay(total) {
    if (user === null) {
      swal({
        title: "Login To Checkout!",
        text: "Redirecting you to login...",
        buttons: false,
      });
      setTimeout(locate, 2000);
      function locate() {
        window.location = "http://localhost:3000/login";
      }
    } else {
      // console.log(total)
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        swal("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const data = await fetch("http://localhost:5000/api/checkout/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: "INR",
          payment_capture: cart.products.length,
          amount: cart.total * 100,
        }),
      }).then((t) => t.json());

      // console.log(data);

      const options = {
        //publc key
        key: "rzp_test_Hhk1Sht36toHVl",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        name: "Artisan Shopping",
        description: "You can make your payments here",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemqiIPiJGwCjVqLTbkUODcDHt8As8aALN0eo48P434qjeKqSXS8eRfKSc1kPnyRv0jSI&usqp=CAU",
        handler: async function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          if (response) {
            // console.log(res);

            var res = order(dispatch, user, cart);
            console.log(res);
            if (res === 0) {
              swal("Transaction could not be completed.");
            } else {
              dispatch(clearingCart());
              swal("Transaction successful!!");
            }
          }
        },
        prefill: {
          name: "yourname",
          email: "yourname@gmail.com",
          phone_number: "9999999999",
        },
        theme: {
          color: "#99cc33",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  }
  //print product quantity
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  scroll();
  return (
    <Container>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <Navbar />

      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/`}>
            <TopButton className="hvr-grow">CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <Link to="/wishlist" style={{ color: "black" }}>
              <TopText className="hvr-grow">Your Wishlist({wishlist.products.length})</TopText>
            </Link>
            <TopText className="hvr-grow">
              Total products ({cart.products.length})
            </TopText>
            <Link to={"/orders"}>
              <TopText className="hvr-grow">
                Orders({orders.products.length})
              </TopText>{" "}
            </Link>
          </TopTexts>
          <TopButton onClick={() => handleClearCart()} className="hvr-grow">
            EMPTY CART
          </TopButton>
        </Top>
        <Bottom className="btm-data">
          <Info>
            {cart.products.length === 0 ? (
              <p className="">
                Your Cart is empty.<br></br> <Link to="/">Go for Shopping</Link>
              </p>
            ) : (
              cart.products.map((product) => (
                <Product className="Demo " data-aos="flip-up">
                  <ProductDetail>
                    <Link to={`/product/${product._id}`}>
                      <Image className="prodImg" src={product.img} />
                    </Link>
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove
                        className="hvr-grow"
                        onClick={() => updateonclick(product._id, false)}
                      />

                      <ProductAmount
                        data-aos="flip-down"
                        data-aos-duration="1500"
                      >
                        {product.quantity}
                      </ProductAmount>
                      <Add
                        className="hvr-grow"
                        onClick={() => updateonclick(product._id, true)}
                      />

                      <i
                        className="fa fa-trash-o hvr-grow"
                        onClick={() => handleRemoveFromCart(product)}
                      />
                    </ProductAmountContainer>
                    <ProductPrice data-aos="flip-up" data-aos-duration="1500">
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))
            )}
            <Hr />
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ {0}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button
              onClick={() => {
                showRazorpay(cart.total);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="hvr-grow "
            >
              CHECKOUT NOW
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
