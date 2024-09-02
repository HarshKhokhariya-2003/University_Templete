import React from "react";

const Blog_body = () => {
  return (
    <>
      <section class="blog-content">
        <div class="row">
          <div class="blog-left">
            <img src="assets/img/certificate.jpg" />
            <h2>Our Certificate & Online Programs For 2024</h2>
            <p>
              A certificate program is a specialized education designed to
              develop or strengthen specific career skills. A certificate
              program is considered continuing education in some cases because
              it builds on your knowledge of a particular career or industry. In
              other cases, it requires no prior education and can help you learn
              about a subject, career, or industry to pursue related jobs.In
              this article, we'll go over the differences between certificate
              programs and degrees, the benefits of completing a certificate
              program, and how you can determine which certificate program is
              best for you.{" "}
            </p>
            <br />
            <p>
              Thanks to the expansion of online education and the growing demand
              for skilled employees, there are now myriad certificate programs
              available. Whether you're interested in learning from a storied
              college or university or a leading company, you have many options
              to consid.
            </p>
            <br />
            <p>
              You can earn a certificate in many different areas. While many
              programs tend to focus on career-heavy topics like tech, business,
              health care, and computer science, certificate programs are
              available in more traditional academic subjects, like women's
              studies and ancient history.
            </p>
            <br />
            <p>
              The length of each certificate program depends on what you study,
              but most take far less time than a degree because they tend to
              prioritize practicality and job-ready skills. On average,
              certificate programs take around three to seven months, depending
              on what you're learning and how the program is structured.{" "}
            </p>
            <div class="comment-box">
              <h3>Leave a comment</h3>
              <form class="comment-form">
                <input type="text" placeholder="Enter Name" required />
                <input type="email" placeholder="Enter Email" required />
                <textarea
                  rows="5"
                  placeholder="Your Comment"
                  required
                ></textarea>
                <button type="submit" class="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div>
          </div>
          <div class="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics</span>
              <span>22</span>
            </div>
            <div>
              <span>Data Science</span>
              <span>27</span>
            </div>
            <div>
              <span>Machine Learning</span>
              <span>14</span>
            </div>
            <div>
              <span>Computer Science</span>
              <span>35</span>
            </div>
            <div>
              <span>AutoCAD</span>
              <span>41</span>
            </div>
            <div>
              <span>Journalism</span>
              <span>22</span>
            </div>
            <div>
              <span>Commerce</span>
              <span>31</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog_body;
