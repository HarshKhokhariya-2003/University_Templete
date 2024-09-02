import React from "react";

const Facility = () => {
  return (
    <>
      <section class="facilities">
        <h1>Our Facilities</h1>
        <p>
          {" "}
          EduFord is thoughtfully designed to provide students with <br /> a
          vibrant learning atmosphere.
        </p>
        <div class="row">
          <div class="facilities-col">
            <img src="assets/img/library.png" />
            <h3>World Class Library</h3>
            <p>
              A library is a collection of materials, books or media that are
              accessible for use and not just for display purposes.
            </p>
          </div>
          <div class="facilities-col">
            <img src="assets/img/basketball.png" />
            <h3>Largest Play Ground</h3>
            <p>
              The college presently have it's own playground, where regular
              sports & games such as volleyball, football and cricket etc are
              conducted time to time.
            </p>
          </div>
          <div class="facilities-col">
            <img src="assets/img/cafeteria.png" />
            <h3>Tasty and Healthy Food</h3>
            <p>
              Possibilities include fresh or dried fruit, pretzels, unbuttered
              popcorn, rice cakes or whole wheat crackers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Facility;
