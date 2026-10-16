function WebcamView() {
  return (
    <section className="webcam-section" aria-labelledby="webcam-heading">
      <div className="subsection-header">
        <h3 className="section-label" id="webcam-heading">Webcam preview</h3>
        <span className="aspect-label" aria-hidden="true">4:3</span>
      </div>
      <div className="webcam-placeholder">
        <span className="camera-symbol" aria-hidden="true"><span /></span>
        <span>No camera feed</span>
        <span className="webcam-hint">Your preview will appear here</span>
      </div>
    </section>
  )
}

export default WebcamView
