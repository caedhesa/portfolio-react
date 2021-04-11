import React from "react";

//MATERIAL UI COMPONENTS
import {
  GridList,
  useTheme,
  Typography,
  IconButton,
  makeStyles,
  ButtonGroup,
  GridListTile,
  ListSubheader,
  useMediaQuery,
  GridListTileBar,
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

//CUSTOM COMPONENTS
import Gallery from "../gallery";
import Wrapper from "../wrapper";

//UTILS
import useTranslation from "../translate";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  gridList: {
    width: "80vw",
    minHeight: "80vh",
    alignContent: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      alignSelf: "flex-start",
    },
  },
  subheader: {
    textAlign: "center",
    height: "auto !important",
    marginBottom: 40,
    padding: "30px 5px 20px !important",
  },
  pic: {
    filter: "blur(1px)",
    webkitFilter: "blur(1px)",
    "&:hover": {
      filter: "none",
      webkitFilter: "none",
    },
  },
  tile: {
    borderRadius: "10px",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Works = () => {
  const theme = useTheme();
  const [language] = useTranslation();
  const cols = useMediaQuery("(min-width:600px)") ? 1 : 3;
  const cellHeight = useMediaQuery("(min-width:600px)") ? 300 : 140;

  const classes = useStyles();
  return (
    <Wrapper>
      <GridList cellHeight={cellHeight} cols={3} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} className={classes.subheader}>
          <ListSubheader component="div">
            <Typography variant="h5">{language.works.description}</Typography>
          </ListSubheader>
        </GridListTile>
        {Gallery.works.map((work, index) => (
          <GridListTile
            key={index}
            cols={cols}
            classes={{ tile: classes.tile }}
          >
            <img
              className={classes.pic}
              src={theme.palette.type == "dark" ? work.darkImg : work.img}
              alt={work.title}
            />
            <GridListTileBar
              style={{ background: "rgb(0,0,0,0.8)" }}
              title={work.title}
              subtitle={<span>{work.subtitle}</span>}
              actionIcon={
                <ButtonGroup>
                  <IconButton
                    href={work.liveUrl}
                    target="_blank"
                    aria-label={`Live demo of ${work.title}`}
                    className={classes.icon}
                  >
                    <OpenInBrowserIcon />
                  </IconButton>
                  <IconButton
                    href={work.gitUrl}
                    target="_blank"
                    aria-label={work.label}
                    className={classes.icon}
                  >
                    {work.type == "app" ? <PhoneAndroidIcon /> : <GitHubIcon />}
                  </IconButton>
                </ButtonGroup>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Wrapper>
  );
};

export default Works;
