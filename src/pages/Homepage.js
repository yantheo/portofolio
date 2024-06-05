import React from "react";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Skills from "./Skills";

const Homepage = (props) => (
  //ecrire code ici
  <>
    <div className="homepage">
      <div className="about">
        <div className="content">
          <div className="presentation">
            <h2 className="title">
              Yanick THEODOSE
              <br />
              Web Developer FullStack
            </h2>
            <div className="resume">
              <p>
                A Web Developer with passion for building and creating Websites.
                I do Front-end and Back-end development. Javascript, HTML, CSS &
                PHP are the main languages that I use. Wordpress, Symfony and
                React.js are also part of my development stack.
              </p>
              <div className="readMorelink">
                <Link to="/projects">Read More...</Link>
              </div>
            </div>
          </div>
          <div className="imgProfil"></div>
        </div>
      </div>
			<Projects />
			<Skills/>
    </div>
  </>
);

export default Homepage;
