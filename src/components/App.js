import React, {useState} from 'react'
import Banner from './Banner';

import Header from "./Header";
import Nominations from "./Nominations";
import Results from "./Results";



function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])

  console.log(`results`, results)

  function addResult(title, year) {
    setResults(previousResults => [
      ...previousResults,
      {title: title, 
      year: year}
    ])
  }

  function clearResults(){
    setResults([])
  }

  function addNomination(title, year) {
    setNominations(previousNominations => [
      ...previousNominations,
      {title: title, 
      year: year}
    ])
  }

  function removeNomination(title){
    const remainingNoms = nominations.filter(nom => nom.title !== title);
    setNominations(remainingNoms)
  }

  function fiveCheck(){
    if (nominations.length > 4){
      return true
    } else {
      return false
    }
  }

  function omdbSearch(){
    fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=2545e0fa`)
    .then(r => r.json())
    .then(r => {
      console.log(`rresponse`, r)
      if (r.Response === "False"){
      } else {
        addResult(r.Title, r.Year)
      }
    })
  }

  return (
    <div className="app-container">
      {fiveCheck() ? <Banner /> : null}
      <h1>The Shoppies</h1>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} omdbSearch={omdbSearch} clearResults={clearResults}/>
      <div className="body-container">
        <Results searchTerm={searchTerm} results={results} addNomination={addNomination} nominations={nominations}/>
        <Nominations nominations={nominations} removeNomination={removeNomination}/>
      </div>
    </div>
  );
}

export default App;
