import React from "react";

//MATERIAL UI COMPONENTS
import { makeStyles } from "@material-ui/core/";

//UTILS
import { motion } from "framer-motion";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    background: theme.palette.background.cube,
  },
}));

const Wrapper = withNavigationContext(({ children }) => {
  const classes = useStyles();

  return (
    <motion.div
      className={`${classes.back} ${classes.root}`}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
});

export default Wrapper;
