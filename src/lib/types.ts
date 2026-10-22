export type BlogPost = {
	id: string;
	title: string;
	excerpt: string;
	description: string;
	date: string;
	author: string;
	image: string;
	link?: string;
};

export type Locale = 'id' | 'en';
export type LocalizedText = Record<Locale, string>;

export type PortfolioProject = {
	id: string;
	title: string;
	year: string;
	category: LocalizedText;
	description: LocalizedText;
	contribution: LocalizedText | null;
	technologies: string[];
	image: { src: string; srcset: string; width: number; height: number; alt: LocalizedText };
	repositoryUrl: string | null;
	demoUrl: string | null;
};

export type ContactValues = { name: string; email: string; message: string };
export type ContactFormResult = {
	success: boolean;
	message: string;
	values: ContactValues;
	fieldErrors: Partial<Record<keyof ContactValues, string>>;
};
