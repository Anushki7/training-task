import { HeaderProps } from "@/stories/Header";
import { ReactNode } from "react";
import { FooterProps } from "../footer/type";

export type LayoutProps = {
	className?: string;
	children?: ReactNode;
	user?: ReactNode;
	headerSettings: HeaderProps;
	footerSettings: FooterProps;
};