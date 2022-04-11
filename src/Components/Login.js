import React, { useState } from "react";
import { TextField, makeStyles, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  form: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#323b50",
    color: "#bfbfbf",
    margin: "20px",
  },
}));

function Login(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [passw, setPassw] = useState("");
  const submit = () => {
    console.log(username);
    console.log(passw);
    if (username === "sachin" && passw === "sach123") {
      console.log("pass");
    }
  };
  return (
    <div className={classes.form}>
      <TextField
        className={classes.inp}
        id="outlined-basic email"
        label="Username"
        onChange={(e) => setUsername(e.target.value)}
      ></TextField>
      <TextField
        className={classes.inp}
        id="outlined-basic password"
        label="Password"
        type="password"
        onChange={(e) => setPassw(e.target.value)}
      ></TextField>
      <Button className={classes.btn} variant="contained" onClick={submit}>
        Login{" "}
      </Button>
    </div>
  );
}

export default Login;
