import React, { FC, useState } from 'react';
import burgerIcon from './burger.svg';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PATH } from '../Pages';

type PropsType = {
    handleOpen: () => void;
    handleClose: () => void;
};

export const Header: FC<PropsType> = ({ handleOpen, handleClose }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const pageName = currentPath === PATH.PRE_JUNIOR
        ? 'Pre-junior'
        : currentPath === PATH.JUNIOR
            ? 'Junior'
            : currentPath === PATH.JUNIOR_PLUS
                ? 'Junior Plus'
                : 'Error';

    const [isLinksVisible, setIsLinksVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsLinksVisible(true);
    };

    const handleMouseLeave = () => {
        setIsLinksVisible(false);
    };

    return (
        <div id={'hw5-header'} className={s.header}>
            <img
                src={burgerIcon}
                id={'hw5-burger-menu'}
                className={s.burgerMenuIcon}
                onClick={handleOpen}
                onMouseEnter={handleMouseEnter} // Показать ссылки при наведении
                alt={'open menu'}
            />
            <nav
                className={`${s.links} ${isLinksVisible ? s.visible : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <NavLink
                    id="hw5-pre-junior-link"
                    to={PATH.PRE_JUNIOR}
                    onClick={handleClose}
                >
                    PreJunior
                </NavLink>

                <NavLink
                    id="hw5-junior-link"
                    to={PATH.JUNIOR}
                    onClick={handleClose}
                >
                    Junior
                </NavLink>

                <NavLink
                    id="hw5-junior-plus-link"
                    to={PATH.JUNIOR_PLUS}
                    onClick={handleClose}
                >
                    Junior+
                </NavLink>
            </nav>
            <h1>{pageName}</h1>
        </div>
    );
};
