const Navbar = () => {
    return (
        <div>
            <div className="container bg-info borderBottom">
            <nav className="navbar navbar-expand-lg navbar-light  bg-info " >
            <a className="navbar-brand" href="#">
                Alliyen
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                    Home <span className="sr-only"></span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    About
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Product
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">
                        Action
                    </a>
                    <a className="dropdown-item" href="#">
                        Another action
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">
                        Contact
                    </a>
                </li>
                </ul>
            </div>
        </nav>
            </div>
            
        </div>
    );
};

export default Navbar;