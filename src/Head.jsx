import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Head = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to show the menu
  const showMenu = () => {
    setMenuVisible(true);
  };

  // Function to hide the menu
  const hideMenu = () => {
    setMenuVisible(false);
  };
  return (
    <>
      <section class="sub-header">
        <nav>
          <a href="index.html">
            <img src="assets/img/logo.png" />{" "}
          </a>
          <div className={`nav-links ${menuVisible ? "visible" : ""}`}>
             <h1 onClick={hideMenu}><LiaTimesSolid /></h1>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/course">COURSE</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <h1 onClick={showMenu}><LiaBarsSolid /></h1>
        </nav>
        <h1>{props.title}</h1>
      </section>
    </>
  );
};
export default Head;
