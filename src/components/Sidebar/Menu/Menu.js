// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
            {/* <a href={withPrefix(item.path)} target="_blank">Probability</a> */}
          <Link to={withPrefix(item.path)} className={styles['menu__list-item-link']} activeClassName={styles['menu__list-item-link--active']}>
            <strong>{item.label}</strong>
          </Link>
        </li>
      ))}
      <a href={withPrefix('/Tyler_Herron-resume.pdf')} target='_blank' className={styles['menu__list-item-link']} activeClassName={styles['menu__list-item-link--active']}>
        <strong>Resume</strong>
      </a>
    </ul>
  </nav>
);

export default Menu;
