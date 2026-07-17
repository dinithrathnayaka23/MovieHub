import { useState } from 'react'
import Search from './components/Search.jsx'

const App = () => {
  const[searchTerm,setSearchTerm]=useState('');

  return (
    <main>
        <div className="pattern"/>
        <div className="wrapper">
          <header>
            <img src='./hero.png' alt='Hero Image'></img>
            <h1>Find <span className="text-gradient">Movies</span> You will Enjoy Welcome to MovieHub !</h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
        </div>
        
    </main>
  )
}

export default App
