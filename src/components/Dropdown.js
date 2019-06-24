import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const ListGroupMenuDropdown = ({dropdownTitle, dropdownItems}) => {
    const [isOpen, setToggleState] = useState(false);

    const handleToggleDropdown = () => {
        setToggleState(!isOpen);
    };

    return (
        <Dropdown isOpen={isOpen} toggle={handleToggleDropdown}>
            <DropdownToggle caret tag="a" className="nav-link">
                { dropdownTitle }
            </DropdownToggle>
            <DropdownMenu>
                { dropdownItems.map((item, key) => (
                  <DropdownItem key={key}>
                    <Link key={item.id} to={`/category/${item.id}`}>
                      {item.title}
                    </Link>
                  </DropdownItem>
                )) }
            </DropdownMenu>
        </Dropdown>
    )
};

ListGroupMenuDropdown.propTypes = {
    dropdownTitle: PropTypes.string,
    dropdownItems: PropTypes.array
};

export default ListGroupMenuDropdown;
