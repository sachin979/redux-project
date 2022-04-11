import React from "react";
import { createStore } from "@reduxjs/toolkit";

const st = "not logged in";
const Store = () => {
  console.log("reducer called");
  const reducer = (state = st, action) => {
    switch (action) {
      case "LOGIN":
        return state;
      case "LOGOUT":
        return state;
    }
    return state;
  };

  const store = createStore(reducer);

  store.subscribe(() => {
    console.log("store called ", store.getState());
  });
  store.dispatch({
    type: "LOGIN",
  });
  return <div></div>;
};

export default Store;
