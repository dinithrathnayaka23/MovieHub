const Search = ({searchTerm,setSearchTerm}) => {

  return (
    <div className="search">
        <div>
            <img src="search.svg" alt="search-icon"></img>
            <input 
                type="text"
                placeholder="Search through the MovieHub"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search
