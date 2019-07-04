import React from 'react';
import {Link} from 'react-router-dom';

import Chat from '../Chat/Chat';
import ModalContextMenu from '../ModalContextMenu';
import ModalAsItem from "./ModalAsItem";

// Create a Context
const OpeningModalContext = React.createContext();

// Create modal provider
const ModalProvider = ({item}) => (
  <OpeningModalContext.Provider value={item}>
    <ModalAsItem context={OpeningModalContext} isChat={item.isChat} />
  </OpeningModalContext.Provider>
);

const ModalMenu = ({token, categories}) => (
  <div className="modal-menu">
    <Link to="/login" className="modal-menu__item">Вход</Link>
    <Link to="/register" className="modal-menu__item">Регистрация</Link>
    {!!token &&
      <ModalProvider item={{
        title: "Есть вопрос?",
        modalComponent: <Chat />,
        isChat: true,
      }} />
    }
    <h3 className="h6 mb-0 modal-menu__title">Категории</h3>
    {categories.map(category => {
      const item = {
        title: category.title,
        modalComponent: <ModalContextMenu data={category.subcategories.map(subcategory => ({
          title: subcategory.title,
          src: `/category/${subcategory.id}`
        }))} />,
        isChat: false
      };
      
      return (
        <ModalProvider key={category.id} item={item} />
      );
    })}
  </div>
);

export default ModalMenu;
