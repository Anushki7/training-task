import React, { FunctionComponent } from 'react';
import { Anchor } from '@/components/anchor/anchor';
import styles from './Menu.module.scss'; 
import { MenuLink } from './types';

interface MenuProps {
  items: MenuLink[];
}

export const Menu: FunctionComponent<MenuProps> = ({ items }) => {
  return (
    <ul className={styles.menuContent}>
      {items.map(({ label, href }, index) => (
        <li key={index} className={styles.link}>
          <Anchor href={href}>{label}</Anchor>
        </li>
      ))}
    </ul>
  );
};
