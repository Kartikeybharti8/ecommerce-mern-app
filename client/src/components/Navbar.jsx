import { Badge } from "@material-ui/core";
import { Search,OutdoorGrill,FavoriteBorderOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Wishlist from "../pages/Wishlist";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../redux/userRedux";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";

const Container = styled.div`
  background-color: #F5FBFD;
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
  display: none;
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
  text-decoration: none
`;
const Logo = styled.h1`
  font-family: "rovo", cursive !important;
  color: #ee6c4d;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  h1:hover {
    color: #ee6c4d !important;
    background-color: transparent;
    text-decoration: none;
  }
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

const WishlistIcon = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  // const [user, setUser] = useState(false);
  // useEffect(() => {
  //   if (localStorage.getItem("isLoggedIn")) {
  //     setUser(true);
  //   } else {
  //     setUser(false);
  //   }
  //   //  eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // //
  // const handleLogout = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   window.location.reload();
  // };
  const wishlist = useSelector((state) => state.wishlist);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  // window.localStorage.clear();
  const quantity = useSelector((state) => state.cart.quantity);
  let wishlistQuantity = useSelector((state) => state.wishlist.quantity);

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
          <Link
            to="/"
            className="hvr-bounce-in typewriter logo"
            style={{ textDecoration: "none" }}
          >
            <Logo>Artisans</Logo>
          </Link>
        </Center>
        <Right>
          {!user && (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <MenuItem className="hvr-underline-from-left  ">
                  REGISTER
                </MenuItem>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <MenuItem className="nav-items hvr-underline-from-left ">
                  LOGIN
                </MenuItem>
              </Link>
            </>
          )}

          {user && (
            <>
              <div
                onClick={() => setShowPopup((prev) => !prev)}
                className="parent"
              >
                <Link to="/myAccount">
                  <button className="hvr-underline-from-left transparent">
                    {user?.name.toUpperCase()}
                  </button>
                </Link>

                <div onClick={handleLogout} className="logoutParent  ">
                  <LogoutIcon className="hvr-underline-from-left hvr-grow" />
                </div>
              </div>
            </>
          )}

          <Link to="/wishlist">
            <MenuItem className="cartCount">
              <Badge className="nav-items" badgeContent={wishlist.products.length}>
                <FavoriteBorderOutlined  className="cartIcon hvr-grow"/>
              </Badge>
            </MenuItem>
          </Link>

          <Link to="/cart">
            <MenuItem className="cartCount">
              <Badge className=" hvr-shrink " badgeContent={quantity}>
                <ShoppingCartOutlined className="hvr-shrink cartIcon hvr-grow" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
