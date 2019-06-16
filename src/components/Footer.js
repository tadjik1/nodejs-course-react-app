import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-menu">
            <a href="#" className="text-muted">Правила использования</a>
            <span className="d-none d-md-inline-flex footer-menu-separator">|</span>
            <a href="#" className="text-muted">Конфиденциальность</a>
            <span className="d-none d-md-inline-flex footer-menu-separator">|</span>
            <a href="#" className="text-muted">Cookies</a>
            <span className="d-none d-md-inline-flex footer-menu-separator">|</span>
            <a href="#" className="text-muted">Гарантия</a>
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
