import { createContext } from "react"
import React from 'react'

const MyContext = createContext({
    selected: null,
    setSelected: () => {} 
});

export default MyContext
