import WebcamFeed from './WebcamFeed'
import './GesturePanel.css'

function GesturePanel() {
  return (
    <aside className="gesture-panel" aria-labelledby="gesture-heading">
      <section className="webcam-panel" aria-labelledby="webcam-heading">
        <h2 id="webcam-heading">Webcam</h2>
        <div className="webcam-container">
          <WebcamFeed />
        </div>
      </section>

      <section className="gesture-controls" aria-labelledby="gesture-heading">
        <h2 id="gesture-heading">Gesture controls</h2>
        <p>Gesture recognition has not been implemented yet.</p>
      </section>
    </aside>
  )
}

export default GesturePanel