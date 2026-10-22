import type { LocalizedText, PortfolioProject } from '$lib/types';

// Replace this initial material with the owner's final content in both languages.
export const profile = {
	name: 'Kevin Taniar',
	initials: 'KT',
	email: 'kevint101106@gmail.com',
	github: 'https://github.com/K3vinTNR',
	linkedin: 'https://www.linkedin.com/in/kevin-taniar-4854692ab/',
	photo: '/images/kevin-taniar.jpg',
	role: { id: 'Mahasiswa Informatika & pengembang perangkat lunak', en: 'Informatics student & software developer' },
	bio: {
		id: 'Saya Kevin, mahasiswa Informatika di Universitas Multimedia Nusantara. Saya tertarik mengembangkan aplikasi web yang mudah digunakan, sambil terus belajar menulis kode yang rapi dan mudah dirawat.',
		en: 'I’m Kevin, an Informatics student at Multimedia Nusantara University. I’m interested in building approachable web applications while learning to write clear, maintainable code.'
	},
	interests: {
		id: 'Di luar pengembangan web, saya juga tertarik pada kecerdasan buatan dan keamanan siber. Bagi saya, setiap proyek adalah kesempatan untuk memahami masalah dan mencoba pendekatan baru.',
		en: 'Beyond web development, I’m curious about artificial intelligence and cybersecurity. Each project is a chance to understand a problem and explore a new approach.'
	},
	education: {
		institution: 'Universitas Multimedia Nusantara',
		degree: { id: 'Informatika', en: 'Informatics' } satisfies LocalizedText
	}
};

export const projects: PortfolioProject[] = [
	{
		id: 'c4rrus',
		title: 'c4rrus',
		year: '2025',
		category: { id: 'Aplikasi web · Rental mobil', en: 'Web application · Car rental' },
		description: {
			id: 'Platform pemesanan rental mobil yang mempertemukan pencarian kendaraan, pilihan mobil, dan reservasi dalam satu alur. Dibuat untuk memudahkan pengguna menemukan kendaraan dan menghubungi penyedia layanan.',
			en: 'A car rental booking platform that brings vehicle search, selection, and reservations into one flow. Designed to help people find a vehicle and get in touch with the rental provider.'
		},
		contribution: null,
		technologies: [],
		image: {
			src: '/images/c4rrus-1440.webp',
			srcset: '/images/c4rrus-720.webp 720w, /images/c4rrus-1440.webp 1440w',
			width: 1440,
			height: 655,
			alt: { id: 'Tampilan halaman pemesanan mobil c4rrus', en: 'The c4rrus car rental booking interface' }
		},
		repositoryUrl: null,
		demoUrl: null
	},
	{
		id: 'ucup',
		title: 'Ucup Menjelajah Nusantara',
		year: '2025',
		category: { id: 'Game web · Eksplorasi interaktif', en: 'Web game · Interactive exploration' },
		description: {
			id: 'Game petualangan edukatif berbasis web tentang perjalanan Ucup menjelajahi berbagai wilayah Indonesia. Eksplorasi, minigame, dan pengelolaan inventori menjadi bagian dari pengalaman bermainnya.',
			en: 'An educational browser adventure following Ucup through different regions of Indonesia. Exploration, minigames, and inventory management come together in the gameplay.'
		},
		contribution: null,
		technologies: ['React'],
		image: {
			src: '/images/ucup-1440.webp',
			srcset: '/images/ucup-720.webp 720w, /images/ucup-1440.webp 1440w',
			width: 1440,
			height: 675,
			alt: { id: 'Tampilan game Ucup Menjelajah Nusantara', en: 'The Ucup Menjelajah Nusantara browser game' }
		},
		repositoryUrl: null,
		demoUrl: null
	}
];

export const skillGroups = [
	{ title: { id: 'Pengembangan web', en: 'Web development' }, skills: ['HTML', 'CSS', 'JavaScript', 'Svelte', 'Bootstrap'] },
	{ title: { id: 'Pemrograman', en: 'Programming' }, skills: ['Python', 'C'] },
	{ title: { id: 'Bidang minat', en: 'Areas of interest' }, skills: { id: ['Kecerdasan buatan', 'Keamanan siber'], en: ['Artificial intelligence', 'Cybersecurity'] } }
];

export const experience: {
	title: LocalizedText;
	organization: string;
	period: LocalizedText;
	description: LocalizedText;
}[] = [];

// Adding this file makes the download available after Vite reloads/rebuilds.
const cvFiles = import.meta.glob('/static/cv/kevin-taniar.pdf', {
	query: '?url',
	import: 'default'
});
export const cvUrl: string | null = Object.keys(cvFiles).length ? '/cv/kevin-taniar.pdf' : null;
