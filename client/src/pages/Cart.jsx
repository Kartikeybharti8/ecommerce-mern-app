import { Add, Remove } from "@material-ui/icons";
// import {DeleteIcon} from '@mui/icons-material/Delete';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import "./cart.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {
  clearCart,
  removeFromCart,
  getTotals,
  updateamount} from "../redux/cartRedux";


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
  background-color: #fff4ef;
  border: 0;
  color: black;
  cursor: pointer;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  background: #fff4ef;
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
  border: 0.5px solid IndianRed;
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
  background-color: #fff4ef;
  border: 0;
  color: black;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const updateonclick=(id,type)=>{
    dispatch(updateamount({id,type}));
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

    // console.log(data);

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
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag()</TopText>
            <Link to={`/wishlist`}>
              <TopText>Your Wishlist ()</TopText>
            </Link>
          </TopTexts>
          <TopButton onClick={() => handleClearCart()}>EMPTY CART</TopButton>
        </Top>
        <Bottom>
          
          <Info>
            {cart.products.length === 0 ? (
              <p>
                Your Cart is empty.<br></br> <Link to="/">Go for Shopping</Link>
              </p>
            ) : (
              cart.products.map((product) => (
                <Product className="Demo">
                  <ProductDetail>
                    <Link to ={`/product/${product._id}`}>
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
                    <Remove onClick={() => updateonclick(product._id,false)} />
                    
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add onClick={() => updateonclick(product._id,true)} />
                     
                    <i className="fa fa-trash-o" onClick={() => handleRemoveFromCart(product)} />
                        
                    </ProductAmountContainer>
                    <ProductPrice>
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))
            )}
            <Hr />
          </Info> 
          <Info>
            {cart.products.length === 0 ? (
              <p>
                Your Cart is empty.<br></br> <Link to="/">Go for Shopping</Link>
              </p>
            ) : (
              cart.products.map((product) => (
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
              <SummaryItemPrice>
                ₹ {cart.total }
              </SummaryItemPrice>
            </SummaryItem>
            <Button
              onClick={showRazorpay}
              target="_blank"
              rel="noopener noreferrer"
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
