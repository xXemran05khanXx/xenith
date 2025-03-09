import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/global.css"; 
 import Navbar from "../components/navbar";
gsap.registerPlugin(ScrollTrigger);

const XenithHome = () => {

  useEffect(() => {
    // Cursor Effect
    const cursor = document.getElementById("cursor");
    const cursorBlur = document.getElementById("cursor_blur");
    
    if (cursor && cursorBlur) {
      document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorBlur.style.left = `${e.clientX}px`;
        cursorBlur.style.top = `${e.clientY}px`;
      });
    }
  }, []);
  
  useEffect(() => {
    // GSAP Scroll Animation for Navbar
    gsap.to("#nav", {
      backgroundColor: "rgba(90, 227, 60, 0.5)", // Navbar changes color on scroll
      backdropFilter: "blur(10px)",
      height: "120px",
      duration: 0.5,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div id="main">
        {/* Custom Cursor */}
        <div id="cursor"></div>
        <div id="cursor_blur"></div>
      </div>
    </div>
  );
};

export default XenithHome;
