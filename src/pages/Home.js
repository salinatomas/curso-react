import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import logo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Hero col-4">
            <img src={logo} alt="PlatziConf Logo" />
            <h2>Print Your Badges</h2>
            <p>The easiest way to manage your conference</p>
            <Link to="/badges" className="btn btn-primary">
              Start now
            </Link>
          </div>
          <div className="Image col-8">
            <img src={astronauts} alt="Astronautas" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
