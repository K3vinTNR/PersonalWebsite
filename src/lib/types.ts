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

export type ProjectImage = {
	src: string;
	srcset?: string;
	width: number;
	height: number;
	alt: LocalizedText;
};

export type PortfolioProject = {
	id: string;
	title: string;
	year: string | null;
	category: LocalizedText;
	description: LocalizedText;
	contribution: LocalizedText | null;
	technologies: string[];
	image: ProjectImage;
	screenshots?: (ProjectImage & { caption: LocalizedText })[];
	gallery?: (ProjectImage & { caption: LocalizedText })[];
	repositoryUrl: string | null;
	demoUrl: string | null;
	demoLabel?: LocalizedText;
};

export type ContactValues = { name: string; email: string; message: string };
export type ContactFormResult = {
	success: boolean;
	message: string;
	values: ContactValues;
	fieldErrors: Partial<Record<keyof ContactValues, string>>;
};
