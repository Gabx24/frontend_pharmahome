import HamburgerMenu from "./HamburgerMenu"
import NavbarTest from './NavbarTest'

export default function Navbar() {
    return(
        <nav className="row  d-flex flex-row-reverse">
            {/* <HamburgerMenu /> */}
            {/* <div className="col-3">
                <ul className="row">
                    <li className="col">Home</li>
                    <li className="col">Cart</li>
                    <li className="col dropdown-menu userDropdown">User</li>
                    <NavDropdown>
                        <Link variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Link>

                        <NavDropdown.Menu>
                            <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
                        </NavDropdown.Menu>
                    </NavDropdown>
                </ul>
            </div> */}
            <NavbarTest />
        </nav>
    )
}

// Extend bootstrap colors to add your project's colors
// pharmaMain: #3D4C00

// bg-pharmaMain
// text-pharmaMain