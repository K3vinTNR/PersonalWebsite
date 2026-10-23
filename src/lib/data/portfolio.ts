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
		demoUrl: 'https://exquisite-kelpie-3497d8.netlify.app/',
		demoLabel: { id: 'Mainkan game', en: 'Play the game' }
	},
	{
		id: 'cyber-lockdown',
		title: 'Cyber Lockdown',
		year: null,
		category: { id: 'Game 3D · Puzzle & keamanan siber', en: '3D game · Puzzles & cybersecurity' },
		description: {
			id: 'Game puzzle 3D yang dikembangkan dengan Unity, menggabungkan suasana dunia sci-fi dengan tantangan seputar keamanan siber. Pemain harus menyelesaikan berbagai puzzle bertema cybersecurity, menggunakan logika dan kemampuan pemecahan masalah untuk menuntaskan tantangan dalam permainan. Proyek ini mengeksplorasi cara menghadirkan topik keamanan digital melalui pengalaman bermain yang interaktif.',
			en: 'A 3D puzzle game developed with Unity, combining a sci-fi setting with cybersecurity challenges. Players solve a variety of cybersecurity-themed puzzles, using logic and problem-solving skills to work through the game’s challenges. The project explores how digital security topics can be presented through an interactive gaming experience.'
		},
		contribution: null,
		technologies: ['Unity'],
		image: {
			src: '/images/cyber-lockdown-menu.png', width: 2872, height: 1620,
			alt: { id: 'Menu utama Cyber Lockdown di dalam fasilitas sci-fi', en: 'Cyber Lockdown main menu inside a sci-fi facility' }
		},
		screenshots: [
			{
				src: '/images/cyber-lockdown-menu.png', width: 2872, height: 1620,
				alt: { id: 'Menu utama Cyber Lockdown dengan pilihan New Game, Credits, dan Quit', en: 'Cyber Lockdown main menu with New Game, Credits, and Quit options' },
				caption: { id: 'Menu utama', en: 'Main menu' }
			},
			{
				src: '/images/cyber-lockdown-gameplay.png', width: 2880, height: 1620,
				alt: { id: 'Karakter menjelajahi fasilitas karantina 3D untuk mencari tablet personel', en: 'A character exploring the 3D quarantine facility to find a personnel tablet' },
				caption: { id: 'Eksplorasi fasilitas', en: 'Facility exploration' }
			},
			{
				src: '/images/cyber-lockdown-archive.png', width: 2876, height: 1620,
				alt: { id: 'Arsip Dr. Aruna berisi catatan evakuasi dan petunjuk untuk memecahkan puzzle', en: 'Dr. Aruna’s archive with evacuation records and clues for solving a puzzle' },
				caption: { id: 'Arsip & petunjuk puzzle', en: 'Archive & puzzle clues' }
			}
		],
		repositoryUrl: null,
		demoUrl: null
	},
	{
		id: 'klipify',
		title: 'Klipify',
		year: null,
		category: { id: 'Desain UI/UX · Aplikasi kliping', en: 'UI/UX design · Clipping application' },
		description: {
			id: 'Desain aplikasi kliping yang berfokus pada antarmuka yang mudah dipahami dan alur penggunaan yang terstruktur. Dirancang di Figma sebagai prototipe interaktif, Klipify menghubungkan berbagai layar untuk memperlihatkan pengalaman pengguna saat menjelajahi aplikasi. Desainnya juga mencakup library aset seperti template subtitle dan efek suara untuk mendukung kebutuhan pembuatan klip.',
			en: 'A clipping application design focused on an approachable interface and a structured user journey. Created in Figma as an interactive prototype, Klipify connects multiple screens to demonstrate how users navigate the application. The design also includes an asset library with subtitle templates and sound effects to support clip creation.'
		},
		contribution: null,
		technologies: ['Figma'],
		image: {
			src: '/images/klipify.png', width: 440, height: 956,
			alt: { id: 'Desain layar library aset aplikasi Klipify di Figma', en: 'The Klipify asset library screen designed in Figma' }
		},
		repositoryUrl: null,
		demoUrl: 'https://www.figma.com/proto/DOITYooDinmA5vUlxJI68I/Klipify?node-id=347-5507&t=p4qwGMGSNB88UmQP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=347%3A5507&show-proto-sidebar=1',
		demoLabel: { id: 'Buka prototipe Figma', en: 'Open Figma prototype' }
	},
	{
		id: 'drowsiness-detection',
		title: 'Drowsiness Detection',
		year: null,
		category: { id: 'Machine learning · Deteksi kantuk', en: 'Machine learning · Drowsiness detection' },
		description: {
			id: 'Proyek deteksi kantuk yang mengevaluasi kombinasi fitur mata, mulut, dan gerakan kepala untuk membedakan kondisi terjaga dan mengantuk. Hasil evaluasi membandingkan performa berbagai kombinasi fitur melalui metrik loss, accuracy, precision, recall, dan F1-score. Visualisasi LIME dan SHAP membantu menjelaskan pengaruh fitur terhadap prediksi model, sehingga hasilnya dapat dipahami lebih jauh dari sekadar angka performa.',
			en: 'A drowsiness detection project evaluating combinations of eye, mouth, and head movement features to distinguish alert and drowsy states. Evaluation results compare feature combinations using loss, accuracy, precision, recall, and F1-score. LIME and SHAP visualizations help explain how features influence the model’s predictions, providing insight beyond performance metrics alone.'
		},
		contribution: null,
		technologies: ['Machine Learning', 'LIME', 'SHAP'],
		image: {
			src: '/images/drowsiness-performance.jpeg', width: 943, height: 554,
			alt: { id: 'Grafik evaluasi performa kombinasi fitur Drowsiness Detection', en: 'Performance evaluation of feature combinations for Drowsiness Detection' }
		},
		gallery: [
			{
				src: '/images/drowsiness-performance.jpeg', width: 943, height: 554,
				alt: { id: 'Perbandingan loss, accuracy, precision, recall, dan F1-score pada berbagai kombinasi fitur deteksi kantuk', en: 'Comparison of loss, accuracy, precision, recall, and F1-score across drowsiness detection feature combinations' },
				caption: { id: 'Evaluasi performa model', en: 'Model performance evaluation' }
			},
			{
				src: '/images/drowsiness-lime.jpeg', width: 935, height: 345,
				alt: { id: 'Analisis LIME yang menjelaskan kontribusi fitur pada prediksi alert, drowsy, dan borderline', en: 'LIME analysis showing feature contributions to alert, drowsy, and borderline predictions' },
				caption: { id: 'LIME · Penjelasan tiap prediksi', en: 'LIME · Individual prediction explanations' }
			},
			{
				src: '/images/drowsiness-shap.jpeg', width: 664, height: 362,
				alt: { id: 'Grafik SHAP yang menampilkan dampak fitur mata, mulut, dan gerakan kepala terhadap keluaran model', en: 'SHAP plot showing the impact of eye, mouth, and head movement features on model output' },
				caption: { id: 'SHAP · Pengaruh fitur pada model', en: 'SHAP · Feature impact on the model' }
			}
		],
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
