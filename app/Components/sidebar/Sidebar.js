"use client"
import React, { useState } from 'react';
import "./Sidebar.css";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <nav className='nav'>
          <div className='nav__menu'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#home' className='nav__link'>
                  <i className="fa-solid fa-house"></i>
                  <span className='nav__text'>Home</span>
                </a>
              </li>

              <li className='nav__item'>
                <a href='#about' className='nav__link'>
                  <i className="fa-solid fa-address-card"></i>
                  <span className='nav__text'>About</span>
                </a>
              </li>

              <li className='nav__item'>
                <a href='#skills' className='nav__link'>
                  <i className="fa-solid fa-desktop"></i>
                  <span className='nav__text'>Skills</span>
                </a>
              </li>

              <li className='nav__item'>
                <a href='#work' className='nav__link'>
                  <i className="fa-solid fa-diagram-project"></i>
                  <span className='nav__text'>Projects</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className='nav__footer'>
          <span className='copyright'>&copy;</span>
          <span className='copyright'>&copy;.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className='icon-menu'></i>
      </div>
    </>
  );
};

export default Sidebar;
