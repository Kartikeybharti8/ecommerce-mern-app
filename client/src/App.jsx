import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import History from "./pages/orderHistory";
import Contact from "./pages/contact";
import Account from "./pages/MyAccount";
import Track from "./pages/TrackOrder";
import Terms from "./pages/terms";
import About from "./pages/About";
import Orders from "./pages/orders";
import Wishlist from "./pages/Wishlist";

import swal from "sweetalert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import "./pages/animation.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const App = () => {
  AOS.init();
  if (localStorage.getItem("isLoggedIn")) {
    swal("Login Successful");
  }

  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <link rel="stylesheet" href="./src/animation/magic.css" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/History">
          <History/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/myAccount">
          <Account />
        </Route>
        <Route path="/Track">
          <Track />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
          </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
