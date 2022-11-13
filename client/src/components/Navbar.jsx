import { Badge } from "@material-ui/core";
import { Search,OutdoorGrill, ShoppingCartOutlined} from "@material-ui/icons";
import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../redux/userRedux';
import "./Navbar.css";

const Container = styled.div`
  background-color: #fff4ef;
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 5px;
  display: none !important;
  display: flex;
  display:none;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
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
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  // window.localStorage.clear();
  const quantity = useSelector((state) => state.cart.quantity);

  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);
  // console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration: "none"}}><Logo>Artisans</Logo></Link>
        </Center>
        <Right>
          {!user && (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <MenuItem className="nav-items">REGISTER</MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem className="nav-items">Login</MenuItem>
              </Link>
            </>
          )}

          {user && (
            <>
              <div
                onClick={() => setShowPopup((prev) => !prev)}
                className="relative cursor-pointer ml-[10px] border  space-x-3 rounded p-2 flex justify-between items-center parent "
              >
                <div className="text-[12px] sm:text-[14px] tracking-wide   ">
                 Hii {user?.name.toUpperCase()}
                </div>
                <div
                  onClick={handleLogout}
                  className="logoutParent ">
                  <button className="logout ">
                    <OutdoorGrill />
                  </button>
                </div>
              </div>
            </>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge className="nav-items" badgeContent={quantity}>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
