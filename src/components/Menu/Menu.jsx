import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as ArrowIcon } from './Icons/arrow.svg';
import { ReactComponent as BasicIcon } from './Icons/basic.svg';
import { ReactComponent as CubeIcon } from './Icons/cube.svg';
import { ReactComponent as CaretIcon } from './Icons/caret.svg';
import { ReactComponent as MountainIcon } from './Icons/mountains.svg';
import { ReactComponent as SwitchIcon } from './Icons/switch.svg';
import { CSSTransition } from 'react-transition-group';
import './Menu.scss';

function AnimatedHeader() {
  const [open, setOpen] = useState(false);
  
  function Navbar(props) {
    return (
      <nav className="navbar">
        <h3 className='navbar-heading' data-testid='navbar-main'>
          React Plotly
        </h3>
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItem(props) {  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    useOutsideAlerter(dropdownRef);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href={props.subMenu ? props.subMenu : '#'} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem
              leftIcon={<BasicIcon />}
              goToMenu="basic">
              Basic
            </DropdownItem>
            <DropdownItem
              leftIcon={<CubeIcon />}
              goToMenu="3d">
              3D
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'basic'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h3>Basic</h3>
            </DropdownItem>
            <DropdownItem leftIcon="📈" subMenu="/">Line Graph</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === '3d'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
              <h3>3D</h3>
            </DropdownItem>
            <DropdownItem leftIcon={<SwitchIcon />} subMenu="/switch-graph">Switch Graph</DropdownItem>
            <DropdownItem leftIcon={<MountainIcon />} subMenu="/surface-plot">Surface Plot Graph</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  return (
    <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}
  
export default AnimatedHeader;