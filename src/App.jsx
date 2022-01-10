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

  function updateLikes(post) {
    return fetch(`http://localhost:3000/images/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(resp => resp.json())
  }

  function increaseLikes(post) {
    const update = [...posts]
    post.likes++
    updateLikes(post)
    setPost(update)
  }

  return (
    <div className="App">

      <Logo />

      <Posts posts={posts} increaseLikes={increaseLikes} />

    </div>
  )
}

export default App
