import React from "react";

import photo from "../images/photo-grid.png"

export default function Main() {
    return (
        <section className="main">
            <img src={photo} className="main-photo" />
            
            <h1 className="main-heading">Online Experiences</h1>
            <p className="main-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}