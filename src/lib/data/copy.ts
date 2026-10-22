import type { Locale } from '$lib/types';

export const copy = {
	id: {
		meta: { title: 'Kevin Taniar — Portofolio Pengembang', description: 'Kenali Kevin Taniar, mahasiswa Informatika dan pengembang perangkat lunak. Jelajahi proyek, keahlian, dan kesempatan untuk berkolaborasi.' },
		skip: 'Langsung ke konten',
		nav: { label: 'Navigasi utama', projects: 'Proyek', about: 'Tentang', skills: 'Keahlian', contact: 'Kontak', menu: 'Menu', close: 'Tutup menu', language: 'Read in English' },
		hero: {
			eyebrow: 'Portofolio pengembangan perangkat lunak',
			lineOne: 'Ide yang sederhana.',
			lineTwo: 'Dibangun dengan',
			emphasis: 'sepenuh perhatian.',
			intro: 'Saya Kevin Taniar. Belajar, membangun, dan menyelesaikan masalah melalui pengembangan perangkat lunak.',
			projects: 'Lihat proyek', cv: 'Unduh CV', contact: 'Mari berkenalan',
			asideLabel: 'LANGKAH SELANJUTNYA', asideTitle: 'Belajar lewat karya.', asideText: 'Mencari ruang untuk berkembang dan berkontribusi melalui kesempatan magang.',
			scroll: 'Gulir untuk mengenal lebih jauh'
		},
		projects: {
			eyebrow: 'Dari ide menjadi pengalaman', title: 'Beberapa hal yang saya bangun.',
			intro: 'Pilihan proyek untuk mengeksplorasi teknologi, melatih pemecahan masalah, dan belajar dari prosesnya.',
			contribution: 'Kontribusi saya', pending: 'Rincian kontribusi dan dokumentasi proyek sedang dilengkapi.',
			repository: 'Lihat kode', demo: 'Buka demo', github: 'Jelajahi GitHub', number: 'PROYEK'
		},
		about: {
			eyebrow: 'Sedikit tentang saya', title: 'Rasa ingin tahu,\nlalu sebuah langkah kecil.',
			education: 'Pendidikan', experience: 'Pengalaman', focus: 'Fokus', focusText: 'Pengembangan web & rekayasa perangkat lunak',
			draft: 'Materi awal — profil dan proyek akan diperbarui dengan konten final.', photoAlt: 'Foto profil Kevin Taniar'
		},
		skills: { eyebrow: 'Bekal untuk terus membangun', title: 'Teknologi & ketertarikan.', intro: 'Alat yang saya gunakan dan bidang yang ingin saya pelajari lebih jauh.' },
		contact: {
			eyebrow: 'Percakapan berikutnya', title: 'Mari mulai\nsebuah percakapan.',
			intro: 'Punya kesempatan magang, proyek menarik, atau sekadar ingin berkenalan? Saya senang mendengarnya.',
			name: 'Nama', email: 'Email', message: 'Pesan', namePlaceholder: 'Nama kamu', emailPlaceholder: 'kamu@contoh.com', messagePlaceholder: 'Ceritakan sedikit tentang kesempatan atau idemu…',
			submit: 'Kirim pesan', sending: 'Mengirim…', note: 'Pesan dikirim langsung ke email saya.',
			alternative: 'Atau hubungi langsung', networkError: 'Pesan belum terkirim. Periksa koneksi dan coba lagi, atau hubungi saya melalui email.'
		},
		footer: { back: 'Kembali ke atas', credit: 'Dibuat dengan perhatian.' },
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
			eyebrow: 'A software development portfolio', lineOne: 'Simple ideas.', lineTwo: 'Built with', emphasis: 'thoughtful intention.',
			intro: 'I’m Kevin Taniar. Learning, building, and solving problems through software development.',
			projects: 'Explore projects', cv: 'Download CV', contact: 'Let’s connect',
			asideLabel: 'THE NEXT CHAPTER', asideTitle: 'Learning by making.', asideText: 'Looking for room to grow and contribute through an internship opportunity.',
			scroll: 'Scroll to get to know me'
		},
		projects: {
			eyebrow: 'From an idea to an experience', title: 'A few things I’ve built.',
			intro: 'Selected projects exploring technology, practicing problem-solving, and learning along the way.',
			contribution: 'My contribution', pending: 'Contribution details and project documentation are being prepared.',
			repository: 'View code', demo: 'Live demo', github: 'Explore GitHub', number: 'PROJECT'
		},
		about: {
			eyebrow: 'A little about me', title: 'A little curiosity.\nA small step forward.',
			education: 'Education', experience: 'Experience', focus: 'Focus', focusText: 'Web development & software engineering',
			draft: 'Initial content — profile and projects will be updated with final material.', photoAlt: 'Portrait of Kevin Taniar'
		},
		skills: { eyebrow: 'Always a work in progress', title: 'Tools & curiosities.', intro: 'Technologies I work with and subjects I’m curious to explore.' },
		contact: {
			eyebrow: 'The next conversation', title: 'Let’s start\na conversation.',
			intro: 'An internship opportunity, an interesting project, or just a hello? I’d love to hear from you.',
			name: 'Name', email: 'Email', message: 'Message', namePlaceholder: 'Your name', emailPlaceholder: 'you@example.com', messagePlaceholder: 'Tell me a little about your opportunity or idea…',
			submit: 'Send message', sending: 'Sending…', note: 'Your message goes straight to my inbox.',
			alternative: 'Or reach out directly', networkError: 'Your message wasn’t sent. Check your connection and try again, or reach me by email.'
		},
		footer: { back: 'Back to top', credit: 'Made with care.' },
		form: {
			required: 'Please fill in this field.', invalidEmail: 'Enter a valid email address.',
			nameLength: 'Keep your name within 100 characters.', emailLength: 'Keep your email within 254 characters.', messageLength: 'Keep your message within 5,000 characters.',
			invalid: 'Please check the highlighted fields.', success: 'Thank you! Your message has been sent.',
			unavailable: 'Message delivery isn’t available yet. Please reach me by email.', failure: 'Your message wasn’t sent. Please try again later or reach me by email.'
		}
	}
} satisfies Record<Locale, unknown>;

export type PortfolioCopy = (typeof copy)['id'];
