import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import "./product.css";





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
  // background-color: blue;
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
`

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

const Title = styled.div`
  height: 75%;
  font-weight: bold;
  color:black;
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

const Product = ({ item }) => {
  let ans1 = "In Stock";
  let ans2 = "Out of Stock";
  let fans;
  if (item.inStock) {
    fans = ans1;
  }
  else {
    fans = ans2;
  }

  return (
    <div>
      <Container1>
        <Circle />
        <Image src={item.img} />
        <Info>
          {/* <Icon>
            <ShoppingCartOutlined />
          </Icon> */}
          <Icon>
            <Link to={`/product/${item.id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <Link to={`/product/${item.id}`}>
              <FavoriteBorderOutlined />
            </Link>
          </Icon>
        </Info>
      </Container1>
      <Container2>
        <Title>{item.title}</Title>
        <Span className="price">₹{item.price}</Span>
        <Span className="stock">{fans}</Span>
      </Container2>
    </div>
  );
};

export default Product;
