import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import AddPost from './components/addPost'
import Posts from './components/posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <AddPost></AddPost>
       <Posts></Posts>

    </>
  )
}

export default App
