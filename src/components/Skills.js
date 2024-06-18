import Image from "next/image";
import React, { useEffect, useRef } from "react";
import javascriptpNG from "../../public/images/skills/JavaScript-logo.png";
import ReactIcon from "../../public/images/skills/ReactIcon.png";
import NextJsIcon from "../../public/images/skills/NextJsIcon.png";
import TailwindCssIcon from "../../public/images/skills/TailwindCssIcon.png";
import ReduxIcon from "../../public/images/skills/reduxIcon.png";
import ZustandIcon from "../../public/images/skills/zustandIcon.png";
import Typescript from "../../public/images/skills/Typescript.png";
import postman from "../../public/images/skills/Postman.png";
import materialUi from "../../public/images/skills/MaterialUi.png";
import GitHubIcon from "../../public/images/skills/GitHubIcon.png";
import CssIcon from "../../public/images/skills/CssIcon.png";
import BootstrapIcon from "../../public/images/skills/Bootstrap.png";

const Skills = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, options);

    iconsRef.current.forEach((icon) => {
      observer.observe(icon);
    });

    return () => {
      iconsRef.current.forEach((icon) => {
        observer.unobserve(icon);
      });
    };
  }, []);

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="grid grid-cols-4 gap-8 mt-10 space-y-4">
        <div className="pt-4">
          <Image
            src={javascriptpNG}
            width={90}
            height={90}
            alt="JavaScript"
          />
        </div>
        <div>
          <Image src={ReactIcon} width={110} height={110} alt="React" />
        </div>
        <div>
          <Image src={NextJsIcon} width={90} height={90} alt="Next.js" />
        </div>
        <div>
          <Image
            src={TailwindCssIcon}
            width={110}
            height={110}
            alt="Tailwind CSS"
          />
        </div>
        <div>
          <Image src={ReduxIcon} width={90} height={90} alt="Redux" />
        </div>
        <div>
          <Image src={ZustandIcon} width={150} height={150} alt="Zustand" />
        </div>
        <div>
          <Image src={Typescript} width={85} height={85} alt="TypeScript" />
        </div>
        <div>
          <Image src={postman} width={90} height={90} alt="Postman" />
        </div>
        <div>
          <Image src={materialUi} width={110} height={110} alt="Material-UI" />
        </div>
        <div className="relative right-2">
          <Image src={GitHubIcon} width={170} height={170} alt="GitHub" />
        </div>
        <div className="pt-2">
          <Image src={CssIcon} width={90} height={90} alt="CSS" />
        </div>
        <div>
          <Image src={BootstrapIcon} width={110} height={110} alt="Bootstrap" />
        </div>
      </div>
    </>
  );
};

export default Skills;
