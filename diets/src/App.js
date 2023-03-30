import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import './App.css'

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);


  return (
    <div>
      <h1>{message}</h1>
      <Home/>
    </div>
  )
}
export default App
