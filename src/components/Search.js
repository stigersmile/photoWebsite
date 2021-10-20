import React, { useState } from 'react'

const Search = () => {
    let [data , setData] = useState(null);
    const auth ="563492ad6f917000010000018b28ef8c975b4f259f86dd1ee6570cec";
    const initialURL ="https://api.pexels.com/v1/curated?page=1&per_page=15";
    
    const search = async() =>{
        const dataFetch = await fetch(initialURL,{
        method:"GET",
        headers:{
            Accept:"application.json",
            Authorization:auth,
        },
        });

        let parseData = await dataFetch.json();
        setData(parseData);
    }
    return (
        <search className ="search">
            <input type="text" />
            <button onClick={search}>Search</button>
        </search>
    )
}

export default Search
