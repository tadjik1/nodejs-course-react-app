import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Modal from './Modal/Modal';
import ModalMenu from './ModalMenu/ModalMenu';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Form,
  Input,
  Button } from 'reactstrap';
import useModal from '../store/modules/helpers/useModal';

function Header({token}) {
  const {isOpen, handleToggleModal} = useModal();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleToggleHeaderMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header>
      <Navbar light expand="lg">
        <div className="container">
          <div>
            <NavbarToggler onClick={handleToggleHeaderMenu} className="d-none d-md-inline-flex d-lg-none">
              <img src="assets/icons/icon-menu.svg" alt="menu icon"/>
            </NavbarToggler>
            <Modal
              title="Menu"
              content={<ModalMenu/>}
              id="xsMenuModal"
              isCloseBtn
              isOpen={isOpen}
              handleToggleModal={handleToggleModal}
            />
            <NavbarToggler onClick={handleToggleModal} className="d-inline-flex d-md-none has-messages">
              <img src="assets/icons/icon-menu.svg" alt="menu icon"/>
            </NavbarToggler>
            <NavbarBrand href="/"><strong>AnyShop</strong></NavbarBrand>
          </div>
          <Link to="/" className="mobile-search-menu-icon">
            <img src="assets/icons/icon-search.svg" alt="menu icon"/>
          </Link>

          <Collapse isOpen={isOpenMenu} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Form inline className="my-2 my-md-0 ml-lg-5">
                  <Input className="form-control mr-sm-2" type="text" placeholder="Поиск" aria-label="Search"/>
                  <Button type="submit" color="primary" outline>Поиск</Button>
                </Form>
              </NavItem>
            </Nav>
            {!token &&
            <div>
              <Link to="/login" className="text-muted">Вход</Link>
              {' | '}
              <Link to="/register" className="text-muted">Регистрация</Link>
            </div>
            }
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
}

function mapStateToProps(state) {
  return {token: state.auth.token};
}

export default connect(mapStateToProps)(Header);
