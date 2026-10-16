function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-mark">Ler</span>
        <span className="brand-name">Gesture <span>CAD</span></span>
      </div>

      <nav className="menu" aria-label="Application menu">
        <button type="button" disabled>File</button>
        <button type="button" disabled>Edit</button>
        <button type="button" className="profile-button" disabled>
          Profile <span className="chevron" aria-hidden="true" />
        </button>
      </nav>

      <div className="project-name">Untitled project</div>

      <div className="navbar-actions" role="group" aria-label="Preferences">
        <button type="button" disabled>Theme</button>
        <button type="button" disabled>Settings</button>
      </div>
    </header>
  )
}

export default Navbar
