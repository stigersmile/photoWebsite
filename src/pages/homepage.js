import React, { useState } from 'react'
import Search from "../components/Search"


const Homepage = () => {
     let [input, setInput] = useState("");

    const searchURL =` https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`
    return (
        <div style={{minHeight:"100vh"}}>
            <h1>This is home page</h1>
            <Search/>
        </div>
    )
}

export default Homepage
