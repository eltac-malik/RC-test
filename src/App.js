import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [data, setData] = useState(undefined);
  const [PFinp,setPFInp] = useState("")

  useEffect((() => {
    axios.get("https://api.npoint.io/20c1afef1661881ddc9c")
      .then(resp =>
        setData(resp.data)
        )
      .catch(err => console.log(err))
  }), [])


  return (
    <div className="App">

      <input className="inp" onChange={(e)=> setPFInp(e.target.value)} type="text"/>


        <div className="cards">
        {data == undefined ? console.log("404") :
        
        data.playerList.sort((x,y)=>
        {
          return x.Value - y.Value
        }).filter((e)=>
        {
         if (PFinp === "")
         {
          return e  
         }
         else if(e.PFName.toLowerCase().includes(PFinp.toLocaleLowerCase()) || e.TName.toLowerCase().includes(PFinp.toLocaleLowerCase()))
         {
          return e
         }
        }).map((e,i)=>
        {
          return(
            
          <div key={i} className="card">
          <img className="card-img-top" src={`../img/${e.Id}.jpg`} alt="Card image cap" />
          <div className="card-body">
            <p className="card-title">{e.PFName}</p>
            <p className="card-text">{e.SkillDesc}</p>
            <p className="card-text">{e.Value} Million $</p>
          </div>
         </div>
          )
        })
        
        }
        
        </div>




    </div>
  );
}

export default App;
