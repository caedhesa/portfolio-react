import React from "react";

//STARTUP LOGO
import { Grid } from "svg-loaders-react";

//MATERIAL UI COMPONENTS
import { makeStyles } from "@material-ui/core";

//STYLES
const useStyles = makeStyles((theme) => ({
  startup: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: "1001",
    display: "flex",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    background: theme.palette.background.cube,
  },
  loader: {
    padding: "30px",
    borderRadius: "50px",
    background: "#000000",
  },
  spinner: {
    width: "auto",
    height: "20vh",
    opacity: 1,
    fill: theme.palette.primary.main,
  },
}));

const Startup = () => {
  const classes = useStyles();

  return (
    <div className={classes.startup}>
      <div className={classes.loader}>
        <Grid className={classes.spinner} />
      </div>
    </div>
  );
};

export default Startup;
