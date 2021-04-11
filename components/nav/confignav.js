import React from "react";

//MATERIAL UI COMPONENTS
import {
  Menu,
  Button,
  Hidden,
  MenuList,
  MenuItem,
  IconButton,
  Typography,
  makeStyles,
  ClickAwayListener,
} from "@material-ui/core/";
import Brightness4Icon from "@material-ui/icons/Brightness4";

//UTILS
import useTranslation from "../translate";

//STYLES
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "transparent",
  },
  list: {
    padding: 0,
  },
  icon: {
    minHeight: "auto",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: theme.palette.text.disabled,
  },
}));

const ConfigNav = ({ hand, toggleHand, toggleDarkMode }) => {
  const classes = useStyles();
  const [language, setLanguage, languages] = useTranslation();

  //LANGUAGES POPOVER HANDLING
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Button onClick={handleClick} className={classes.icon}>
        {language.t}
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className={classes.list}
        padding={0}
        PaperProps={{ className: classes.paper, elevation: 0 }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList className={classes.list}>
            {languages
              .filter((lang) => lang != language.t)
              .map((lang, index) => {
                return (
                  <MenuItem
                    key={index}
                    className={classes.icon}
                    onClick={() => {
                      handleClose();
                      setLanguage(lang);
                    }}
                  >
                    <Typography variant="caption">{lang}</Typography>
                  </MenuItem>
                );
              })}
          </MenuList>
        </ClickAwayListener>
      </Menu>
      <IconButton
        aria-label="toggle dark mode"
        onClick={() => toggleDarkMode()}
        className={classes.icon}
      >
        <Brightness4Icon />
      </IconButton>
      <Hidden smUp>
        <Button
          aria-label="toggle menu button side"
          onClick={() => toggleHand()}
          className={classes.icon}
        >
          {hand ? "rh" : "lh"}
        </Button>
      </Hidden>
    </>
  );
};

export default ConfigNav;
