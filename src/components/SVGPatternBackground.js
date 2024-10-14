import React from "react";
import useParallaxEffect from "../hooks/useParallaxEffect"; // Adjust the import path if necessary
import "./SVGPatternBackground.css";

const SVGPatternBackground = () => {
  useParallaxEffect(); // Invoke the parallax effect hook
  return (
    <div className="svg-pattern-background">
      {/* Layer 1 */}
      {/* <svg className="pattern-layer layer1" width="100%" height="100%">
        <defs>
          <pattern
            id="pattern1"
            x="0"
            y="0"
            width="80"
            height="69"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="40,0 80,20 80,60 40,80 0,60 0,20"
              fill="none"
              stroke="#4d88b8"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern1)" />
      </svg> */}

      {/* Layer 2 */}
      {/* <svg className="pattern-layer layer2" width="100%" height="100%">
        <defs>
          <pattern
            id="pattern2"
            x="0"
            y="0"
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="30,0 60,15 60,45 30,60 0,45 0,15"
              fill="none"
              stroke="#66b3ff"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern2)" />
      </svg> */}
    </div>
  );
};

export default SVGPatternBackground;
