import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import AddPost from './components/addPost'
import Posts from './components/posts'

import { BrowserRouter as Router, Routes, Route, Link }
  from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav style={{ margin: 12 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/posts" style={{ padding: 5 }}>
          Posts
        </Link>
        <Link to="/add_post" style={{ padding: 5 }}>
          Add posts
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/add_post" element={<AddPost />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </ Router>
  )
}

export default App
