import { Add, Remove } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import artistSvg from "../assets/artist.svg";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import "./cart.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { publicRequest } from "../requestMethods";
import { order } from "../redux/apiCalls";
import { clearingorders } from "../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;

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

const ProductSize = styled.span``;

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
  border-radius: 10px;
  background-color: #f5fbfd;

  padding: 20px;
  height: 44vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  border-bottom: 2px solid #ee6c4d;
  width: fit-content;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  background: white;
  cursor: pointer;
  margin: 0px 10px;
  padding: 5px;
  border-radius: 30px;
  color: black;
  font-weight: 500;
  a:link {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }

  a:visited {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }

  a:hover {
    color: #ee6c4d;
    background-color: fff4efv;
    text-decoration: none;
  }

  a:active {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }
`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f5fbfd;
  border: 0;
  color: black;
  font-weight: 600;
`;

const History = () => {
  const cart = useSelector((state) => state.cart);
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
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  function redirect() {
    swal("Please login to continue", {
      title: "Please login to continue",
      text: "Redirecting to login page  ",
      icon: "warning",
      buttons: false,
    });
  }
  async function showRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:5000/api/checkout/payment", {
      method: "POST",
    }).then((t) => t.json());

    const options = {
      key: "rzp_test_Hhk1Sht36toHVl",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemqiIPiJGwCjVqLTbkUODcDHt8As8aALN0eo48P434qjeKqSXS8eRfKSc1kPnyRv0jSI&usqp=CAU",
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        swal("Transaction Successful", {
          buttons: false,
          icon: "success",
          timer: 1500,
          closeOnEsc: true,
          closeOnClickOutside: true,
        });
      },
      prefill: {
        name: "kartikey",
        email: "kartikey@gamil.com",
        phone_number: "9899999999",
      },
      theme: {
        color: "#99cc33",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
      <Navbar />

      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/`}>
            <TopButton className="hvr-grow">CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText className="hvr-grow">Shopping Bag()</TopText>
            <Link to={`/wishlist`}>
              <TopText className="hvr-grow">Your Wishlist ()</TopText>
            </Link>
          </TopTexts>
          <TopButton className="hvr-grow" type="filled">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom className="btm-data">
          {/* <Info>
            {cart.products.map((product) => (
           
              <Product className="Demo">
                <ProductDetail>
                  <Image className="prodImg" src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ₹ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info> */}
          <Info>
            {cart.products.length === 0 ? (
              <p className="">
                Your Cart is empty.<br></br> <Link to="/">Go for Shopping</Link>
              </p>
            ) : (
              cart.products.map((product) => (
                <Product className="Demo " data-aos="flip-up">
                  <ProductDetail>
                    <Image className="prodImg" src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>

                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
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
            <SummaryTitle>Need help ?</SummaryTitle>
            <SummaryItem>
              <SummaryItemText className="hvr-grow">
                <Link to="/Contact">Contact Us</Link>
              </SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText className="hvr-grow">
                <Link to="/about"> About Us</Link>
              </SummaryItemText>
            </SummaryItem>
            <img class="HistSvg" src={artistSvg} alt="yo" />
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default History;
