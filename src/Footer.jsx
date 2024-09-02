import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <h4>About Us</h4>
        <p>
          Established in 1843, EduFord has a long history of unlocking
          potential, breaking down barriers <br /> and making a real difference
          to lives around the world.
        </p>
        <div class="icons">
          <span><GrFacebookOption /></span>
          <span><GrTwitter /></span>
          <span><GrInstagram /></span>
          <span><GrLinkedinOption /></span>
        </div>
      </section>
    </>
  );
};
export default Footer;
