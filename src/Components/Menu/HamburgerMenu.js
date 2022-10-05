import { slide as Menu } from "react-burger-menu";
import "./menu.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HamburgerMenu() {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const navigate = useNavigate();

  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "30px",
      height: "25px",
      left: "20px",
      top: "20px",
      color: "#3DC1B2",
    },
    bmBurgerBars: {
      background: "#3DC1B2",
    },
    bmBurgerBarsHover: {
      background: "#3DC1B2",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "20%",
    },
    bmMenu: {
      background: "#D6EFED",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
      color: "#355764",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  let activeStyle = {
    color: "hotpink",
  };

  return (
    <>
      <Menu styles={styles}>
        <ul>
          {" "}
          <span onClick={() => navigate("/category/2")}>Medicines </span>
          {/* <li className={clicked1 ? "" : "hidden"}><NavLink to="/" style={({ isActive }) =>
            isActive && activeStyle}>Item1</NavLink></li>
          <li className={clicked1 ? "" : "hidden"}><NavLink to="/" style={({ isActive }) =>
            isActive && activeStyle}>Item1</NavLink></li>
          <li className={clicked1 ? "" : "hidden"}><NavLink to="/" >Item1</NavLink></li>
          <li className={clicked1 ? "" : "hidden"}><NavLink to="/" >Item1</NavLink></li> */}
        </ul>

        <ul>
          {" "}
          <span onClick={() => navigate("/category/1")}>Cosmetics</span>
          {/* <li className={clicked2 ? "" : "hidden"}><NavLink to="/" >Item1</NavLink></li>
          <li className={clicked2 ? "" : "hidden"}><NavLink to="/" >Item1</NavLink></li>
          <li className={clicked2 ? "" : "hidden"}><NavLink to="/" >Item1</NavLink></li>
          <li className={clicked2 ? "" : "hidden"}><NavLink to="/" >Item1</NavLink></li> */}
        </ul>
        <ul>
          {" "}
          <span onClick={() => navigate("/category/3")}>
            Vitamin, Sport & Nutrition
          </span>
        </ul>
        <ul>
          {" "}
          <span onClick={() => navigate("/category/4")}>
            Pregnancy & Maternity
          </span>
        </ul>
        <ul>
          {" "}
          <span onClick={() => navigate("/category/5")}>Over the Counter</span>
        </ul>
      </Menu>
    </>
  );
}

{
  /* <NavLink
  to="/faq"
  style={isActive => ({
    color: isActive ? "green" : "blue"
  })}
>
  FAQs
</NavLink> */
}

// 1- inside the hamburger menu, we want to display all the categories. Some of the categories have sub-categories. ✅

// 2- When we select a category, we want to display all the sub-categories. ✅
//IDEA: all subcategories will have a classname of hidden. When we click on a category, we will remove the hidden class from the subcategories.

// 3- When we select one of the categories or sub-categories, it should be highlighted in the menu.
//IDEA: When one of the elements (either the ul or li) have been clicked, give it a style effect

// 4- The color of the hamburger should be 3DC1B2

// 5- The logo should be displayed next to the hamburger menu
