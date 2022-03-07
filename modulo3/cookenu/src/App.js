import React from "react"
import {Router} from "react-router-dom"
import { ThemeProvider } from "styled-components" // no video ele importa de material.ui/core/styles

import theme from "./constants/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
     <Router/>     
    </ThemeProvider>
  )  
}

export default App