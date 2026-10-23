# Kevin Taniar — Portfolio

Portofolio satu halaman dengan SvelteKit 2, Svelte 5, TypeScript, dan Tailwind 4. Bahasa Indonesia berada di `/id`, bahasa Inggris di `/en`; `/` menuju `/id`.

Tampilan menggunakan Arial/Helvetica dari perangkat, warna putih, hitam, dan abu-abu, serta navigasi anchor dalam satu halaman. Tidak ada pengambilan font eksternal. Warna asli pada screenshot proyek tetap dipertahankan.

## Menjalankan lokal

Gunakan Node.js 22.19 atau lebih baru.

```sh
npm install
npm run dev
```

## Mengganti materi awal

- `src/lib/data/portfolio.ts`: identitas, foto, pendidikan, proyek, pengalaman, keahlian, email, dan tautan profesional. Teks yang diterjemahkan memiliki pasangan `id` dan `en`.
- `src/lib/data/copy.ts`: judul bagian, navigasi, label, metadata, dan pesan formulir dalam kedua bahasa.
- `static/images/`: gambar yang dirujuk oleh data portofolio. Gunakan gambar terkompresi, isi dimensi aslinya, dan sediakan versi 720/1440 piksel melalui `srcset` untuk proyek.

Daftar proyek mencakup c4rrus, Ucup Menjelajah Nusantara, Cyber Lockdown, Klipify, dan Drowsiness Detection. Rincian kontribusi belum diberikan; isi `contribution` dan tautan proyek saat tersedia. Properti `repositoryUrl` / `demoUrl` yang bernilai `null` menyembunyikan tautan. Label tombol khusus diatur melalui `demoLabel`, sedangkan `year: null` menyembunyikan tahun yang belum diketahui. Daftar `experience` yang kosong menyembunyikan pengalaman.

Drowsiness Detection memiliki tiga gambar pada properti `gallery`: evaluasi performa, LIME, dan SHAP. Galeri mendukung tombol sebelumnya/berikutnya, pilihan gambar, tombol panah keyboard saat kontrol mendapat fokus, serta geser horizontal. Gambar ditampilkan utuh dan dapat dibuka dalam ukuran penuh. Cyber Lockdown memakai properti `screenshots` untuk menampilkan menu utama, eksplorasi fasilitas, dan arsip puzzle dalam susunan tiga gambar. Proyek tanpa kedua properti tersebut menampilkan satu gambar.

Kontribusi yang belum diisi tidak ditampilkan. Tambahkan hanya rincian yang telah dikonfirmasi pemilik portofolio.

### CV PDF

Tambahkan file asli ke `static/cv/kevin-taniar.pdf`. Tombol unduh otomatis muncul setelah Vite memuat ulang atau proyek dibangun kembali. Kedua bahasa menggunakan file PDF yang sama. Saat file belum tersedia, pembuka menampilkan tautan kontak sebagai tindakan kedua.

## Konfigurasi formulir

Isi variabel berikut di `.env` untuk pengiriman melalui Resend:

```dotenv
RESEND_API_KEY=
RESEND_FROM=
RESEND_TO=
```

Gunakan pengirim yang sudah diizinkan pada akun Resend. Variabel ini hanya dibaca di server. Jika konfigurasi belum lengkap, website tetap dapat dibuka dan formulir menampilkan pesan yang sesuai.

Formulir memvalidasi nama, email, dan pesan di server, mempertahankan isian saat gagal, dan hanya menyatakan berhasil jika layanan email mengembalikan ID pesan tanpa error. Dengan JavaScript, formulir dikirim tanpa memuat ulang halaman; pengiriman HTML biasa juga didukung.

## Pemeriksaan

```sh
npm run check
npm test
npm run build
```

Tes memakai `node:test` dan pengirim simulasi; tidak ada email sungguhan yang dikirim. Skenario mencakup validasi, keberhasilan, respons error, pengecualian layanan, dan konfigurasi yang belum lengkap dalam kedua bahasa.

Alamat lama `/about`, `/blog`, `/contact`, dan `/cv` mengarah ke bagian terkait di `/id`. Bahasa yang tidak didukung menghasilkan 404. Pemilihan bahasa mempertahankan bagian yang sedang dibaca. Preferensi pengurangan animasi dihormati.

## Publikasi

Target pekerjaan ini adalah hasil lokal. Adapter saat ini tetap `adapter-auto`; pilih adapter sesuai hosting pada tahap publikasi. Lengkapi materi final, PDF, serta konfigurasi email sebelum dipublikasikan.
