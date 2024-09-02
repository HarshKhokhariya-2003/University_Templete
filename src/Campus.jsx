import React from "react";

const Campus = () => {
  return (
    <>
      <section class="campus">
        <h1>Our Global Campus</h1>
        <p>
          Connects Students Around The World To Collaborate, <br /> Discuss And
          Learn Together Every Day.
        </p>
        <div class="row">
          <div class="campus-col">
            <img src="assets/img/london.png" />
            <div class="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div class="campus-col">
            <img src="assets/img/newyork.png" />
            <div class="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div class="campus-col">
            <img src="assets/img/washington.png" />
            <div class="layer">
              <h3>WASHIGTON</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Campus;
