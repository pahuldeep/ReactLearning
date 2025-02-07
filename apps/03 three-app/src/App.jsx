import DateGreeting from "./DateGreeting";
import pi, { doublePi, triplePi } from "./mathametics.jsx";

function App() {

  const theme = {
    backgroundColor: "black",
    color: "white"
  }

  return (
    <div style ={ theme }>
      <DateGreeting />
      <>
        <ul>
          <li> value of PI: {pi}</li>
          <li> value double: {doublePi()}</li>
          <li> value triple: {triplePi()}</li>
        </ul>
      </>
    </div>
  );
}

export default App;
