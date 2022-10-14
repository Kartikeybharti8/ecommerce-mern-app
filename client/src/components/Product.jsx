import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";

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
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Container2 = styled.div`
  flex: 1;
  margin: 10px;
  width: 300px;
  height: 50px;
  border-radius: 50%;
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
  if(item.inStock){
    fans = ans1;
  }
  else{
    fans = ans2;
  }

  return (
    <div>
      <Container1>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item.id}`}>
            <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container1>
      <Container2>
        <Title>{item.title}</Title>
        <Span>₹{item.price} {fans}</Span>
      </Container2>
    </div>
  );
};

export default Product;
