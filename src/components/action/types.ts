import React, { FunctionComponent} from 'react';

export type ButtonTag =
	| keyof Pick<React.JSX.IntrinsicElements, 'a' | 'button'>
	| FunctionComponent;

export enum ButtonVariant {
    Primary = 'primary',
    Outline = 'outline',
    Secondary = 'secondary',
}
    
export enum ButtonType { //тип кнопки 
    Button = 'button',
    Submit = 'submit',
}

export enum ButtonLinkVariant { //как кнопка будет выглядеть 
	Button = 'button',
	Link = 'link',
}

export enum IconPosition { // позиция иконки относительна текста
	Left = 'left',
	Right = 'right',
}

export enum ButtonLinkColor { //цвета кнопки под ссылку
	Blue = 'blue',
	Grey = 'grey',
	Primary = 'primary',
	Secondary = 'secondary',
}