import NotificationCenter from './notificationCenter.js';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Web Help</a>
          <NotificationCenter />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#helpfulCode">Helpful Code</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#colours">Branding and Colours</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#externalWebsites">External Websites</Link>
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
