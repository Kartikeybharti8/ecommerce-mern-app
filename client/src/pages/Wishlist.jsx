import { Add, Remove, DeleteOutlineOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistRedux";
import Lottie from 'react-lottie';
import HeartLottie from "./heart.json";
import swal from "sweetalert";

const KEY = process.env.REACT_APP_STRIPE;

const Major = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

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
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
`;

const P = styled.div`
  margin: 100px 520px 110px 520px;
  ${mobile({ margin: "50px 30px 50px 30px" })}
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  margin: 50px 30px 50px 30px;
  align-items: center;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: column;
  padding: 10px 10px 10px 10px
`;

const Image = styled.img`
  width: 200px;
  border-radius: 15px;
  z-index: 2;
`;

const DeleteButton = styled.div`
  position: relative;
  top: -193px;
  left: 169px;
  border-radius: 50%;
  cursor: pointer;
  width: 24px;
  height: 27px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Icon = styled.div``;

const Details = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  text-align: center;
  width: 200px;
  font-weight: bold;
  color:black;
`;

const ProductStock = styled.div`
  color: black;
  padding-top: 5px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Wishlist = ({item}) => {
  const wishlist = useSelector((state) => state.wishlist);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDeleteWislist = (product) => {
    // console.log(product)
    swal("Item removed from wishlist", {
      buttons: false,
      timer: 1500,
      closeOnEsc: true,
      closeOnClickOutside: true,
    });
    dispatch(removeFromWishlist(product));
  };

  let heartObj = {
    loop: true,
    autoplay: true,
    animationData : HeartLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
}
  
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <Top>
          <Link to={`/`}><TopButton>CONTINUE SHOPPING</TopButton></Link>
          {/* <TopButton type="outlined">ADD TO CART</TopButton> */}
        </Top>
        <Bottom>
          <Info>
            {wishlist.products.length === 0 ? (
              <P>
                <Lottie options={heartObj}
                  height={150}
                  width={150}
                  isStopped={false}
                  isPaused={false}
                />
                <h2>Your wishlist is empty</h2>
              </P>
              ) :
              (wishlist.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Link to ={`/product/${product._id}`}>
                    <Image src={product.img} />
                  </Link>
                  <DeleteButton onClick={() => handleDeleteWislist(product)}>
                    <DeleteOutlineOutlined />
                  </DeleteButton>
                  <Details>
                    <ProductName>
                      {product.title}
                    </ProductName>
                    <ProductStock>
                      {product.stockDetail}
                    </ProductStock>
                  </Details>
                </ProductDetail>
              </Product>
            )))}
            <Hr />
          </Info>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Wishlist;