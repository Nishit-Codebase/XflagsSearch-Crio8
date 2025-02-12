/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import "./Search.css"




export default function Search({country,setFilteredCountries}) {

    const [searchterm,setSearchTerm] = useState("");
    // const [searchitems,setSearchItems] = useState([]);
    
    useEffect(()=>{
        if (!Array.isArray(country)) return;
        if (!searchterm) {
            setFilteredCountries(country); 
            return;
        }
            const filtered = country.filter((c) => (
                c.common.toLowerCase().includes(searchterm.toLowerCase())
        ))
        // setSearchItems(filtered);
        setFilteredCountries(filtered);
        
    },[searchterm,country])


  return (
    <div className="Navbar">
        <input placeholder="Search for Countries" value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)}></input>
    </div>


  )
}
