import { FunctionComponent } from 'react';
import clsx from 'clsx';

import styles from './header.module.scss';
import { Anchor } from '@/components/anchor/anchor';
import { HeaderProps } from './types';
import { Menu } from './menu'; 

export const Header: FunctionComponent<HeaderProps> = ({
    className,
    isSticky = true,
    menu,
    children,
  }: HeaderProps) => {
    return (
      <header
        className={clsx(styles.header, className, {
          [styles.sticky]: isSticky,
        })}
      >
        <div className={styles.container}>
          <Anchor href="/" className={styles.logo} />
          <nav className={clsx(styles.menu)}>
            <Menu items={menu} /> {/* Используем новый компонент Menu */}
          </nav>
          <nav className={styles.controls}>{children}</nav>
        </div>
      </header>
    );
  };
  