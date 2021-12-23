import React from "react";
import PropTypes from 'prop-types';
import "./NavItem.css";
import {MdContactPage, MdCottage, MdPerson, MdWork} from "react-icons/md";

const NavItem = ({text, id, selected, onClick}) => {
    return (
        <div onClick={onClick} className={"nav-item selectable " + (selected ? "selected" : "")}>
            {
                id === 0 ? <MdCottage className="nav-icon"/> :
                    id === 1 ? <MdPerson className="nav-icon"/> :
                        id === 2 ? <MdWork className="nav-icon"/> :
                            id === 3 ? <MdContactPage className="nav-icon"/>
                                : null
            }

            {text}
        </div>
    );
};

NavItem.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number,
    selected: PropTypes.bool,
    onClick: PropTypes.func
};

export default NavItem;