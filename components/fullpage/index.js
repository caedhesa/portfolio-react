import React, { useRef, useState } from "react";

//MATERIAL UI COMPONENTS
import useMediaQuery from "@material-ui/core/useMediaQuery";

//CUSTOM COMPONENTS
import Startup from "../startup/";

//UTILS
import AwesomeSlider from "react-awesome-slider";
import { withNavigationHandlers } from "react-awesome-slider/dist/navigation";

//MEDIA
import { media } from "../media";

//SLIDER ANIMATIONS
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";

const Slider = withNavigationHandlers(AwesomeSlider);

const FullpageSlider = () => {
  const isFirstLoad = useRef(true);
  //CHANGE ANIMATION BASED ON SCREEN WIDTH
  const matches = useMediaQuery("(min-width:600px)");
  const animation = matches ? `cubeAnimation` : `foldOutAnimation`;

  const [delay, setDelay] = useState(2500);

  return (
    <Slider
      media={media}
      buttons={false}
      mobileTouch={false}
      animation={animation}
      transitionDelay={delay}
      startupScreen={<Startup />}
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isFirstLoad.current === true) {
          setDelay(500);
        }
      }}
    />
  );
};

export default FullpageSlider;
