import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
//import logo from "../../img/logo.png";


{/* <nav id="sidenav-1" class="sidenav" data-mdb-hidden="false">
  <ul class="sidenav-menu">
    <li class="sidenav-item">
      <a class="sidenav-link">
        <i class="far fa-smile fa-fw me-3"></i><span>Link 1</span></a>
    </li>
    <li class="sidenav-item">
      <a class="sidenav-link"><i class="fas fa-grin fa-fw me-3"></i><span>Category 1</span></a>
      <ul class="sidenav-collapse show">
        <li class="sidenav-item">
          <a class="sidenav-link">Link 2</a>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link">Link 3</a>
        </li>
      </ul>
    </li>
    <li class="sidenav-item">
      <a class="sidenav-link"><i class="fas fa-grin-wink fa-fw me-3"></i><span>Category
          2</span></a>
      <ul class="sidenav-collapse">
        <li class="sidenav-item">
          <a class="sidenav-link">Link 4</a>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link">Link 5</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
<button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn btn-primary"
  aria-controls="#sidenav-1" aria-haspopup="true">
  <i class="fas fa-bars"></i>
</button> */}


const NavBarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          {/* Add Logo  */}
          <nav id="sidenav-1" class="sidenav" data-mdb-hidden="false">
  <ul class="sidenav-menu">
    <li class="sidenav-item">
      <a class="sidenav-link">
        <i class="far fa-smile fa-fw me-3"></i><span>Link 1</span></a>
    </li>
    <li class="sidenav-item">
      <a class="sidenav-link"><i class="fas fa-grin fa-fw me-3"></i><span>Category 1</span></a>
      <ul class="sidenav-collapse show">
        <li class="sidenav-item">
          <a class="sidenav-link">Link 2</a>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link">Link 3</a>
        </li>
      </ul>
    </li>
    <li class="sidenav-item">
      <a class="sidenav-link"><i class="fas fa-grin-wink fa-fw me-3"></i><span>Category
          2</span></a>
      <ul class="sidenav-collapse">
        <li class="sidenav-item">
          <a class="sidenav-link">Link 4</a>
        </li>
        <li class="sidenav-item">
          <a class="sidenav-link">Link 5</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>



<button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn btn-primary"
  aria-controls="#sidenav-1" aria-haspopup="true">
  <i class="fas fa-bars"></i>
</button>

          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/pharmahome-2ffc7.appspot.com/o/logoright.png?alt=media&token=44767142-3da2-4336-9e19-d085e73a2453`}
                alt="logo"
              />
            </NavLink>
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`Cart`}
                  >
                    {" "}
                    Cart{" "}
                  </NavLink>{" "}
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  {" "}
                  <Link to="#">
                    {" "}
                    User <FiChevronDown />{" "}
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Dashboard`}
                      >
                        {" "}
                        Dashboard{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Profile`}
                      >
                        {" "}
                        Profile{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/OrderHistory`}
                      >
                        {" "}
                        OrderHistory{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/SignOut`}
                      >
                        {" "}
                        SignOut{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Contact`}
                  >
                    {" "}
                    Contact{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
//   function NavBarmenu() {
//     return (
//       <header>
//         <nav>
//           <ul>
//             <li>
//               <NavLink to={`/`}> Home </NavLink>{" "}
//             </li>
//             <li>
//               <NavLink to={`/About`}> Cart </NavLink>{" "}
//             </li>
//             <li>
//               {" "}
//               User
//               <ul>
//                 <li>
//                   <NavLink to={`/Dashboard`}> Dashboard </NavLink>{" "}
//                 </li>
//                 <li>
//                   <NavLink to={`/Profile`}> Profile </NavLink>{" "}
//                 </li>
//                 <li>
//                   <NavLink to={`/OrderHistory`}> OrderHistory </NavLink>{" "}
//                 </li>
//                 <li>
//                   <NavLink to={`/SignOut`}> SignOut </NavLink>{" "}
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// };
export default NavBarmenu;
