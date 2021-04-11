import React, { useState, useRef, useEffect } from "react";

//MATERIAL UI COMPONENTS
import { Hidden, makeStyles } from "@material-ui/core/";

//CUSTOM COMPONENTS
import FullNav from "../nav/fullnav";
import MobileNav from "../nav/mobilenav";

//UTILS
import { motion } from "framer-motion";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";

//STYLES
const useStyles = makeStyles({
  common: {
    left: "0",
    width: "100vw",
    display: "flex",
    position: "fixed",
  },
  header: {
    zIndex: "1301",
  },
  footer: {
    bottom: 0,
    zIndex: "1303",
  },
});

const Layout = withNavigationContext(
  ({
    children,
    toggleDarkMode,
    fullpage: {
      navigation: { navigating },
    },
  }) => {
    const classes = useStyles();
    const isFirstLoad = useRef(true);

    //TRANSITION HANDLER
    const [delay, setDelay] = useState(3000);

    const [moveOut, setMoveOut] = useState("100vh");

    const handleTransition = () => {
      setMoveOut("100vh");
      setTimeout(() => {
        setMoveOut("0vh");
      }, delay);
    };
    useEffect(() => {
      if (navigating == true) {
        handleTransition();
        if (isFirstLoad.current === true) {
          setDelay(1000);
        }
      }
    }, [navigating]);

    return (
      <>
        <Hidden xsDown>
          <motion.div
            animate={{ y: `-${moveOut}` }}
            transition={{ duration: 1 }}
            initial={{ y: "-100vh" }}
            className={`${classes.common} ${classes.header}`}
          >
            <FullNav toggleDarkMode={toggleDarkMode} />
          </motion.div>
        </Hidden>
        <main>{children}</main>
        <Hidden smUp>
          <motion.div
            animate={{ y: `${moveOut}` }}
            transition={{ duration: 1 }}
            initial={{ y: "100vh" }}
            className={`${classes.common} ${classes.footer}`}
          >
            <MobileNav toggleDarkMode={toggleDarkMode} />
          </motion.div>
        </Hidden>
      </>
    );
  }
);
export default Layout;
