import React, {useState} from 'react'
import Banner from './Banner';

import Header from "./Header";
import Nominations from "./Nominations";
import Results from "./Results";



function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [fiveNoms, setFiveNoms] = useState(false)

  console.log(`nominations`, nominations)
  


  function addResult(title, year) {
    setResults(previousResults => [
      ...previousResults,
      {title: title, 
      year: year}
    ])
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
      // setFiveNoms(true)
      return true
    } else {
      // setFiveNoms(false)
      return false
    }
    // console.log(`nominations.length`, nominations.length)
    // console.log(`fiveNoms`, fiveNoms)
  }

  function omdbSearch(){
    fetch(`http://www.omdbapi.com/?t=${searchTerm}&apikey=2545e0fa`)
    .then(r => r.json())
    .then(r => {
      if (r.Response === "False"){
        console.log('ignoring first result')
      } else {
        addResult(r.Title, r.Year)
      }
    })
  }

  return (
    <div className="app-container">
      {fiveCheck() ? <Banner /> : null}
      <h1>The Shoppies</h1>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} omdbSearch={omdbSearch}/>
      <div className="body-container">
        <Results searchTerm={searchTerm} results={results} addNomination={addNomination} nominations={nominations}/>
        <Nominations nominations={nominations} removeNomination={removeNomination}/>
      </div>
    </div>
  );
}

export default App;
