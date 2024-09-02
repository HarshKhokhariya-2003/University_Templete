import React from "react";
import Course from "./Course";
import Campus from "./Campus";
import Facility from "./Facility";
import Student from "./Student";
import Action from "./Action";

const Body=()=>{
    return(
        <>
            <Course/>
            <Campus/>
            <Facility/>
            <Student/>
            <Action/>
        </>
    );
}
export default Body;