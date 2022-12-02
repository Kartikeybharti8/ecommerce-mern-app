import {
  Favorite,
  SearchOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  VisibilityIcon,
} from "@material-ui/icons";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import "./product.css";
import { publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import { wishProduct, removeFromWishlist } from "../redux/wishlistRedux";
import { useDispatch } from "react-redux";
import {RiHeart3Fill} from 'react-icons/ri';

const Info = styled.div`
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

const Container1 = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  background-color: blue;
  background-color: #f5fbfd;
  justify-content: center;

  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Container2 = styled.div`
  flex: 1;
  margin: 10px;
  width: 300px;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  border-radius: 15px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const SubIcon = styled.div``;

const Title = styled.div`
  height: 75%;
  font-weight: bold;
  color: black;
  align-items: left;
  width: 280px;
`;

const Span = styled.div`
  color: black;
  align-items: left;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
`;

const Stock = styled.div`
  color: black;
  align-items: right;
`;

const Product = ({ item }) =>
{
  const location = useLocation();
  // const id = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [isFilled, setIsFilled] = useState(false);
  const toggleFilledIcon = () => setIsFilled(!isFilled);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + item.id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [item.id]);

  let inStock = "In Stock";
  let outofStock = "Out of Stock";
  let stockDetail;
  if (item.inStock) {
    stockDetail = inStock;
  }
  else {
    stockDetail = outofStock;
  }

  const handleClick = () => {
    //console.log(product, item.id)
    if(isFilled){
      dispatch(removeFromWishlist(product));
    }
    else{
      dispatch(wishProduct({ ...product, quantity }));
      setIsFilled(!isFilled);
    }
  };
  
  return (
    <div>
      <Container1>
        <Circle />
        <Image data-aos="fade-up" data-aos-duration="1500" src={item.img} />
        <Info >
          {/* <Icon>
            <ShoppingCartOutlined />
          </Icon> */}
          <Icon>
            <Link to={`/product/${item.id}`}>
              <SearchOutlined  className="hvr-icon-bounce "/>
            </Link>
          </Icon>
          <Icon onClick={(event)=>{
              event.preventDefault();
              event.stopPropagation();
              toggleFilledIcon();
              handleClick();
            }}>
            { isFilled ? <Favorite style={{ color: 'crimson' }} /> : <FavoriteBorderOutlined /> }
          </Icon>
        </Info>
      </Container1>
      <Container2 data-aos="flip-up">
        <Title>{item.title}</Title>
        <Span className="price" data-aos="flip-up">₹{item.price}</Span>
        <Span className="stock" data-aos="flip-up">{stockDetail}</Span>
      </Container2>
    </div>
  );
};

export default Product;