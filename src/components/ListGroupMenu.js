import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ListGroupMenuDropdown from './Dropdown';

const dropdownList = [
    'Accessories',
    'Action Cameras & Accessories',
    'Binoculars, Telescopes & Optics',
    'Camcorders',
    'Digital Cameras',
    'Digital Picture Frames',
    'Film Cameras',
    'Film Scanners',
    'Flashes',
    'Lenses',
    'Photo Printers',
    'Slide Projectors',
    'Slide Viewers',
    'Surveillance Cameras',
    'Tripods & Monopods',
    'Underwater Video & Photography',
    'Video Projectors'
];

const ListGroupMenu = () => {

    return (
        <div>
            <div className="backdrop"></div>
            <ListGroup className="sidebar">
                <ListGroupItem>
                    <ListGroupMenuDropdown dropdownTitle="Camera & Photo" dropdownItems={dropdownList} />
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupMenuDropdown dropdownTitle="Home Cinema, TV & Video" dropdownItems={dropdownList} />
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupMenuDropdown dropdownTitle="Mobile Phones" dropdownItems={dropdownList} />
                </ListGroupItem>
                <ListGroupItem>
                    <ListGroupMenuDropdown dropdownTitle="Computers & Components" dropdownItems={dropdownList} />
                </ListGroupItem>
            </ListGroup>
        </div>
    )
};

export default ListGroupMenu;