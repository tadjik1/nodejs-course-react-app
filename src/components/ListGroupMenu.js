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

const ListGroupMenu = ({ categories }) => {
    return (
        <div>
            <div className="backdrop"></div>
            <ListGroup className="sidebar">
                {categories.map(category => {
                    return (
                      <ListGroupItem key={category.id}>
                          <ListGroupMenuDropdown dropdownTitle={category.title} dropdownItems={category.subcategories} />
                      </ListGroupItem>
                    );
                })}
            </ListGroup>
        </div>
    )
};

export default ListGroupMenu;
