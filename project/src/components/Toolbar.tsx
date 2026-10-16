export type Tool = 'Select' | 'Move' | 'Rotate' | 'Scale'

type ToolbarProps = {
  selectedTool: Tool
  onToolSelect: (tool: Tool) => void
}

const tools: Tool[] = ['Select', 'Move', 'Rotate', 'Scale']

function Toolbar({ selectedTool, onToolSelect }: ToolbarProps) {
  return (
    <aside className="toolbar" aria-label="Modelling tools">
      <div className="tool-group" role="group" aria-labelledby="transform-label">
        <h2 className="section-label" id="transform-label">Tools</h2>
        {tools.map((tool) => (
          <button
            key={tool}
            type="button"
            className={`tool-button${selectedTool === tool ? ' is-active' : ''}`}
            aria-pressed={selectedTool === tool}
            onClick={() => onToolSelect(tool)}
          >
            {tool}
          </button>
        ))}
      </div>

      <div className="tool-group" role="group" aria-labelledby="create-label">
        <h2 className="section-label" id="create-label">Create</h2>
        <button type="button" className="tool-button" title="Add cube — coming soon" disabled>Add Cube</button>
        <button type="button" className="tool-button" title="Add sphere — coming soon" disabled>Add Sphere</button>
      </div>

      <div className="tool-group" role="group" aria-labelledby="modify-label">
        <h2 className="section-label" id="modify-label">Modify</h2>
        <button type="button" className="tool-button" title="Duplicate — coming soon" disabled>Duplicate</button>
        <button type="button" className="tool-button delete-button" title="Delete — coming soon" disabled>Delete</button>
      </div>

      <span className="toolbar-footnote" aria-hidden="true">G / CAD</span>
    </aside>
  )
}

export default Toolbar
