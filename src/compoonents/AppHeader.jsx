function AppHeader() {
  return (
      <header className="navbar navbar-expand-md">
        <div className="container-fluid">
          <span className="navbar-brand">Gina Stevenson</span>
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#statement">Artist Statement</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
}

export default AppHeader