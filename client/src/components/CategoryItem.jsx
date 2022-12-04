import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
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
      <Image src={item.img} />
      <Info>
        <Title className="tracking-in-contract" data-aos="zoom-in">
          {item.title}
        </Title>
        <Link to={`/products/${item.cat}`}>
          <Button data-aos="flip-down" className="hvr-sweep-to-right">
            SHOP NOW
          </Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
