import styled from "styled-components";


const Container = styled.div`

  height: 30px;
  background-color: #F5FBFD;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Made by artisan, made for artisan</Container>;
};

export default Announcement;
