import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden}) => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <nav className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONNTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </nav>
    {
      hidden ? null : <CartDropdown />
    }    
  </header>
);

const mapStatetoProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStatetoProps)(Header);
