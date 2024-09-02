import React from "react";

const Course = () => {
  return (
    <>
      <section class="course">
        <h1>Courses we offer</h1>
        <p>
          Our offer a variety of courses, workshops, seminars and talks <br />{" "}
          all over the world. Here are a few for you to see
        </p>
        <div class="row couresArray">
          <div class="course-col">
            <h3>Intermediate</h3>
            <p>
              Work is a very important part of our lives. Most of us have jobs
              and work, so we always have to say something about that. Talking
              about work is one of the topics that can get people together. Here
              are some suggestions when talking about work
            </p>
          </div>
          <div class="course-col">
            <h3>Degree</h3>
            <p>
              In today's society it is often heard that a college degree is
              required to achieve a good and comfortable life. If one wants to
              make more money and live a stable and secure life, then they must
              go to college and achieve a degree.
            </p>
          </div>
          <div class="course-col">
            <h3>Post Graduation</h3>
            <p>
              A postgraduate degree is a type of qualification that is completed
              after an undergraduate degree. Postgraduate degrees encompass a
              range of qualifications, including masters degrees, Postgraduate
              Diplomas and Certificates, and PhDs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Course;
