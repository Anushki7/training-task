export type SectionProps = {
	className?: string;
	containerClassName?: string;
	variant?: 'page' | 'content';
	title?: string;
	children?: React.ReactNode;
	image?: React.ReactNode;
	renderAction?: () => React.ReactNode;
	HeaderTag?: keyof React.JSX.IntrinsicElements;
};