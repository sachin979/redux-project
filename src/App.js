import "./App.css";
import { Button, Card, Paper } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increase } from "./Actions/Actions";
import { decrease } from "./Actions/Actions";
function App() {
  var count = 0;
  const dispatch = useDispatch();
  const numbe = useSelector((state) => state.numb);
  return (
    <div className="App">
      <Button variant="contained" onClick={() => dispatch(increase())}>
        +
      </Button>
      <Paper>{numbe}</Paper>
      <Button variant="contained">-</Button>
    </div>
  );
}

export default App;
