import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-menu">
            <a href="#" className="text-muted">Terms and Conditions</a>
            <span className="d-none d-md-inline-flex">|</span>
            <a href="#" className="text-muted">Privacy</a>
            <span className="d-none d-md-inline-flex">|</span>
            <a href="#" className="text-muted">Cookies</a>
            <span className="d-none d-md-inline-flex">|</span>
            <a href="#" className="text-muted">Home shopping guarantee</a>
          </div>
          <div>
            © 1998-2019, AnyShop.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
