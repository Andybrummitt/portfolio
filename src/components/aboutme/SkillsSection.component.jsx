import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import StarRating from "./StarRating.component";

const SkillsSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start(sectionVariants.visible);
    }
    if (!inView) {
      controls.start(sectionVariants.hidden);
    }
  }, [inView]);

  const sectionVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="animation-ref-container" ref={ref}>
      <motion.section className="skills-section" animate={controls}>
        <h3>My Skills</h3>
        <ul>
          <li>
            HTML <StarRating delay={0.5} stars={8} />
          </li>
          <li>
            CSS, SCSS <StarRating delay={1} stars={7} />
          </li>
          <li>
            Javascript <StarRating delay={1.5} stars={7} />
          </li>
          <li>
            React <StarRating delay={2} stars={6} />
          </li>
          <li>
            Git <StarRating delay={2.5} stars={6} />
          </li>
          <li>
            Node, Express <StarRating delay={3} stars={5} />
          </li>
          <li>
            Firebase <StarRating delay={3.5} stars={4} />
          </li>
          <li>
            Webpack <StarRating delay={4} stars={4} />
          </li>
        </ul>
      </motion.section>
    </div>
  );
};

export default SkillsSection;
