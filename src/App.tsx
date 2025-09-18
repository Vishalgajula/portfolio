import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Home />
      </main>
      <aside className="sidebar-fixed">
        <Sidebar />
      </aside>
    </div>
  )
}

export default App