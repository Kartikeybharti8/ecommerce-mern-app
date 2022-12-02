import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./account.css";
const Account = () => {
  function scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  scroll();
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
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <div className="parentDiv">
      <Announcement />
      <Navbar />
      {!user && (
        <>
          {" "}
          <h1>Kindly login first</h1>
          <Link to="/login" style={{ textDecoration: "none" }}>
            login
          </Link>
        </>
      )}
      {user && (
        <>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div className="container bootstrap snippets bootdey ">
            <div className="row">
              <div className="profile-nav col-md-3">
                <div className="panel">
                  <div className="user-heading round">
                    <a href="#">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
                        alt=""
                      />
                    </a>
                    <h1> {user?.name.toUpperCase()}</h1>
                  </div>
                  <ul className=" ">
                    <li>
                      <a href="/orders">
                        <ShoppingBagIcon />
                        Your orders
                        <span className="label label-warning pull-right r-activity"></span>
                      </a>
                    </li>
                    <br />
                    <li>
                      <Link to="/cart">
                        <ShoppingCartIcon />
                        Cart
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="profile-info col-md-9">
                <div className="panel">
                  <div className="bio-graph-heading  ">Your Account</div>
                  <div className="panel-body bio-graph-info pt-4">
                    <button className="btn btn-outline-primary md-5">
                      Edit
                    </button>
                    <button className="btn btn-outline-primary md-5 ms-2 ">
                      <Nonlink>
                        <Link className="black" to="/track">
                          Track your orders
                        </Link>
                      </Nonlink>{" "}
                    </button>
                    <div className="col userDetails">
                      <div className="bio-row">
                        <p>
                          <span>
                            {" "}
                            <b>Name</b>{" "}
                          </span>
                          : {user?.name}
                        </p>
                      </div>

                      <div className="bio-row">
                        <p>
                          <span>
                            {" "}
                            <b>Email</b>{" "}
                          </span>
                          :{user?.email}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span>
                            {" "}
                            <b>Mobile No.</b>
                          </span>
                          : {user?.phone}
                        </p>
                      </div>
                      <div className="bio-row">
                        <p>
                          <span>
                            {" "}
                            <b>Address </b>
                          </span>
                          : 1300 sector 4
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <h1 className="user-heading suggestionHeading">
                    You can also buy
                  </h1>
                  <div className="row">
                    <div className="col-md-6 accountRec">
                      <div className="panel">
                        <div className="panel-body">
                          <div className="bio-chart">
                            <div
                              style={{
                                display: "inline",
                                width: 100,
                                height: 100,
                              }}
                            >
                              <canvas width={100} height="100px" />
                              <input
                                className="knob"
                                data-width={100}
                                data-height={100}
                                data-displayprevious="true"
                                data-thickness=".2"
                                defaultValue={63}
                                data-fgcolor="#4CC5CD"
                                data-bgcolor="#e8e8e8"
                                style={{
                                  width: 54,
                                  height: 33,
                                  position: "absolute",
                                  verticalAlign: "middle",
                                  marginTop: 33,
                                  marginLeft: "-77px",
                                  border: 0,
                                  fontWeight: "bold",
                                  fontStyle: "normal",
                                  fontVariant: "normal",
                                  fontStretch: "normal",
                                  fontSize: 20,
                                  lineHeight: "normal",
                                  fontFamily: "Arial",
                                  textAlign: "center",
                                  color: "rgb(76, 197, 205)",
                                  padding: 0,
                                  WebkitAppearance: "none",
                                  background: "none",
                                }}
                              />
                            </div>
                          </div>
                          <div className="bio-desk">
                            <h4 className="red">Pot</h4>
                            <p>Rs 60</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 accountRec">
                      <div className="panel">
                        <div className="panel-body">
                          <div className="bio-chart">
                            <div
                              style={{
                                display: "inline",
                                width: 100,
                                height: 100,
                              }}
                            >
                              <canvas width={100} height="100px" />
                              <input
                                className="knob"
                                data-width={100}
                                data-height={100}
                                data-displayprevious="true"
                                data-thickness=".2"
                                defaultValue={63}
                                data-fgcolor="#4CC5CD"
                                data-bgcolor="#e8e8e8"
                                style={{
                                  width: 54,
                                  height: 33,
                                  position: "absolute",
                                  verticalAlign: "middle",
                                  marginTop: 33,
                                  marginLeft: "-77px",
                                  border: 0,
                                  fontWeight: "bold",
                                  fontStyle: "normal",
                                  fontVariant: "normal",
                                  fontStretch: "normal",
                                  fontSize: 20,
                                  lineHeight: "normal",
                                  fontFamily: "Arial",
                                  textAlign: "center",
                                  color: "rgb(76, 197, 205)",
                                  padding: 0,
                                  WebkitAppearance: "none",
                                  background: "none",
                                }}
                              />
                            </div>
                          </div>
                          <div className="bio-desk">
                            <h4 className="red">Pot</h4>
                            <p>Rs 60</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 accountRec">
                      <div className="panel">
                        <div className="panel-body">
                          <div className="bio-chart">
                            <div
                              style={{
                                display: "inline",
                                width: 100,
                                height: 100,
                              }}
                            >
                              <canvas width={100} height="100px" />
                              <input
                                className="knob"
                                data-width={100}
                                data-height={100}
                                data-displayprevious="true"
                                data-thickness=".2"
                                defaultValue={75}
                                data-fgcolor="#96be4b"
                                data-bgcolor="#e8e8e8"
                                style={{
                                  width: 54,
                                  height: 33,
                                  position: "absolute",
                                  verticalAlign: "middle",
                                  marginTop: 33,
                                  marginLeft: "-77px",
                                  border: 0,
                                  fontWeight: "bold",
                                  fontStyle: "normal",
                                  fontVariant: "normal",
                                  fontStretch: "normal",
                                  fontSize: 20,
                                  lineHeight: "normal",
                                  fontFamily: "Arial",
                                  textAlign: "center",
                                  color: "rgb(150, 190, 75)",
                                  padding: 0,
                                  WebkitAppearance: "none",
                                  background: "none",
                                }}
                              />
                            </div>
                          </div>
                          <div className="bio-desk">
                            <h4 className="red">Pot</h4>
                            <p>Rs 60</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 accountRec">
                      <div className="panel">
                        <div className="panel-body">
                          <div className="bio-chart">
                            <div
                              style={{
                                display: "inline",
                                width: 100,
                                height: 100,
                              }}
                            >
                              <canvas width={100} height="100px" />
                              <input
                                className="knob"
                                data-width={100}
                                data-height={100}
                                data-displayprevious="true"
                                data-thickness=".2"
                                defaultValue={50}
                                data-fgcolor="#cba4db"
                                data-bgcolor="#e8e8e8"
                                style={{
                                  width: 54,
                                  height: 33,
                                  position: "absolute",
                                  verticalAlign: "middle",
                                  marginTop: 33,
                                  marginLeft: "-77px",
                                  border: 0,
                                  fontWeight: "bold",
                                  fontStyle: "normal",
                                  fontVariant: "normal",
                                  fontStretch: "normal",
                                  fontSize: 20,
                                  lineHeight: "normal",
                                  fontFamily: "Arial",
                                  textAlign: "center",
                                  color: "rgb(203, 164, 219)",
                                  padding: 0,
                                  WebkitAppearance: "none",
                                  background: "none",
                                }}
                              />
                            </div>
                          </div>
                          <div className="bio-desk">
                            <h4 className="red">Pot</h4>
                            <p>Rs 60</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};
export default Account;
