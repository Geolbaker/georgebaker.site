import NotificationCenter from './notificationCenter.js'

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
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#helpfulCode">Helpful Code</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#colours">Branding and Colours</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#externalWebsites">External Websites</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fontSizes"><strong>Font Sizes</strong></a>
              </li>

            </ul>
          </div>
        </nav>
      </header>
  );
}

export default Header;
