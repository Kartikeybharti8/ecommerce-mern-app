import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import "./footer.css";

import React from 'react'
import ReactDOM from 'react-dom'


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}

`;
const Nonlink = styled.div`
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
    color: black;
    background-color: transparent;
    text-decoration: none;
  }

  a:active {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;
const responsive = styled.div`
  
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Artisans</Logo>
        <Desc>
          We provide the finest traditional and modern art pieces for your
          home and make them more beautiful.
        </Desc>
        <SocialContainer>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
          </a>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </a>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </a>
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link style={{textDecoration: "none"}} to="/">Home</Link></ListItem>
          <ListItem><Link style={{textDecoration: "none"}} to="/cart">Cart</Link></ListItem>
          <ListItem><Link style={{textDecoration: "none"}} to="/register">My Account</Link></ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem><Link style={{textDecoration: "none"}} to="/about">About Us</Link></ListItem>
        </List>
      </Center>
      <Right>
        <Nonlink>
          <Title>Contact</Title>
          <a href="https://goo.gl/maps/R9EUD6NkHnoAZNPP8" target="_blank">
            <ContactItem>
              <Room style={{ marginRight: "10px" }} /> 1330, 13th Main, 4th
              Block, Jayanagar, Bangalore-560011
            </ContactItem>
          </a>
          <a href="tel:+4733378901" >
            <ContactItem>
              <Phone style={{ marginRight: "10px" }} /> +91 9876543210
            </ContactItem>
          </a>
          <a href="mailto:nitesh@gmail.com">
            <ContactItem>
              <MailOutline style={{ marginRight: "10px" }} /> contact@Art.dev
            </ContactItem>
          </a>
        </Nonlink>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      
    </Container>
  );
};

export default Footer;