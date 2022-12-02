import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const Container = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/CBPT2sp/Mahatma-Gandhi-Independence-Quote-Desktop-Wallpaper.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0 10px 0;
  padding: 10px;
  flex: 1;
  outline: none;
  background-color: #f0f0f0;
  border: none;
`;
const Nonlink = styled.div`
  a:link {
    color: black;
    background-color: transparent;
    text-decoration: none !important;
  }

  a:visited {
    color: black;
    background-color: transparent;
    text-decoration: none !important;
  }

  a:hover {
    color: #ee6c4d;
    background-color: fff4efv;
    text-decoration: none !important;
  }

  a:active {
    color: black;
    background-color: transparent;
    text-decoration: none !important;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Linked = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, isError, currentUser } = useSelector(
    (state) => state.user
  );
  const router = useRouter();
  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      login(dispatch, { email, password });
    },
    [email, password]
  );

  if (currentUser) {
    swal("login")
    router.replace('/');
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Match The Requested Format (name@example.com) "
            type="email"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must Contain At Least One Number And One Uppercase And Lowercase Letter, And At Least 8 Or More Characters"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {isError && <Error>Something Went Wrong...</Error>}
          {/*
          <Linked><Link>FORGOT PASSWORD?</Link></Linked>
          */}
          <Linked>
            <Nonlink>
              <Link to="/register">CREATE A NEW ACCOUNT</Link>
            </Nonlink>
          </Linked>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
