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
              <h1>UI/UX مصمم</h1>
              <p>و هو مجرد شكل مبدئي و تخيل كل جوانب الموقع</p>
              <a href="/server" className="btn">
                تفاصيل اكثر
              </a>
            </div>

            <div className="content-jobs">
              <h1> مبرمج الواجهة الأمامية</h1>
              <p>و هو الذي يقوم بتحويل الصورة من مجرد تصميم الي كود فعلي </p>
              <a href="/server" className="btn">
                تفاصيل أكثر
              </a>
            </div>
            <div className="content-jobs">
              <h1>مبرمج الواجهة الخلفية </h1>
              <p>هو الشخص الذي يهتم بالخوادة و المعلومات التي يحتاجها مبرمج الواجهة الامامية</p>
              <a href="/server" className="btn">
                تفاصيل اكثر
              </a>
            </div>
            <div className="content-jobs">
              <h1>Mern stack</h1>
              <p>هو الشخص الذي يعمل باربع تقنيات قوية مع بعضها</p>
              <a href="/server" className="btn">
                تفاصيل اكثر
              </a>
            </div>
          </div>
        </div>

        <div className="right-me">
          <div className="img-me">
            <div className="me">
              <img src={img} alt="image" className="img" />
              <div className="all-name">
                <h2>أحمد متولي فرج</h2>
                <p>Full-Stack Developer</p>
              </div>
            </div>
            <a href="/profile" className="btn-profile">
              الملف الشخصي
            </a>
          </div>
          <div className="skills">
            <h2>المهارات</h2>
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
