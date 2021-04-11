import React, { useState } from "react";

//MATERIAL UI COMPONENTS
import {
  Fade,
  Grid,
  Modal,
  Button,
  Backdrop,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

//STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "1000px",
    alignItems: "center",
    placeContent: "center",
  },
  form: {
    flexGrow: 1,
  },
  data: {
    padding: "2vh",
    WebkitTextFillColor: theme.palette.text.primary,
  },
  message: {
    padding: "2vh",
  },
  greeting: {
    textAlign: "end",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  content: {
    textAlign: "justify",
    [theme.breakpoints.down("xs")]: {},
  },
  button_container: {
    padding: "0vh 1vh 0vh",
    textAlign: "end",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1302 !important",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  backdrop: {},
}));

const ContactForm = ({ language }) => {
  const classes = useStyles();

  //SUBMISSION MODAL HANDLING
  const [open, setOpen] = useState(false);

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(setOpen(true))
      .then(clearForm())
      .catch((error) => alert(error));
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  //FORM HANDLING
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  //EMAIL FORMAT HANDLING
  const handleChangeEmail = (e) => {
    if (
      !e.target.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setEmail(e.target.value);
      setEmailError(true);

      if (email === "") {
        // check if the input is empty
        setEmailError(false);
      }
    } else {
      setEmail(e.target.value);
      setEmailError(false);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <form
          id="contact"
          name="contact"
          method="post"
          onSubmit={handleSubmit}
          data-netlify="true"
          className={classes.form}
        >
          <input type="hidden" name="form-name" value="contact" />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="text"
                name="name"
                label={language.form.name}
                value={name}
                id="name"
                autoComplete="first-name"
                className={classes.data}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="email"
                name="email"
                label={language.form.email}
                value={email}
                error={emailError}
                id="email"
                autoComplete="email"
                className={classes.data}
                onChange={(e) => handleChangeEmail(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                rows={5}
                required
                fullWidth
                multiline
                name="message"
                label={language.form.message}
                value={message}
                id="message"
                className={classes.message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className={classes.button_container}>
              <Button type="submit" endIcon={<SendIcon />} variant="text">
                {language.form.button}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          className: classes.backdrop,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h6" color="primary">
              {language.pop.thank}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {language.pop.msg}
            </Typography>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ContactForm;
