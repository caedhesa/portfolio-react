import React from "react";

//MATERIAL UI COMPONENTS
import {
  Avatar,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core/";

//CUSTOM COMPONENTS
import Wrapper from "../wrapper";

//UTILS
import useTranslation from "../translate";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    minHeight: "80vh",
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "flex-start",
    },
  },
  divAvatar: {
    justifyContent: "flex-end",
    padding: "0px 60px",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "center",
      overflow: "hidden",
      padding: "20px",
    },
  },
  avatar: {
    height: "auto",
    width: "auto",
    maxHeight: "250px",
    maxWidth: "250px",
    filter: "brightness(0.8)",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "120px",
      maxWidth: "120px",
    },
  },
  header: {
    padding: "10px",
    marginBottom: 20,
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      marginTop: 20,
      marginBottom: 0,
    },
  },
  description: {
    textAlign: "left",
    alignContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "5px 0px",
      textAlign: "justify",
    },
  },
  text: {
    whiteSpace: "pre-line",
  },
}));

const About = () => {
  const classes = useStyles();
  const [language] = useTranslation();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Wrapper>
      <Grid container className={classes.root}>
        <Grid item container xs={12} className={classes.header}>
          <Typography variant="h3" color="primary">
            {language.about.header}
          </Typography>
        </Grid>
        <Grid item container xs={12} lg={4} className={classes.divAvatar}>
          <Avatar
            alt="Avatar"
            src="/profilepic.jpg"
            className={classes.avatar}
          />
        </Grid>
        <Grid item container xs={12} lg={8}>
          <Grid item container className={classes.description}>
            <Typography
              variant={matches ? "h5" : "caption"}
              color="textPrimary"
              className={classes.text}
            >
              {language.about.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
export default About;
