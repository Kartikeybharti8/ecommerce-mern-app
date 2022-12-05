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
import React from "react";
import ReactDOM from "react-dom";

const Container = styled.div`
  border-top: 1px solid #e6e6e6;
  background-color: white;
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
function scrollup() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo data-aos="flip-up" data-aos-duration="500">
          Artisans
        </Logo>
        <Desc data-aos="flip-up" data-aos-duration="500">
          We provide the finest traditional and modern art pieces for your home
          and make them more beautiful.
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
        <Title data-aos="flip-up" data-aos-duration="500">
          Useful Links
        </Title>
        <Nonlink>
          <List>
            <ListItem data-aos="flip-up" data-aos-duration="500">
              <Link onClick={scrollup}>Home</Link>
            </ListItem>
            <ListItem data-aos="flip-up" data-aos-duration="500">
              <Link to="/cart">Cart</Link>
            </ListItem>
            <ListItem data-aos="flip-up" data-aos-duration="500">
              <Link to="/myAccount">My Account</Link>
            </ListItem>
            <ListItem data-aos="flip-up" data-aos-duration="500">
              <Link to="/terms">Terms</Link>
            </ListItem>
            <ListItem>
              <Link data-aos="flip-up" data-aos-duration="500" to="/contact">
                Contact
              </Link>
            </ListItem>
            <ListItem>
              <Link data-aos="flip-up" data-aos-duration="500" to="/about">
                About
              </Link>
            </ListItem>
          </List>
        </Nonlink>
      </Center>
      <Right>
        <Nonlink>
          <Title data-aos="flip-up" data-aos-duration="1000">
            Contact
          </Title>
          <a href="https://goo.gl/maps/R9EUD6NkHnoAZNPP8" target="_blank">
            <ContactItem>
              <Room
                data-aos="flip-up"
                data-aos-duration="500"
                style={{ marginRight: "10px" }}
              />{" "}
              1330, 13th Main, 4th Block, Jayanagar, Bangalore-560011
            </ContactItem>
          </a>
          <a data-aos="flip-up" data-aos-duration="500" href="tel:+4733378901">
            <ContactItem>
              <Phone style={{ marginRight: "10px" }} /> +91 9876543210
            </ContactItem>
          </a>
          <a
            data-aos="flip-up"
            data-aos-duration="500"
            href="mailto:nitesh@gmail.com"
          >
            <ContactItem>
              <MailOutline style={{ marginRight: "10px" }} /> contact@Art.dev
            </ContactItem>
          </a>
        </Nonlink>
        <Payment
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        />
      </Right>
    </Container>
  );
};

export default Footer;
