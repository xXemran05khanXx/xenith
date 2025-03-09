import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useNavbarAnimation = () => {
  useEffect(() => {
    gsap.to("#nav", {
      backgroundColor: "rgba(90, 227, 60, 0.5)", /* Blurred green effect */
      backdropFilter: "blur(10px)",
      height: "80px",
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
};
