import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import Viewport from './components/Viewport'
import GesturePanel from './components/GesturePanel'
import StatusBar from './components/StatusBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="workspace">
        <Toolbar />
        <Viewport />
        <GesturePanel />
      </main>
      <StatusBar />
    </div>
  )
}

export default App