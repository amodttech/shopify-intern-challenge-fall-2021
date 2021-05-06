import React, { useState, useEffect } from 'react'

import Header from "./Header";
import Nominations from "./Nominations";
import Results from "./Results";



function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])


  return (
    <div className="app-container">
      <h1>The Shoppies</h1>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <div className="body-container">
        <Results searchTerm={searchTerm}/>
        <Nominations />
      </div>
    </div>
  );
}

export default App;
