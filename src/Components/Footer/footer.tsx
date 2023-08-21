import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { links } from '../list';

function Footer() {
  return(
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top" style={{paddingLeft: '4rem', width: '100%'}}>
      <div className="col mb-3">
        <Image style={{ width: "110px", height: '20px' }} src={links[0].url} fluid/>
      </div>

      <div className="col mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Use Cases</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Arcitecture Diagram</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Whiteboard Interview</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Documentation</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Wireframes</a></li>
        </ul>
      </div>

      <div className="col mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Resources</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Gallery</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Git</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Templates</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Integration</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Docs</a></li>
        </ul>
      </div>

      <div className="col mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Company</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Prices</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Careers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy</a></li>
        </ul>
      </div>

      <div className="col mb-3">
        <Button variant="dark">
          Try Eraser ➜
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
