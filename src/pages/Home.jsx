import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="page-root">
      <Navbar />
      <main className="page-content">
        <h1>Welcome to the Home page</h1>
      </main>
    </div>
  )
}

export default Home