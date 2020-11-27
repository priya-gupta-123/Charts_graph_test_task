import React from "react"

let UserContext = null
const CollegeDetails = (value) =>{
    UserContext  = React.createContext(value)
}


export {UserContext,CollegeDetails}