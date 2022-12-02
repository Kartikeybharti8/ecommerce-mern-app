import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
// import CountUp, { useCountUp } from "react-countup";
// import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import "./news.css";
const Container = styled.div`
  height: 60vh;
  background-color: #F5FBFD;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ textAlign: "center" })}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const Counter = () => {
  const [counterOn, setCounterOn] = useState(0);
 
  return (
    <Container data-aos="zoom-in">
      {/* <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      > */}
        <center>
          <Title>Love from all over India</Title>
          <Desc data-aos="flip-down">Ready to deliver Happiness and art </Desc>
          <h1>
            {/* {counterOn && (
              <CountUp
                className="Count"
                start={60}
                end={621}
                duration={1}
                delay={0}
              />
            )} */}
          </h1>
        </center>
      {/* </ScrollTrigger> */}
    </Container>
  );
};

export default Counter;
