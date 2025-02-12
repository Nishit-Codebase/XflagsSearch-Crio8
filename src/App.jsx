// import { useState } from 'react'
import { useEffect, useState } from 'react';
import './App.css'
import Flags from './Components/Flags'
import Search from './Components/Search';



function App() {

  let [Countries,Setcountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]); // Lift state up from flag to app.js


  useEffect(()=>{
       
    let apifetch = async () => {
        try{
        let response = await fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
        let data = await response.json();
        Setcountries(data);
        setFilteredCountries(data);
    }catch(e){
        console.error(e);
    }
}
    apifetch();

},[]);

  return (
    <>
    <Search country={Countries} setFilteredCountries={setFilteredCountries}/>
    <div style={{
      display:"flex",
      flexWrap:"wrap"
}}>
    {
      filteredCountries.map((countries,index) => (
        <Flags name={countries.common} img={countries.png} key={index}/>
      ))
    }
    </div>
    </>
  )
}

export default App
