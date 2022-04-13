import "./App.css";
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
      <div className="main">
        <span
          style={{ borderRadius: " 0  0 0 3px" }}
          className="button"
          variant="contained"
          onClick={() => dispatch(increase())}
        >
          +
        </span>
        <span className="count">{numbe}</span>
        <span
          style={{ borderRadius: " 0 3px  0 0 " }}
          className="button"
          variant="contained"
          onClick={() => dispatch(decrease())}
        >
          -
        </span>
      </div>
    </div>
  );
}

export default App;
