import React from "react";      
import Head from "./Head";
import Footer from "./Footer";
import Course from "./Course";
import Facility from "./Facility";

const Course_main = () =>{
    return(
    <>
        <Head title="Our Courses"/>
        <Course/>
        <Facility/>
        <Footer/>
    </>
    );
}
export default Course_main;