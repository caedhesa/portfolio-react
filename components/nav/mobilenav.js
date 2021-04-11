import React, { useState, useEffect } from "react";

//MATERIAL UI COMPONENTS
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import {
  Fab,
  Link,
  Slide,
  Popover,
  useTheme,
  makeStyles,
} from "@material-ui/core";

//CUSTOM COMPONENTS
import ConfigNav from "./confignav";
import useTranslation from "../translate";

//UTILS
import { motion } from "framer-motion";
import { Link as SliderLink } from "react-awesome-slider/dist/navigation";

//BUTTONS ANIMATION DELAY
const DELAY = 150;

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: "1",
    padding: "1em",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  leftHand: {
    justifyContent: "flex-start",
  },
  popPaper: {
    position: "initial",
    borderRadius: "0",
    width: "100vw",
    height: "100vh",
    maxWidth: "100vw",
    maxHeight: "100vh",
  },
  main: {
    display: "flex",
    marginTop: "5vh",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "70vh",
    justifyContent: "space-evenly",
  },
  icon: {
    color: theme.palette.text.disabled,
  },
  menuButton: {
    textAlign: "center",
  },
  settingsButton: {
    paddingRight: "1vw",
  },
  toolbar: {
    height: "6vw",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  link: {
    textDecoration: "none",
    margin: "2vw",
    "&:active": {
      backgroundColor: "transparent",
    },
  },
  title: {
    display: "flex",
    flexDirection: "column",
  },
}));

//CUSTOM BUTTON
const HoverButton = ({ href, tag, handleClose } = props) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <motion.div
      initial={{ scale: 1, textShadow: `` }}
      whileTap={{
        scale: 0.8,
        textShadow: `0px 0px 12px ${theme.palette.text.primary}`,
      }}
      whileHover={{
        scale: 1.3,
        textShadow: `0px 0px 12px ${theme.palette.text.primary}`,
      }}
      className={classes.menuButton}
    >
      <Animated>
        <SliderLink href={href} className={classes.link}>
          <Link
            variant="h2"
            color="textPrimary"
            underline="none"
            onClick={handleClose}
          >
            {tag}
          </Link>
        </SliderLink>
      </Animated>
    </motion.div>
  );
};

//ANIMATED BUTTON WRAPPER
const Animated = ({ children }) => {
  const [moveOut, setMoveOut] = useState("200vh");
  const classes = useStyles();

  const handleTransition = () => {
    setMoveOut("200vh");
    setTimeout(() => {
      setMoveOut("0vh");
    }, DELAY);
  };
  useEffect(() => {
    handleTransition();
  }, []);
  return (
    <motion.div
      animate={{ y: `${moveOut}` }}
      transition={{ duration: 2, type: "spring", bounce: 0.15 }}
      initial={{ y: "200vw" }}
      className={`${classes.common} ${classes.header}`}
    >
      {children}
    </motion.div>
  );
};

const MobileNav = ({ toggleDarkMode }) => {
  const classes = useStyles();
  const [language] = useTranslation();

  //LEFT HAND MODE FAB HANDLING
  const [hand, setHand] = useState(false);

  const toggleHand = () => {
    setHand(!hand);
  };

  //SLIDER POPOVER HANDLING
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className={`${classes.root} ${hand ? classes.leftHand : ""}`}>
      <nav>
        <motion.div layout transition={{ type: "spring", bounce: 0.25 }}>
          <Fab
            size="medium"
            variant="extended"
            onClick={open ? handleClose : handleClick}
          >
            {open ? <CloseIcon /> : <MenuIcon />}{" "}
          </Fab>
        </motion.div>
        <Popover
          PaperProps={{ className: classes.popPaper }}
          marginThreshold={0}
          TransitionComponent={Slide}
          transitionDuration={800}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <div className={classes.topbar}>
            <ConfigNav
              hand={hand}
              toggleHand={toggleHand}
              toggleDarkMode={toggleDarkMode}
            />
          </div>
          <div className={classes.main}>
            <HoverButton
              href="/"
              tag={language.nav[0]}
              handleClose={handleClose}
            />
            <HoverButton
              href="/works"
              tag={language.nav[1]}
              handleClose={handleClose}
            />
            <HoverButton
              href="/about"
              tag={language.nav[2]}
              handleClose={handleClose}
            />
            <HoverButton
              href="/contact"
              tag={language.nav[3]}
              handleClose={handleClose}
            />
          </div>
        </Popover>
      </nav>
    </div>
  );
};

export default MobileNav;
