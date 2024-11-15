// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Style from "./component.css";
function Navbar() {
  //   useEffect(() => {
  //     var hambuger = document.getElementById("hamburger");
  //     var hhh = document.getElementById("hhh");
  //     var pop = true;
  //     hambuger.addEventListener("click", () => {
  //       if (pop) {
  //         hhh.style.display = "flex";
  //         pop = false;
  //       } else {
  //         hhh.style.display = "";
  //         pop = true;
  //       }
  //     });
  //   }, []);
  return (
    <>
      <div>
        {/* <img id="hamburger" src="/menu.png" alt="err" className="hamburger" /> */}
        <nav className="navCon">
          <div className="Label"> WELCOME </div>
          <div className="pisah"></div>
          <ul className="navColom">
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/project">PROJECT</Link>
            <a href="https://wa.me/085691941488/?text">CONTACT ME</a>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
