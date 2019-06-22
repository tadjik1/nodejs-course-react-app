import React from 'react';
import {Link} from 'react-router-dom';

import Chat from '../Chat/Chat';
import ModalContextMenu from '../ModalContextMenu';
import ModalAsItem from "./ModalAsItem";

// Mock example context menu data of 1st item
const passedContextMenuData = [
  {
    title: "Title 1",
    src: "/"
  },
  {
    title: "Title 2",
    src: "/"
  },
  {
    title: "Title 3",
    src: "/"
  },
  {
    title: "Title 4",
    src: "/"
  }
];

// Mock categories
const productCategories = [
  {
    title: "Have a question?",
    modalName: "question",
    modalComponent: <Chat />,
    isChat: true
  },
  {
    title: "Home Cinema, TV & Video",
    modalName: "ChatMobile",
    modalComponent: <ModalContextMenu data={passedContextMenuData} />,
    isChat: false
  },
  {
    title: "Mobile Phones",
    modalName: "mobiles",
    modalComponent: <ModalContextMenu data={passedContextMenuData} />,
    isChat: false
  },
  {
    title: "Computers & Components",
    modalName: "computers",
    modalComponent: <ModalContextMenu data={passedContextMenuData} />,
    isChat: false
  }
];

// Create a Context
const OpeningModalContext = React.createContext();

// Create modal provider
const ModalProvider = ({item}) => (
  <OpeningModalContext.Provider value={item}>
    <ModalAsItem context={OpeningModalContext} isChat={item.isChat} />
  </OpeningModalContext.Provider>
);

const ModalMenu = () => (
  <div className="modal-menu">
    <Link to="#" className="modal-menu__item">Sales</Link>
    <Link to="#" className="modal-menu__item">Gift Cards</Link>
    <Link to="#" className="modal-menu__item">Login</Link>
    <Link to="#" className="modal-menu__item">Register</Link>
    <h3 className="h6 mb-0 modal-menu__title">Product categories</h3>
    {productCategories && productCategories.map((item, key) => (
      <ModalProvider key={key} item={item} />
    ))}
  </div>
);

export default ModalMenu;