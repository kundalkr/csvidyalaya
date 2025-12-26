

const Header = () => {
  return (
  <>
  <nav
    className="navbar navbar-expand-lg navbar-light"
    style={{ backgroundColor: "#ffd1dc" }}
  >
    <div className="container-fluid">
      <a
        href="/index.html"
        className="navbar-bran navbar-brand"
        target="_blank"
      >
        www.CSvidyalaya.com
      </a>{" "}
      <button
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-bs-target="#navbarSupportedContent"
        data-bs-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="mb-2 mb-lg-0 me-auto navbar-nav">
          <li className="nav-item">
            <a
              href="/index.html"
              className="nav-link active"
              target="_blank"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
      
              className="nav-link dropdown-toggle"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              id="navbarDropdown"
              role="button"
            >
              Subjects
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a
                  href="/os/operating_System_Topics.html"
                  className="dropdown-item"
                >
                  Operating System
                </a>
              </li>
              <li>
                <a href="/DSA/dsa-topic.html" className="dropdown-item">
                  Dsa
                </a>
              </li>
              <li>
                <a
                  href="/Digital_Fundamentals/Dgital_funda_topic.html"
                  className="dropdown-item"
                >
                  Digital Fundamentals
                </a>
              </li>
              <li>
                <a href="/DBMS/dbms_topic.html" className="dropdown-item">
                  Database Management System (DBMS)
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="/About-us.html"
              className="nav-link active"
              target="_blank"
              aria-current="page"
            >
              About us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/sitemap.html"
              className="nav-link active"
              target="_blank"
              aria-current="page"
            >
              <span className="material-symbols-outlined">hub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>
)
};

export default Header         