import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Modal from './Modal/Modal';
import ModalMenu from './ModalMenu/ModalMenu';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import {fetchCategories} from '../store/modules/categories/actions';
import { Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Form,
  Input,
  Button } from 'reactstrap';
import useModal from '../store/modules/helpers/useModal';

function Header({token, categories, fetchCategories, history, location}) {
  const values = queryString.parse(location.search);
  const {isOpen, handleToggleModal} = useModal();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [query, setQuery] = useState(values.query || '');
  
  useEffect(() => {
    if (query !== values.query) {
      setQuery(values.query || '');
    }

    if (isOpen) handleToggleModal();
  }, [location.search]);
  
  useEffect(() => {
    if (isOpen) handleToggleModal();
  }, [location.pathname]);
  
  useEffect(() => {
    fetchCategories();
  }, []);

  function handleToggleHeaderMenu() {
    setIsOpenMenu(!isOpenMenu);
  }
  
  function search(event) {
    event.preventDefault();
    history.push(`/search?query=${query}`);
  }
  
  function logout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = "/";
  }

  return (
    <header>
      <Navbar light expand="lg">
        <div className="container">
          <div>
            <NavbarToggler onClick={handleToggleHeaderMenu} className="d-none d-md-inline-flex d-lg-none">
              <img src="/assets/icons/icon-menu.svg" alt="menu icon"/>
            </NavbarToggler>
            <Modal
              title="Меню"
              content={<ModalMenu token={token} categories={categories} />}
              id="xsMenuModal"
              isCloseBtn
              isOpen={isOpen}
              handleToggleModal={handleToggleModal}
            />
            <NavbarToggler onClick={handleToggleModal} className="d-inline-flex d-md-none">
              <img src="/assets/icons/icon-menu.svg" alt="menu icon"/>
            </NavbarToggler>
            <Link to="/" className="navbar-brand"><strong>AnyShop</strong></Link>
          </div>

          <Collapse isOpen={isOpenMenu} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Form onSubmit={search} inline className="my-2 my-md-0 ml-lg-5">
                  <Input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Поиск"
                    aria-label="Search"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                  />
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
            {!!token &&
              <a onClick={logout} href="#" className="text-muted">Выйти</a>
            }
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    categories: state.categories,
  };
}

const mapDispatchToProps = { fetchCategories };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
