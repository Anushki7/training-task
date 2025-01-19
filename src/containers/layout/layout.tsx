import { FunctionComponent, ReactNode } from "react";
import { Footer } from "../footer/footer";
import clsx from "clsx";
import styles from './Layout.module.scss';
import { Header } from "../header/header";
import { LayoutProps } from "./types";

export const Layout: FunctionComponent<LayoutProps>  = ({ className, children, user, headerSettings, footerSettings }: LayoutProps) => {
	return <div className={clsx(styles.layout, className)}>
		<Header menu={[]} {...headerSettings}>{user}</Header>
		<div className={styles.content}>{children}</div>
		<Footer {...footerSettings} />
	</div>;
}