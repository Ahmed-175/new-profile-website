import React from "react";
import "./Home.css";
import img from "./ahmd.jpg";
import html from "./OIP.jpg";
import css from "./css.jpg";
import js from "./JavaScript_Logo.png";
import tcss from "./free-tailwind-icon@2x.png";
import react from "./react-logo-png-7.png";
import express from "./express.jpg"

const Home = () => {
  return (
    <div>
      <div className="home-cont">
        <div className="left-jobs">
          <div className="all-jobs">
            <div className="content-jobs">
              <h1>UI/UX deginer</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="/server" className="btn">
                View More
              </a>
            </div>

            <div className="content-jobs">
              <h1>Frontend</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="/server" className="btn">
                View More
              </a>
            </div>
            <div className="content-jobs">
              <h1>Backend</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="/server" className="btn">
                View More
              </a>
            </div>
            <div className="content-jobs">
              <h1>Mern stack</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="/server" className="btn">
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="right-me">
          <div className="img-me">
            <div className="me">
              <img src={img} alt="image" className="img" />
              <div className="all-name">
                <h2>Ahmed Mitwalli Farag</h2>
                <p>Full-Stack Developer</p>
              </div>
            </div>
            <a href="/profile" className="btn-profile">
              profile
            </a>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="Plotly-js">
              <div className="html">
                <img src={html} alt="" className="icon-avter" />
                <div className="plot-all-html">
                  <div className="plot-part-html">
                    {" "}
                    <h3 className="presnt">90%</h3>
                  </div>
                </div>
              </div>

              <hr />

              <div className="css">
                <img src={css} alt="" className="icon-avter css-img" />
                <div className="plot-all-css">
                  <div className="plot-part-css">
                    {" "}
                    <h3 className="presnt">75%</h3>
                  </div>
                </div>
              </div>
              <hr />

              <div className="tcss">
                <img src={tcss} alt="" className="icon-avter tcss-img" />
                <div className="plot-all-tcss">
                  <div className="plot-part-tcss">
                    {" "}
                    <h3 className="presnt">65%</h3>
                  </div>
                </div>
              </div>

              <hr />

              <div className="javascript">
                <img src={js} alt="" className="icon-avter javascript-img" />
                <div className="plot-all-javascript">
                  <div className="plot-part-javascript">
                    {" "}
                    <h3 className="presnt">85%</h3>
                  </div>
                </div>
              </div>
              <hr />

              <div className="react">
                <img src={react} alt="" className="icon-avter react-img" />
                <div className="plot-all-react">
                  <div className="plot-part-react">
                    {" "}
                    <h3 className="presnt">70%</h3>
                  </div>
                </div>
              </div>

              <hr />

              <div className="express">
                <img src={express} alt="" className="icon-avter express-img" />
                <div className="plot-all-express">
                  <div className="plot-part-express">
                    {" "}
                    <h3 className="presnt">79%</h3>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
