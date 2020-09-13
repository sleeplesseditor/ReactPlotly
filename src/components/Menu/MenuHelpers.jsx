import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from './Icons/arrow.svg';

function useOutsideAlerter(ref, openView) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                openView(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function DropdownItem({ children, goToMenu, leftIcon, rightIcon, setActiveMenu, subMenu }) {
    return (
      <a href={subMenu ? subMenu : '#'} className="menu-item" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        <span className="icon-button">{leftIcon}</span>
        {children}
        <span className="icon-right">{rightIcon}</span>
      </a>
    );
}

const PrimaryMenu = ({ activeMenuProp, calcHeight, menuData: { menuTitles }, setActiveMenu }) => {
    if (menuTitles) {
        return (
            <CSSTransition
                in={activeMenuProp}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    {menuTitles.map(link => (
                        <DropdownItem setActiveMenu={setActiveMenu} goToMenu={link.link}>{link.title}</DropdownItem>
                    ))}
                </div>
            </CSSTransition>
        )
    } else {
        return null
    }
};

const SecondaryMenu = ({ activeMenuProp, calcHeight, goToMenu, menuData: { menuTitle, menuLinks}, setActiveMenu }) => {
    if (menuTitle && menuLinks) {
        return (
            <CSSTransition
                in={activeMenuProp}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />} setActiveMenu={setActiveMenu} >
                    <h3>{menuTitle}</h3>
                    </DropdownItem>
                    {/* <DropdownItem leftIcon={<SwitchIcon />} subMenu="/switch-graph">Switch Graph</DropdownItem>
                    <DropdownItem leftIcon={<MountainIcon />} subMenu="/surface-plot">Surface Plot Graph</DropdownItem> */}
                    {menuLinks.map(link => (
                        <DropdownItem subMenu={link.link}>{link.title}</DropdownItem>
                    ))}
                </div>
            </CSSTransition>
        )
    } else {
        return null
    }
};

export { PrimaryMenu, SecondaryMenu, useOutsideAlerter };