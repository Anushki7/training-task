const TranslationKey = [   
    "demo.welcomeUser",
    "demo.logIn",
    "demo.logOut",
    "demo.signUp",
    "main.title",
    "main.description",
    "main.applyVolunteer",
    "main.volunteerMotivation",
    "main.applyFund",
    "main.fundMotivation"
] as const;

export type TranslationKey = (typeof TranslationKey)[number];

export const isTranslationKey = (x: any): x is TranslationKey => TranslationKey.includes(x);

export type TextProps = {
	className?: string;
	value: TranslationKey | string;
	Tag?: keyof React.JSX.IntrinsicElements;
};