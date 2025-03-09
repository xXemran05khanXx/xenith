import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./css/navbar.module.css";
import "../styles/global.css";

gsap.registerPlugin(ScrollTrigger);



const Navbar: React.FC = () => {

  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "rgba(90, 227, 60, 0.5)",
      backdropFilter: "blur(10px)",
      height: "80px", 
      duration: 0.5,
      scrollTrigger: {
        trigger: "body",
        start: "top -10%", 
        end: "top -11%",
        scrub: 1, 
      },
    });
  }, []);

  return (
    <nav id="nav" className={styles.nav}>
      <img src="assets/media/xenith_logo.png" alt="Xenith Logo" className={styles.logo} />
      <div className={styles.navItems}>
        {["Gallery", "Upcoming", "Members", "About", "Contact"].map((item) => (
          <h4 key={item} className={styles.navItem}>
            {item}
          </h4>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
