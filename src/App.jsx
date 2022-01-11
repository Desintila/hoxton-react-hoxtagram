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
    updateLikes({ id: post.id, likes: post.likes })
    setPost(update)
  }

  function deleteComments(id) {
    return fetch(`http://localhost:3000/comments/${id}`, {
      method: 'DELETE'
    }).then(resp => resp.json())
  }


  function removeComment(post, comment) {
    const update = [...posts]
    deleteComments(comment.id)
    post.comments = post.comments.filter(Comment => Comment.id !== comment.id)
    setPost(update)

  }


  function createComment(content, imageId) {
    return fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: content,
        imageId: imageId
      })
    }).then(resp => resp.json())
  }


  function createPost(title, image) {
    return fetch('http://localhost:3000/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        image: image,
        likes: 0
      })
    }).then(resp => resp.json())
  }

  return (
    <div className="App">

      <Logo />

      <Posts posts={posts} increaseLikes={increaseLikes} removeComment={removeComment} createComment={createComment} setPost={setPost} createPost={createPost} />

    </div>
  )
}

export default App
