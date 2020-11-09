import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/core/icon/Search";

function Header() {
    return (
        <div className="header">
            <img
                className="header__icon" src="https://i.pingimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""
            />
            <div className="item__center">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
    )
}

export default Header
