//BrowserRouter -> Enables routing in React app
//We rename BrowserRouter as Router for shorter writing
//Routes -> Container that holds all Route components, it will render the first Route that matches the current URL if url matches the path of a Route, it will render the component specified in the element prop of that Route else it will render nothing
//Route -> Used to define a path and which component should render, render component -> element prop, path -> url path to match
//react-router-dom provides a way to navigate between different components without refreshing the page, it uses the HTML5 history API to keep the UI in sync with the URL, it allows us to create single-page applications with navigation

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//useState is imported, but currently not used in this file
//useState is a React hook that allows us to add state to functional components, it returns an array with two elements: the current state value and a function to update that state value, we can use it to manage state in our components
import { useState } from 'react'
//imports global CSS styling for the application
import './App.css'
//importing Navbar component from components folder
import Navbar from './components/Navbar'
//importing Home page component
import Home from './pages/Home'
//importing Movie Detail page component
import MovieDetail from './pages/MovieDetail'

//main root component of the project
function App() {

  return (
    /*Router component enables routing in the React app*/
    <Router>
      {/*Navbar will always stay visible on every page*/}
      <Navbar />
      {/*Routes component holds all the Route components */}
      <Routes>
        {/*Route for the home page, when the URL is '/' then render the Home component */}
        <Route path='/' element={<Home />} />
        {/*Route for the movie detail page, when the URL matches '/movie/:id' then render the MovieDetail component, it's a dynamic route that captures the movie ID from the URL */}
        <Route path='/movie/:id' element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}
//exporting App component so main.jsx can use it
export default App