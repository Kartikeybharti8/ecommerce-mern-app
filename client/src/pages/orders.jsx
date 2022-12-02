import { Add, Remove } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import artistSvg from "../assets/artist.svg";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { publicRequest } from "../requestMethods";

import { order } from "../redux/apiCalls";
import { clearingorders } from "../redux/cartRedux";

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

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  console.log(orders);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Orders({orders.products.length})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {orders.products[0].map((product) => (
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

                    <ProductId>
                      <b>Status: </b>
                      {orders.status}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <b>Qty:</b>{" "}
                    <ProductAmount>{product.quantity}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>₹ {product.price}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
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
            <img class="HistSvg" src={artistSvg} alt="back" />
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Orders;
