import Header from "./Header";
import Nominations from "./Nominations";
import Results from "./Results";


function App() {
  return (
    <div className="App-container">
      <h1>The Shoppies</h1>
      <Header />
      <div className="body-container">
        <Results />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
