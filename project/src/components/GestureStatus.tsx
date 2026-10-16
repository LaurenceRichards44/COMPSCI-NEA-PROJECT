const gestureDetails = [
  ['Gesture', 'None'],
  ['Confidence', '-'],
  ['Hold', '-'],
  ['Mapped Action', 'None'],
  ['Hand Detected', 'No'],
  ['Cooldown', '-'],
]

function GestureStatus() {
  return (
    <section className="gesture-status" aria-labelledby="recognition-heading">
      <h3 className="section-label" id="recognition-heading">Gesture status</h3>
      <dl className="gesture-details">
        {gestureDetails.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default GestureStatus
