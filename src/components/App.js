import React, { useState, useEffect } from 'react'

import Header from "./Header";
import Nominations from "./Nominations";
import Results from "./Results";



function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])

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

  // const flims = [
  //   {title: "Rambo", year: 1999},
  //   {title: "Hey Ram", year: 2000},
  //   {title: "Ram Dass, Going Home", year: 2007},
  // ]

  // console.log(`nominations`, nominations)
  
  // useEffect(()=>{
  //   flims.forEach(flim => addResult(flim.title, flim.year))
  // },[])


  function omdbSearch(){
    fetch(`http://www.omdbapi.com/?t=${searchTerm}&apikey=2545e0fa`)
    .then(r => r.json())
    .then(r => {
      console.log(r)
      if (r.Response === "False"){
        console.log('ignoring single letter')
      } else {
        addResult(r.Title, r.Year)
      }
    })
  }

  return (
    <div className="app-container">
      <h1>The Shoppies</h1>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} omdbSearch={omdbSearch}/>
      <div className="body-container">
        <Results searchTerm={searchTerm} results={results} addNomination={addNomination}/>
        <Nominations nominations={nominations}/>
      </div>
    </div>
  );
}

export default App;
