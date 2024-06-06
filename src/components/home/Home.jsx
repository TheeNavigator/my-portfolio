import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/image1.jpg";
import "./Home.css";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [" Full Stack Developer "];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="home" id="home">
      <img src={profile_img} alt="" className="home-image" />
      <h1>
        <span>I'm Sthembiso Mametja</span>, Full Stack Java Developer
      </h1>
      <p>
        A passionate Full Stack Java Developer with a knack for turning ideas
        into high-quality, scalable software solutions. With a strong foundation
        in both front-end and back-end technologies, I bring a holistic approach
        to web development.
      </p>
      <div className="home-action">
        <AnchorLink href="#contact" className="home-connect">
          Connect with me
        </AnchorLink>
        <a
          href="src\assets\SthembisoMametjaResume.pdf"
          className="home-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default Home;
