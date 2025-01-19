import { AnchorHTMLAttributes, MouseEvent } from 'react';
import { useAnchor, useLinkProps } from './anchorContext'; // добавляем компонент

export type Link = string | ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'link'
> & {
	link?: Link;
};

export function Anchor({ href, children, ...props }: AnchorProps) { // добавляем компонент
	const LinkElement = useAnchor(href);
	const propsLink = useLinkProps(href);
	return (
		<LinkElement {...props} {...propsLink}>
			{children}
		</LinkElement>
	);
}