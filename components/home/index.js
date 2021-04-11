import React from "react";

//MATERIAL UI COMPONENTS
import { Grid, Hidden, Typography, makeStyles } from "@material-ui/core/";

//CUSTOM COMPONENTS
import Wrapper from "../wrapper";

//UTILS
import { motion } from "framer-motion";
import useTranslation from "../translate";

//STYLES
const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    placeContent: "center",
    marginBottom: "10vh",
  },
  greeting: {
    textAlign: "center",
    padding: "5px 40px",
  },
  content: {
    color: "#696969",
    maxWidth: "1000px",
    textAlign: "justify",
    padding: "15px 40px",
  },
  swipe: {
    textAlign: "center",
    position: "absolute",
    bottom: "12vh",
    opacity: "0.1",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [language] = useTranslation();

  return (
    <Wrapper>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.greeting}>
          <Typography variant="h1" color="primary">
            {language.home.title}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.content}>
          <Typography variant="body2">{language.home.description}</Typography>
        </Grid>
        <Hidden smUp>
          <Grid item xs={12} className={classes.swipe}>
            <motion.span
              animate={{ x: ["-10px", "10px"], opacity: [0, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
              class="material-icons md-48"
            >
              swipe
            </motion.span>
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  );
};

export default Home;
