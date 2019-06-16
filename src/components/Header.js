import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Header({token}) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div>
            <button className="navbar-toggler d-none d-md-inline-flex d-lg-none" type="button"
                    data-toggle="collapse" data-target="#navbarsExample07"
                    aria-controls="navbarsExample07" aria-expanded="false"
                    aria-label="Toggle navigation">
              <img src="assets/icons/icon-menu.svg" alt="menu icon" />
            </button>
            <button className="navbar-toggler d-inline-flex d-md-none has-messages" type="button"
                    data-toggle="modal" data-target="#xsMenuModal">
              <img src="assets/icons/icon-menu.svg" alt="menu icon" />
            </button>
            <Link className="navbar-brand" to="/"><strong>AnyShop</strong></Link>
          </div>
          <Link to="/" className="mobile-search-menu-icon">
            <img src="assets/icons/icon-search.svg" alt="menu icon" />
          </Link>
        
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <form className="form-inline my-2 my-md-0 ml-lg-5">
                  <input className="form-control mr-sm-2" type="text" placeholder="Поиск"
                         aria-label="Search" />
                  <button type="submit" className="btn btn-outline-primary">Поиск</button>
                </form>
              </li>
            </ul>
            {!token &&
              <div>
                <Link to="/login" className="text-muted">Вход</Link>
                {' | '}
                <Link to="/register" className="text-muted">Регистрация</Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </header>
  );
}

function mapStateToProps(state) {
  return { token: state.auth.token };
}

export default connect(mapStateToProps)(Header);
