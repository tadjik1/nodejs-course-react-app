import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-menu">
            <Link to="#" className="text-muted">Правила использования</Link>
            <span className="d-none d-md-inline-flex footer-menu-separator">|</span>
            <Link to="#" className="text-muted">Конфиденциальность</Link>
            <span className="d-none d-md-inline-flex footer-menu-separator">|</span>
            <Link to="#" className="text-muted">Cookies</Link>
            <span className="d-none d-md-inline-flex footer-menu-separator">|</span>
            <Link to="#" className="text-muted">Гарантия</Link>
          </div>
          <div>
            © 1998-2019, AnyShop.com, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
