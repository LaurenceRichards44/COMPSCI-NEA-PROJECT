import { useState } from 'react'
import Navbar from './components/Navbar'
import Toolbar, { type Tool } from './components/Toolbar'
import Viewport from './components/Viewport'
import GesturePanel from './components/GesturePanel'
import StatusBar from './components/StatusBar'
import './App.css'

function App() {
  const [selectedTool, setSelectedTool] = useState<Tool>('Select')
  const [gestureControlsEnabled, setGestureControlsEnabled] = useState(false)

  return (
    <div className="app">
      <Navbar />

      <main className="workspace" aria-label="CAD workspace">
        <Toolbar selectedTool={selectedTool} onToolSelect={setSelectedTool} />
        <Viewport selectedTool={selectedTool} />
        <GesturePanel
          enabled={gestureControlsEnabled}
          onToggle={() => setGestureControlsEnabled((enabled) => !enabled)}
        />
      </main>

      <StatusBar />
    </div>
  )
}

export default App
