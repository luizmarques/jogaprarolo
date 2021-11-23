import React from 'react'
import "../../assets/css/style.css"
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://psicologanaara.com.br/wp-content/uploads/2020/07/logo-forbes-1-1.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Buscar Produtos"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <Link to="/user/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Faça seu </span>
            <span className="header__optionLineTwo">Login</span>
          </div>
        </Link>
        <Link to="/user/register" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Faça seu</span>
            <span className="header__optionLineTwo">Registro</span>
          </div>
        </Link>
        <Link to="/user/dashboard" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Sua</span>
            <span className="header__optionLineTwo">Conta</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo ">0</span>
          </div>
        </Link>

      </div>
    </nav>
  )
}

export default Header
