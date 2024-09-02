import React from "react";

const Contact_body = () => {
  return (
    <>
      <section class="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.6600744716!2d77.35073368070039!3d12.954517011350426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1677825106265!5m2!1sen!2sin"
          width={600}
          height={450}
          allowFullScreen={""}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section class="contact-us">
        <div class="row">
          <div class="contact-col">
            <div>
              {" "}
              <i class="fa fa-home"></i>
              <span>
                <h5>XYZ Road ,ABC Building</h5>
                <p>Banglore ,Karnataka ,IN</p>
              </span>
            </div>
            <div>
              {" "}
              <i class="fa fa-phone"></i>
              <span>
                <h5>+1 0987654321</h5>
                <p>Monday to Saturday ,10AM to 6PM</p>
              </span>
            </div>
            <div>
              {" "}
              <i class="fa fa-envelope-o"></i>
              <span>
                <h5>EduFord@Gmail.com</h5>
                <p>Email us your query</p>
              </span>
            </div>
          </div>
          <div class="contact-col">
            <form action="" class="cont">
              <h3>Message Box</h3>
              <input type="text" placeholder="Enter Your Name" required />
              <input type="email" placeholder="Enter Email Address" required />
              <input type="text" placeholder="Enter Your Subject" required />
              <textarea
                rows="8"
                placeholder="Enter Your Message"
                required
              ></textarea>
              <button type="submit" class="hero-btn red-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact_body;
