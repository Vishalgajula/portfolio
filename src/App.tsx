import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      {isMobile ? (
        // Mobile Layout: Stacked vertically
        <div className="mobile-layout">
          <Sidebar />
          <Home />
        </div>
      ) : (
        // Desktop Layout: Resizable Panels
        <PanelGroup direction='horizontal' className='main-container'>
          <Panel defaultSize={20} minSize={20}>
            <Sidebar />
          </Panel>
          <PanelResizeHandle className="resize-handle" />
          <Panel defaultSize={80} minSize={50}>
            <Home />
          </Panel>
        </PanelGroup>
      )}
    </div>
  );
}

export default App;