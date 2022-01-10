import { useEffect, useState } from 'react'

import './App.css'
import Logo from './components/Logo/Logo'
import Posts from './components/Main/Posts'

function App() {

  const [posts, setPost] = useState([])

  useEffect(function () {
    fetch('http://localhost:3000/images').then(resp => resp.json())
      .then(posts => setPost(posts))
  }, [])

  return (
    <div className="App">

      <Logo />

      <Posts posts={posts} />

    </div>
  )
}

export default App
