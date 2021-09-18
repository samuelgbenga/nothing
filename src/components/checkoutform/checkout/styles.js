import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    Width: "100%",

    display: "flex",
    justifyContent: "center",
  },
  main: {
    width: 650,
  },
  paper: {
    padding: "30px 20px",
    position: "relative",
  },
  thankYou: {
    position: "absolute",
    color: "#F6F6F6",
    fontSize: "3.5rem",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    top: 190,
    left: "23.5%",
    letterSpacing: 2,
  },
  subThankYou: {
    fontFamily: "Quicksand, sans-serif",
  },
  stripePayment: {
    position: "relative",
    zIndex: 1,
    margin: 0,
  },
  back: {
    marginTop: 10,
  },
}));