import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalf } from "react-icons/ti";

const Student = () => {
  return (
    <>
      <section class="testtimonials">
        <h1>What Our Student Says</h1>
        <p>
          Our current international students and alumni are strong and <br />{" "}
          valued ambassadors of the University
        </p>
        <div class="row">
          <div class="testtimonials-col">
            <img src="assets/img/user1.jpg" />
            <div>
              <p>
                EduFord offers a holistic course that not only focuses on
                theoretical knowledge, but also gives us many opportunities to
                gain practical skills which is very useful for the industry.
              </p>
              <h3>Charistine Berkley</h3>
              <span><TiStarFullOutline /></span>
              <span><TiStarFullOutline /></span>
              <span><TiStarFullOutline /></span>
              <span><TiStarFullOutline /></span>
              <span><TiStarFullOutline /></span>
           
            </div>
          </div>
          <div class="testtimonials-col">
            <img src="assets/img/user2.jpg" />
            <div>
              <p>
                I have really enjoyed my time in Londan as it is a very diverse
                city demographically. I found it easy to go around the city as
                there is a very efficient public transport system available
              </p>
              <h3>David Byer</h3>
              <span><TiStarFullOutline /></span>
              <span><TiStarFullOutline /></span>
              <span><TiStarFullOutline /></span>
              <span><TiStarFullOutline /></span>
              <span><TiStarHalf /></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Student;
