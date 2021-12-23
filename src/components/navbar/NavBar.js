import React from "react";
import PropTypes from 'prop-types';
import NavItem from "./NavItem";
import "./NavBar.css";

const NavBar = ({links, profilePicture, itemOnClick, selectedItem}) => {
    return (
        <nav>
            <div id="navProfileImage" className="nav-item"><img src={profilePicture.src} alt={profilePicture.alt}
                                                                className="nav-profile-image"/></div>
            {links.map(link => <NavItem key={link.key} id={link.key} text={link.title}
                                        selected={selectedItem === link.key} onClick={() => itemOnClick(link.key)}/>)}
        </nav>
    );
};

NavBar.propTypes = {
    links: PropTypes.array,
    profilePicture: PropTypes.object,
    itemOnClick: PropTypes.func,
    selectedItem: PropTypes.number
};

export default NavBar;