import React from "react";

//MATERIAL UI COMPONENTS
import { Grid, Typography, makeStyles } from "@material-ui/core/";

//CUSTOM COMPONENTS
import Wrapper from "../wrapper";
import SocialBar from "./socialbar";
import ContactForm from "./contactform";

//UTILS
import useTranslation from "../translate";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    maxWidth: "1200px",
    placeContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10vh",
    },
  },
  greeting: {
    textAlign: "center",
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
  content: {
    textAlign: "center",
    padding: 10,
    [theme.breakpoints.down("md")]: {
      padding: 5,
    },
  },
  text: {},
}));

const Contact = () => {
  const classes = useStyles();
  const [language] = useTranslation();

  return (
    <Wrapper>
      <Grid container className={classes.root}>
        <Grid item xs={10} sm={8} className={classes.greeting}>
          <Typography variant="h2" color="primary" className={classes.text}>
            {language.contact.title}
          </Typography>
        </Grid>
        <Grid item xs={10} sm={8} lg={6} className={classes.content}>
          <Typography variant="h5" color="textPrimary" className={classes.text}>
            {language.contact.description}
          </Typography>
        </Grid>
        <SocialBar />
        <Grid item xs={10} sm={8} className={classes.form}>
          <ContactForm language={language} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Contact;
