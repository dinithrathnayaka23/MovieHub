import { useEffect, useState } from "react"

const Card=({title})=>{
  const [hasLiked,setHasLiked]=useState(false);
  useEffect()
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={()=>setHasLiked(!hasLiked)}>
        {hasLiked? 'Liked':'Like'}
      </button>
    </div>
  )
}

const App= () => {
  return(
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} actors={[{name:'Actors'}]}></Card>
      <Card title="Avatar"></Card>
      <Card title="The Lion King"></Card>
    </div>
  )
}

export default App
