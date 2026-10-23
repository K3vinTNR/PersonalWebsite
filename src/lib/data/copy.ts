import type { Locale } from '$lib/types';

export const copy = {
	id: {
		meta: { title: 'Kevin Taniar — Portofolio Pengembang', description: 'Kenali Kevin Taniar, mahasiswa Informatika dan pengembang perangkat lunak. Jelajahi proyek, keahlian, dan kesempatan untuk berkolaborasi.' },
		skip: 'Langsung ke konten',
		nav: { label: 'Navigasi utama', projects: 'Proyek', about: 'Tentang', skills: 'Keahlian', contact: 'Kontak', menu: 'Menu', close: 'Tutup menu', language: 'Read in English' },
		hero: {
			eyebrow: 'Mahasiswa Informatika',
			intro: 'Saya membuat aplikasi web, game, dan bereksperimen dengan machine learning. Ini beberapa proyek yang saya kerjakan selama belajar Informatika di UMN.',
			projects: 'Lihat proyek', cv: 'Unduh CV', contact: 'Hubungi saya',
			availability: 'Terbuka untuk kesempatan magang',
			scroll: 'Web, game, dan eksperimen lainnya.'
		},
		projects: {
			eyebrow: '01 / Proyek', title: 'Yang saya kerjakan.',
			intro: 'Dari aplikasi rental mobil sampai puzzle keamanan siber.',
			contribution: 'Kontribusi saya', pending: 'Rincian kontribusi dan dokumentasi proyek sedang dilengkapi.',
			repository: 'Lihat kode', demo: 'Buka demo', github: 'Jelajahi GitHub', number: 'PROYEK',
			gallery: { label: 'Galeri gambar', carousel: 'karusel', slide: 'slide', previous: 'Gambar sebelumnya', next: 'Gambar berikutnya', choose: 'Pilih gambar', show: 'Tampilkan gambar', fullSize: 'Buka gambar ukuran penuh' }
		},
		about: {
			eyebrow: '02 / Tentang', title: 'Di balik proyeknya.',
			education: 'Pendidikan', experience: 'Pengalaman', focus: 'Fokus', focusText: 'Pengembangan web & rekayasa perangkat lunak',
			draft: 'Materi awal — profil dan proyek akan diperbarui dengan konten final.', photoAlt: 'Foto profil Kevin Taniar'
		},
		skills: { eyebrow: '03 / Keahlian', title: 'Alat yang saya gunakan.', intro: 'Teknologi yang saya pakai dan bidang yang sedang saya pelajari.' },
		contact: {
			eyebrow: '04 / Kontak', title: 'Ada yang ingin\ndikerjakan bersama?',
			intro: 'Punya kesempatan magang, proyek menarik, atau sekadar ingin berkenalan? Saya senang mendengarnya.',
			name: 'Nama', email: 'Email', message: 'Pesan', namePlaceholder: 'Nama kamu', emailPlaceholder: 'kamu@contoh.com', messagePlaceholder: 'Ceritakan sedikit tentang kesempatan atau idemu…',
			submit: 'Kirim pesan', sending: 'Mengirim…', note: 'Pesan dikirim langsung ke email saya.',
			alternative: 'Atau hubungi langsung', networkError: 'Pesan belum terkirim. Periksa koneksi dan coba lagi, atau hubungi saya melalui email.'
		},
		footer: { back: 'Kembali ke atas', credit: 'Portofolio pribadi' },
		form: {
			required: 'Bagian ini perlu diisi.', invalidEmail: 'Masukkan alamat email yang valid.',
			nameLength: 'Gunakan nama hingga 100 karakter.', emailLength: 'Gunakan email hingga 254 karakter.', messageLength: 'Gunakan pesan hingga 5.000 karakter.',
			invalid: 'Periksa kembali bagian yang ditandai.', success: 'Terima kasih! Pesanmu sudah terkirim.',
			unavailable: 'Pengiriman pesan belum tersedia. Silakan hubungi saya melalui email.', failure: 'Pesan belum terkirim. Coba lagi nanti atau hubungi saya melalui email.'
		}
	},
	en: {
		meta: { title: 'Kevin Taniar — Developer Portfolio', description: 'Meet Kevin Taniar, an Informatics student and software developer. Explore projects, skills, and opportunities to work together.' },
		skip: 'Skip to content',
		nav: { label: 'Main navigation', projects: 'Projects', about: 'About', skills: 'Skills', contact: 'Contact', menu: 'Menu', close: 'Close menu', language: 'Baca dalam Bahasa Indonesia' },
		hero: {
			eyebrow: 'Informatics student',
			intro: 'I build web applications, make games, and experiment with machine learning. These are some of the projects I’ve worked on while studying Informatics at UMN.',
			projects: 'View projects', cv: 'Download CV', contact: 'Get in touch',
			availability: 'Open to internship opportunities',
			scroll: 'Web, games, and other experiments.'
		},
		projects: {
			eyebrow: '01 / Projects', title: 'What I’ve been building.',
			intro: 'From car rental applications to cybersecurity puzzles.',
			contribution: 'My contribution', pending: 'Contribution details and project documentation are being prepared.',
			repository: 'View code', demo: 'Live demo', github: 'Explore GitHub', number: 'PROJECT',
			gallery: { label: 'Image gallery', carousel: 'carousel', slide: 'slide', previous: 'Previous image', next: 'Next image', choose: 'Choose an image', show: 'Show image', fullSize: 'Open full-size image' }
		},
		about: {
			eyebrow: '02 / About', title: 'Behind the projects.',
			education: 'Education', experience: 'Experience', focus: 'Focus', focusText: 'Web development & software engineering',
			draft: 'Initial content — profile and projects will be updated with final material.', photoAlt: 'Portrait of Kevin Taniar'
		},
		skills: { eyebrow: '03 / Skills', title: 'Tools I work with.', intro: 'Technologies I use and subjects I’m learning about.' },
		contact: {
			eyebrow: '04 / Contact', title: 'Have something\nin mind?',
			intro: 'An internship opportunity, an interesting project, or just a hello? I’d love to hear from you.',
			name: 'Name', email: 'Email', message: 'Message', namePlaceholder: 'Your name', emailPlaceholder: 'you@example.com', messagePlaceholder: 'Tell me a little about your opportunity or idea…',
			submit: 'Send message', sending: 'Sending…', note: 'Your message goes straight to my inbox.',
			alternative: 'Or reach out directly', networkError: 'Your message wasn’t sent. Check your connection and try again, or reach me by email.'
		},
		footer: { back: 'Back to top', credit: 'Personal portfolio' },
		form: {
			required: 'Please fill in this field.', invalidEmail: 'Enter a valid email address.',
			nameLength: 'Keep your name within 100 characters.', emailLength: 'Keep your email within 254 characters.', messageLength: 'Keep your message within 5,000 characters.',
			invalid: 'Please check the highlighted fields.', success: 'Thank you! Your message has been sent.',
			unavailable: 'Message delivery isn’t available yet. Please reach me by email.', failure: 'Your message wasn’t sent. Please try again later or reach me by email.'
		}
	}
} satisfies Record<Locale, unknown>;

export type PortfolioCopy = (typeof copy)['id'];
