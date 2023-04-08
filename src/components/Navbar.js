import React from 'react'
import '../navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.textcol}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.textcol}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.textcol}`} to="/about">{props.abouttext}</Link>
            </li>
            <li>
              <div className="dropdown mx-5">
                <button className="btn text-white dropdown-toggle" id="btn2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Themes
                </button>
                <ul className="dropdown-menu">
                  <li><button className={`dropdown-item rounded text-light bg-danger`} href="/" onClick={props.changeRed}>Red</button></li>
                  <li><button className={`dropdown-item rounded text-light bg-warning`} href="/" onClick={props.changeYellow}>Yellow</button></li>
                  <li><button className={`dropdown-item rounded text-light bg-success`} href="/" onClick={props.changeGreen}>Green</button></li>
                  <li><button className={`dropdown-item rounded text-light bg-dark`} href="/" onClick={props.changeDark}>Dark</button></li>
                  <li><button className={`dropdown-item rounded text-dark bg-light`} href="/" onClick={props.changeLight}>Light</button></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    <div id='alert' className="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
    </>
  )
}
