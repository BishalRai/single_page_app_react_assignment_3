import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <div>This is Home Page </div>
        <Link to = "/about"> Go about</Link>
        </>
    )
}