import React from "react";

//MATERIAL UI COMPONENTS
import { Link, AppBar, Toolbar, useTheme, makeStyles } from "@material-ui/core";

//CUSTOM COMPONENTS
import ConfigNav from "./confignav";
import useTranslation from "../translate";

//UTILS
import { motion } from "framer-motion";
import { Link as SliderLink } from "react-awesome-slider/dist/navigation";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    height: "6vw",
  },
  title: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "nowrap",
  },
  link: {
    textDecoration: "none",
    margin: "2vw",
    "&:active": {
      backgroundColor: "transparent",
    },
  },
}));
const textMotion = {
  rest: {
    color: "grey",
    x: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    color: "blue",
    x: 30,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

//CUSTOM BUTTON
const HoverButton = ({ href, tag } = props) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <motion.div
      initial={{ scale: 1, textShadow: "none" }}
      whileHover={{
        scale: 1.3,
        textShadow: `0px 0px 18px ${theme.palette.text.primary}`,
      }}
      whileTap={{ scale: 0.8 }}
    >
      <SliderLink href={href} className={classes.link}>
        <Link variant="h5" color="textPrimary" underline="none">
          {tag}
        </Link>
      </SliderLink>
    </motion.div>
  );
};

const FullNav = ({ toggleDarkMode }) => {
  const classes = useStyles();
  const [language] = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <HoverButton href="/" tag={language.nav[0]} />
            <HoverButton href="/works" tag={language.nav[1]} />
            <HoverButton href="/about" tag={language.nav[2]} />
            <HoverButton href="/contact" tag={language.nav[3]} />
          </div>
          <ConfigNav toggleDarkMode={toggleDarkMode} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default FullNav;
