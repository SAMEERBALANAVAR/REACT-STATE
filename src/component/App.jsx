import react from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unstrike() {
  document.getElementById("root").style.textDecoration = null;
}
function App() {
  // state in react
  // var isDone = false;

  // const strikeThrough = { textDecoration: "line-through" };

  // return <p style={isDone ? strikeThrough : null}>Buy Milk</p>;

  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>click button to strike</button>
      <br></br>
      <br></br>
      <button onClick={unstrike}>click button to unstrike</button>
    </div>
  );
}

export default App;
