import NotificationCenter from './notificationCenter.js';
import ColorPaletteSelector from './colorPaletteSelector.js';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-light position-fixed w-100" style={{zIndex: "300"}}>
        <nav className="container navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">George Baker</Link>
          <NotificationCenter />
          <ColorPaletteSelector />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/"><strong>Home</strong></Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tools"><strong>Tools</strong></Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fontSizes"><strong>Font Sizes</strong></Link>
              </li>

            </ul>
          </div>
        </nav>
      </header>
  );
}

export default Header;
