import React, { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import "@popperjs/core/dist/umd/popper"
import { Header } from './components/layouts/header'
import { MainBody } from './components/layouts/mainBody'
// import { BrowserRouter } from 'react-router-dom'
import Work from './components/pages/work'


function App() {

  return (
    <>
      <Header/>
      <MainBody/>
      <Work/>
    </>
  )
}

export default App


// https://www.graphberry.com/products/preview/mint-minimal-portfolio-html-template