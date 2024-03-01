import React from "react";
import "./About.css";
import imgabout from "./1679252896713_6al7fh_2_0.jpg";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


const About = () => {
  return (
    <div className="about" id="about">
      <div className="img-me about-me">
        <div className="me">
          <img src={imgabout} alt="image" className="img" />
          <div className="all-name">
            <h2>أحمد متولي فرج</h2>
            <p>Full-Stack Developer</p>
          </div>
        </div>
        <a href="/profile" className="btn-profile">
          الملف الشخصي
        </a>
      </div>
      <div className="about-content">
        <h1>معلومات عني</h1>
        <p>
          أنا شخص في سن 17 من عمري تعلمت البرمجة في سن 16 وانا حاليا في الصف
          الثاني الثانوي و انا اسكن في محافظة البحيرة و في مدينة رشيد في قرية
          الجدية هواياتي هي تعلم اي شيء جديد والبحث عن الاخطأ و حلها و اتعلم
          البرمجة عن طريق اقامة مشاريع لكي اقابل المشاكل الواقعية و أتدرب علي
          طريق التفكير و البحث عن الحل و هذا ما طور مهاراتي بشكل صحيح{" "}
        </p>
      </div>

      <div className="img-me  icon-about" id="icon-about">
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/Ahmed-175?tab=repositories"
                target="_blank"
                style={{ color: "#000" }}
                className="github"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100072925321728"
                target="_blank"
                style={{ color: "#0072b1",  }}
                className="face"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ahmed-farag-3b455626b/"
                target="_blank"
                style={{ color: "#4267b2" }}
                className="linkedin"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/abmedfarag175/?hl=en"
                target="_blank"
                style={{ color: "#e1306c" }}
                className="instagram"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default About;
