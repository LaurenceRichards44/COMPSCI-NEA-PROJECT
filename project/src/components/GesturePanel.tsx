import WebcamView from './WebcamView'
import GestureStatus from './GestureStatus'

type GesturePanelProps = {
  enabled: boolean
  onToggle: () => void
}

function GesturePanel({ enabled, onToggle }: GesturePanelProps) {
  return (
    <aside className="gesture-panel" aria-labelledby="gesture-heading">
      <div className="panel-header">
        <h2 id="gesture-heading">Gesture controls</h2>
        <span className="optional-badge">Optional</span>
      </div>

      <WebcamView />
      <GestureStatus />

      <section className="gesture-control-section" aria-labelledby="input-heading">
        <h3 className="section-label" id="input-heading">Input control</h3>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          aria-label="Gesture Control"
          className={`gesture-toggle${enabled ? ' is-enabled' : ''}`}
          onClick={onToggle}
        >
          <span>Gesture Control: <strong>{enabled ? 'ON' : 'OFF'}</strong></span>
          <span className="switch-track" aria-hidden="true"><span /></span>
        </button>
        <p className="control-note">Webcam preview and gesture recognition are not connected yet.</p>
      </section>

      <div className="panel-footer">
        <span className="indicator-dot" aria-hidden="true" />
        <span>Camera inactive</span>
      </div>
    </aside>
  )
}

export default GesturePanel
