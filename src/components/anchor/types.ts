import { FunctionComponent } from "react";
import { AnchorProps } from "./anchor.tsx";
import { AnchorContext } from './anchorContext.tsx';

export type LinkTag =
	| keyof Pick<React.JSX.IntrinsicElements, 'a'>
	| FunctionComponent<AnchorProps>;

export type AnchorContextType = {
	LinkElement?: FunctionComponent<AnchorProps>;
	ignoreFn?: (href: string) => boolean;
};

export type AnchorProviderProps = AnchorContextType & {
	children: React.ReactNode;
};

export function AnchorProvider({
	children,
	LinkElement,
	ignoreFn,
}: AnchorProviderProps) {
	return (
		<AnchorContext.Provider value={{ LinkElement, ignoreFn }}>
			{children}
		</AnchorContext.Provider>
	);
}