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
              <p>أستطيع تقديم هذا الخدمة لك لم اصمم الموقع بشكل احترافي ولكن بشكل مبدئي</p>
              <a href="/servers" className="btn">
                تفاصيل اكثر
              </a>
            </div>

            <div className="content-jobs">
              <h1> مبرمج الواجهة الأمامية</h1>
              <p>استطيع تحويل المتصميمات من مجرد صورة الي موقع تفاعلي جدا</p>
              <a href="/servers" className="btn">
                تفاصيل أكثر
              </a>
            </div>
            <div className="content-jobs">
              <h1>مبرمج الواجهة الخلفية </h1>
              <p>أستطيع تقديم خدمة مبرمج الواجهات الخلفية و بناء قواعد البيانات و ربطها مع بعضها </p>
              <a href="/servers" className="btn">
                تفاصيل اكثر
              </a>
            </div>
            <div className="content-jobs">
              <h1>Mern stack</h1>
              <p>يمكنني تقديم جميع هذه الخدمات السابقة في الموقع واحد عن طريق استخدام هذه التقنية </p>
              <a href="/servers" className="btn">
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
              <div className="html ski-1">
                <img src={html} alt="" className="icon-avter" />
                <div className="plot-all-html">
                  <div className="plot-part-html">
                    {" "}
                    <h3 className="presnt">90%</h3>
                  </div>
                </div>
              </div>

              <hr />

              <div className="css ski-2">
                <img src={css} alt="" className="icon-avter css-img" />
                <div className="plot-all-css">
                  <div className="plot-part-css">
                    {" "}
                    <h3 className="presnt">75%</h3>
                  </div>
                </div>
              </div>
              <hr />

              <div className="tcss ski-3">
                <img src={tcss} alt="" className="icon-avter tcss-img" />
                <div className="plot-all-tcss">
                  <div className="plot-part-tcss">
                    {" "}
                    <h3 className="presnt">65%</h3>
                  </div>
                </div>
              </div>

              <hr />

              <div className="javascript ski-4">
                <img src={js} alt="" className="icon-avter javascript-img" />
                <div className="plot-all-javascript">
                  <div className="plot-part-javascript">
                    {" "}
                    <h3 className="presnt">85%</h3>
                  </div>
                </div>
              </div>
              <hr />

              <div className="react ski-5">
                <img src={react} alt="" className="icon-avter react-img" />
                <div className="plot-all-react">
                  <div className="plot-part-react">
                    {" "}
                    <h3 className="presnt">70%</h3>
                  </div>
                </div>
              </div>

              <hr />

              <div className="express ski-6">
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
