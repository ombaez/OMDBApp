import React from 'react'

export default ({ handleSubmit,handleChange}) => {
    return (
        <div>
             <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                onChange= {handleChange} 
                placeholder="Search" 
                aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    )
}