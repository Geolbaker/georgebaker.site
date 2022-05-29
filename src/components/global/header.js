import NotificationCenter from './notificationCenter.js';
import ColorPaletteSelector from './colorPaletteSelector.js';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-light position-fixed w-100" style={{zIndex: "2000"}}>
        <nav className="container navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">Web Tools</Link>
          <NotificationCenter />
          <ColorPaletteSelector />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active dropdown">
                <Link className="nav-link dropdown-toggle nav-link-home" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Home <span className="sr-only">(current)</span>
                </Link>
                <div className="dropdown-menu" style={{width: "10rem"}} aria-labelledby="navbarDropdown">
                  <a className="nav-link nav-link-home" href="#helpfulCode">Helpful Code</a>
                  <a className="nav-link nav-link-home" href="#colours">Branding and Colours</a>
                  <a className="nav-link nav-link-home" href="#externalWebsites">External Websites</a>
                </div>
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
