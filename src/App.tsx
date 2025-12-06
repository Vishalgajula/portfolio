// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Sidebar from './components/Sidebar';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {

  return (
    <>
    <PanelGroup direction='horizontal' className='main-container' >
      <Panel defaultSize={30} minSize={20}>
        <Sidebar/>
      </Panel>
      <PanelResizeHandle/>
      <Panel defaultSize={70} minSize={50}>
        <Home/>
      </Panel>
    </PanelGroup>
    
    </>
  )
}

export default App
