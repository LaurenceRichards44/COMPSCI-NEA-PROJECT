import type { Tool } from './Toolbar'

type ViewportProps = {
  selectedTool: Tool
}

function Viewport({ selectedTool }: ViewportProps) {
  return (
    <section className="viewport" aria-labelledby="viewport-heading">
      <div className="viewport-header">
        <span className="section-label">Workspace <span className="workspace-number">01</span></span>
        <span className="viewport-mode">Perspective</span>
      </div>

      {/* This placeholder can be replaced with the renderer's canvas later. */}
      <div className="viewport-placeholder">
        <div className="viewport-origin" aria-hidden="true">
          <span />
        </div>
        <span className="eyebrow">A space for your ideas</span>
        <h1 id="viewport-heading">3D Viewport</h1>
        <p>Your scene will appear here.</p>
        <span className="placeholder-badge">Empty workspace</span>
      </div>

      <div className="viewport-footer">
        <div className="axis-guide" aria-label="Orientation guide: X, Y and Z axes">
          <span className="axis axis-x">X</span>
          <span className="axis axis-y">Y</span>
          <span className="axis axis-z">Z</span>
          <span className="axis-origin" />
        </div>
        <span className="active-tool" aria-live="polite">
          <span className="indicator-dot" aria-hidden="true" />
          {selectedTool} tool
        </span>
      </div>
    </section>
  )
}

export default Viewport
