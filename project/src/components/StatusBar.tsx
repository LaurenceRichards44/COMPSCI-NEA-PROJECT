type StatusBarProps = {
  selectedObjectName?: string
}

function StatusBar({ selectedObjectName }: StatusBarProps) {
  return (
    <footer className="status-bar" aria-label="Workspace status">
      <div className="selection-status" role="status">
        <span className="selection-mark" aria-hidden="true" />
        <span>Selected: <strong>{selectedObjectName ?? 'None'}</strong></span>
      </div>
      {/* Object position, rotation and scale can be added alongside selection. */}
      <span className="status-bar-label">Gesture CAD <span>·</span> Workspace</span>
    </footer>
  )
}

export default StatusBar
