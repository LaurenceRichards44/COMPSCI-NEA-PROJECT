import WebcamView from './WebcamView'

function GesturePanel() {
  return (
    <aside className="gesture-panel" aria-labelledby="gesture-heading">
      <h2 id="gesture-heading">Gesture controls</h2>
      <WebcamView />
      <p>Gesture recognition has not been implemented yet.</p>
    </aside>
  )
}

export default GesturePanel
