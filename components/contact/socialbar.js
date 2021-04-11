import React from "react";

//MATERIAL UI COMPONENTS
import { Grid, makeStyles, IconButton } from "@material-ui/core/";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

//SOCIAL NETWORKS
import { social } from "../media";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      padding: 5,
      justifyContent: "space-around",
    },
    icon: {
      color: theme.palette.action.active,
    },
  },
}));
const SocialBar = ({}) => {
  console.log(social);
  const classes = useStyles();
  return (
    <Grid item container xs={10} sm={8} className={classes.root}>
      <IconButton className={classes.icon} target="_blank" href={social.EMAIL}>
        <EmailIcon fontSize="large" />
      </IconButton>
      <IconButton
        className={classes.icon}
        target="_blank"
        href={social.LINKEDIN}
      >
        <LinkedinIcon fontSize="large" />
      </IconButton>
      <IconButton className={classes.icon} target="_blank" href={social.GITHUB}>
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        className={classes.icon}
        target="_blank"
        href={social.INSTAGRAM}
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
    </Grid>
  );
};

export default SocialBar;
