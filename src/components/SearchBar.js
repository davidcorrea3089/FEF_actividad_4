import React, { useState } from "react"

function SearchBar(props){
    
    const [value, setValue] = useState(props.value)

    function handleChange(event){
        setValue(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        props.onSearch(value)
    }

    return(
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Buscar"
                    value={value}
                    onChange={handleChange}
                />
            </form>
        </nav>
    )

}

export default SearchBar