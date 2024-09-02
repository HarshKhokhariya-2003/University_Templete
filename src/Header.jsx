import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { LiaBarsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to show the menu
  const showMenu = () => {
    setMenuVisible(true);
  };

  // Function to hide the menu
  const hideMenu = () => {
    setMenuVisible(false);
  };

  // const[]=useState();
  // const hideMenu=()=>{

  // }
  // const showMenu=()=>{

  // }
  return (
    <>
      <section class="header">
        <nav>
          <a href="#">
            <img src="assets/img/logo.png" />
          </a>
          <div className={`nav-links ${menuVisible ? "visible" : ""}`}>
            <h1 onClick={hideMenu}>
              <LiaTimesSolid />
            </h1>
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
          <h1 onClick={showMenu}>
            <LiaBarsSolid />
          </h1>
        </nav>
        <div class="text-box">
          <h1>World's Biggest University</h1>
          <p>
            Making website is now one of the easiest thing in the world.You just
            need to learn HTML , CSS ,<br />
            Javascript and you are good to go.
          </p>
          <a href="" class="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </section>
    </>
  );
};
export default Header;
