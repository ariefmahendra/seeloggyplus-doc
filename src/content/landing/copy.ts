const en = {
	meta: {
		title: 'Every log, one window',
		description:
			'A fast desktop log viewer for local files and remote servers over SSH. Search with regex and boolean terms, tail in real time, and read embedded JSON and XML formatted in place.',
	},
	hero: {
		version: 'v0.7.0',
		versionNote: 'Free for personal and professional use',
		headline: 'Every log, one window.',
		lede: 'SeeLoggyPlus reads log files from your disk and from servers over SSH — searching, filtering and tailing them in real time, and formatting embedded JSON and XML payloads as you go.',
		download: 'Download for Windows',
		guide: 'Getting Started',
		github: 'View on GitHub',
		meta: ['Windows & Linux', 'Java 21+ or bundled JRE', 'Portable, no installer'],
		captionChips: ['nginx-access.log', 'payment-engine.log'],
		captionHint: 'Ctrl+O opens the file manager',
		alt: 'The SeeLoggyPlus main window with local log files open, a search running, and a formatted JSON payload in the detail panel.',
	},
	facts: [
		{
			title: 'Local and remote',
			text: 'Open files from your disk or over SSH in the same file browser.',
		},
		{
			title: 'Multi-gigabyte files',
			text: 'Background indexing and canvas rendering keep the window responsive.',
		},
		{
			title: 'Real-time tail',
			text: 'Smart Follow streams new lines and pauses when you scroll up.',
		},
		{
			title: 'Verified SSH',
			text: 'Password or key auth with host-key verification and an encrypted keystore.',
		},
	],
	features: {
		title: 'Built for reading logs, not fighting them',
		subtitle: 'Everything a log viewer needs, without anything it does not.',
		items: [
			{
				icon: 'server',
				title: 'Local and remote access',
				text: 'One browser for local drives and SSH servers, with nested groups, favourites and recent files.',
			},
			{
				icon: 'activity',
				title: 'Live tail with Smart Follow',
				text: 'New lines stream in as they are written; scrolling up pauses follow and scrolling back resumes it.',
			},
			{
				icon: 'search',
				title: 'Find in Files',
				text: 'Search a keyword across every file in a remote folder, preview the context, then open or tail the hit.',
			},
			{
				icon: 'filter',
				title: 'Smart search and filtering',
				text: 'Plain text, regex, case-sensitive matching, and uppercase AND, OR, NOT boolean terms.',
			},
			{
				icon: 'braces',
				title: 'Embedded JSON and XML',
				text: 'Structured payloads inside log lines are prettified with syntax highlighting, ready to copy.',
			},
			{
				icon: 'zap',
				title: 'Built for speed',
				text: 'Canvas rendering, background indexing and multi-threaded downloads keep large files smooth.',
			},
			{
				icon: 'palette',
				title: 'Light and dark themes',
				text: 'Islands Light and Dark themes, configurable fonts, tail window size and memory limits.',
			},
			{
				icon: 'shield',
				title: 'Secure SSH',
				text: 'Passwords and keys go through host-key verification; secrets are stored encrypted, only if you ask.',
			},
		],
	},
	carousel: {
		title: 'See it in action',
		subtitle: 'Every screenshot below is the real application.',
		prev: 'Previous screenshot',
		next: 'Next screenshot',
		slides: [
			{
				image: 'file-manager',
				title: 'Unified File Manager',
				text: 'Local drives and SSH servers in one browser, with groups and favourite folders.',
				alt: 'The file manager browsing a local directory with the Locations tree and file table.',
			},
			{
				image: 'remote-browser',
				title: 'Remote browsing over SSH',
				text: 'Browse a server file system, preview a log and download or tail it.',
				alt: 'The file manager connected to a remote server over SSH.',
			},
			{
				image: 'tail',
				title: 'Live tail',
				text: 'Follow a file in real time; the tab shows a live marker while new lines stream in.',
				alt: 'A log file open in tail mode showing the newest lines.',
			},
			{
				image: 'search',
				title: 'Search with results panel',
				text: 'Matches are highlighted in the log and listed with line numbers on the right.',
				alt: 'A search for ERROR with highlighted matches and the results panel.',
			},
			{
				image: 'detail',
				title: 'Detail panel',
				text: 'Pick a line to read it in full; embedded JSON and XML are prettified in place.',
				alt: 'The detail panel showing a prettified JSON payload from a log line.',
			},
			{
				image: 'find-in-files',
				title: 'Find in Files',
				text: 'Scan a whole remote folder for a keyword and open the match with its context.',
				alt: 'Find in Files results across a remote folder with a context preview.',
			},
			{
				image: 'preferences',
				title: 'Preferences',
				text: 'Fonts, theme, tail window size, preview limits, download threads and memory.',
				alt: 'The Preferences dialog showing the General tab.',
			},
			{
				image: 'server-management',
				title: 'Server Management',
				text: 'Define servers, groups, keys and default paths, and test the connection before saving.',
				alt: 'The Server Management dialog listing servers grouped on the left.',
			},
		],
	},
	quickstart: {
		title: 'From download to your first log',
		steps: [
			{
				title: 'Unzip and run',
				text: 'Run launcher.bat on Windows or launcher.sh on Linux. The package with the bundled JRE needs no setup at all.',
			},
			{
				title: 'Open a log',
				text: 'Press Ctrl+O, drop a file onto the window, or reopen one from the recent files panel.',
			},
			{
				title: 'Search and tail',
				text: 'Filter with a keyword or regex, click a match to inspect it, then hit Tail to follow the file live.',
			},
		],
		link: 'Read the full guide',
	},
	download: {
		title: 'Download',
		subtitle: 'Portable packages for Windows and Linux. No installer, no admin rights.',
		packages: [
			{
				name: 'With bundled JRE',
				text: 'Runs as-is, nothing to install. The right choice for most people.',
				cta: 'Download',
			},
			{
				name: 'Without JRE',
				text: 'A smaller download for machines that already have Java 21 or newer.',
				cta: 'Download',
			},
		],
		notes: [
			'Remote logs need an SSH account on the server.',
			'Java 21 or newer is required only for the package without the JRE.',
		],
		primaryCta: 'Download from GitHub',
		changelog: 'See what changed in 0.7.0',
	},
	faq: {
		title: 'Questions',
		items: [
			{
				q: 'Is SeeLoggyPlus free?',
				a: 'Yes — it is free to use for personal and professional purposes.',
			},
			{
				q: 'Does it work offline?',
				a: 'Reading local files works fully offline. Remote logs need your server to be reachable, and update checks only happen when they are enabled.',
			},
			{
				q: 'Where are my SSH credentials stored?',
				a: 'Passwords and key passphrases are only stored when you tick Save password or Save passphrase, and they are kept encrypted in the local keystore inside the data directory. Private key files stay where they are on disk.',
			},
			{
				q: 'How large can log files be?',
				a: 'Multi-gigabyte files are indexed in the background. Tail or filter instead of scrolling everything, close tabs you no longer need, and raise Max Memory in Preferences if a file needs more room.',
			},
			{
				q: 'Which SSH keys are supported?',
				a: 'RSA, ECDSA and Ed25519 keys, including encrypted keys with a passphrase.',
			},
			{
				q: 'How do updates work?',
				a: 'The app checks in the background and can download and stage an update for the next restart. A failed download leaves the current installation untouched.',
			},
		],
	},
};

const id: typeof en = {
	meta: {
		title: 'Semua log, satu jendela',
		description:
			'Log viewer desktop cepat untuk file lokal dan server remote melalui SSH. Cari dengan regex dan boolean, tail secara real time, dan baca payload JSON serta XML terformat langsung di tempat.',
	},
	hero: {
		version: 'v0.7.0',
		versionNote: 'Gratis untuk penggunaan pribadi dan profesional',
		headline: 'Semua log, satu jendela.',
		lede: 'SeeLoggyPlus membaca file log dari disk Anda dan dari server melalui SSH — mencari, memfilter, dan men-tail secara real time, sambil memformat payload JSON dan XML yang tertanam.',
		download: 'Unduh untuk Windows',
		guide: 'Memulai',
		github: 'Lihat di GitHub',
		meta: ['Windows & Linux', 'Java 21+ atau JRE bawaan', 'Portabel, tanpa installer'],
		captionChips: ['nginx-access.log', 'payment-engine.log'],
		captionHint: 'Ctrl+O membuka file manager',
		alt: 'Jendela utama SeeLoggyPlus dengan file log lokal terbuka, pencarian berjalan, dan payload JSON terformat di panel detail.',
	},
	facts: [
		{
			title: 'Lokal dan remote',
			text: 'Buka file dari disk atau melalui SSH di file browser yang sama.',
		},
		{
			title: 'File multi-gigabyte',
			text: 'Indexing latar belakang dan rendering canvas menjaga jendela tetap responsif.',
		},
		{
			title: 'Tail real time',
			text: 'Smart Follow mengalirkan baris baru dan berhenti saat Anda menggulir ke atas.',
		},
		{
			title: 'SSH terverifikasi',
			text: 'Autentikasi password atau key dengan verifikasi host key dan keystore terenkripsi.',
		},
	],
	features: {
		title: 'Dibuat untuk membaca log, bukan melawannya',
		subtitle: 'Semua yang dibutuhkan log viewer, tanpa hal yang tidak perlu.',
		items: [
			{
				icon: 'server',
				title: 'Akses lokal dan remote',
				text: 'Satu browser untuk drive lokal dan server SSH, dengan grup bersarang, favorit, dan file terbaru.',
			},
			{
				icon: 'activity',
				title: 'Live tail dengan Smart Follow',
				text: 'Baris baru mengalir saat ditulis; menggulir ke atas menjeda follow dan menggulir kembali melanjutkannya.',
			},
			{
				icon: 'search',
				title: 'Find in Files',
				text: 'Cari kata kunci di seluruh file dalam folder remote, lihat konteksnya, lalu buka atau tail hasilnya.',
			},
			{
				icon: 'filter',
				title: 'Pencarian dan filter pintar',
				text: 'Teks biasa, regex, pencocokan huruf besar-kecil, dan istilah boolean AND, OR, NOT huruf kapital.',
			},
			{
				icon: 'braces',
				title: 'JSON dan XML tertanam',
				text: 'Payload terstruktur di dalam baris log diformat dengan syntax highlighting, siap disalin.',
			},
			{
				icon: 'zap',
				title: 'Dibuat untuk kecepatan',
				text: 'Rendering canvas, indexing latar belakang, dan unduhan multi-thread menjaga file besar tetap mulus.',
			},
			{
				icon: 'palette',
				title: 'Tema terang dan gelap',
				text: 'Tema Islands Light dan Dark, font yang bisa diatur, ukuran tail window, dan batas memori.',
			},
			{
				icon: 'shield',
				title: 'SSH yang aman',
				text: 'Password dan key melewati verifikasi host key; kredensial disimpan terenkripsi, hanya jika Anda minta.',
			},
		],
	},
	carousel: {
		title: 'Lihat langsung',
		subtitle: 'Semua tangkapan layar di bawah adalah aplikasi aslinya.',
		prev: 'Tangkapan layar sebelumnya',
		next: 'Tangkapan layar berikutnya',
		slides: [
			{
				image: 'file-manager',
				title: 'File Manager Terpadu',
				text: 'Drive lokal dan server SSH dalam satu browser, dengan grup dan folder favorit.',
				alt: 'File manager menelusuri direktori lokal dengan pohon Locations dan tabel file.',
			},
			{
				image: 'remote-browser',
				title: 'Menelusuri remote via SSH',
				text: 'Telusuri sistem file server, pratinjau log, lalu unduh atau tail file tersebut.',
				alt: 'File manager terhubung ke server remote melalui SSH.',
			},
			{
				image: 'tail',
				title: 'Live tail',
				text: 'Ikuti file secara real time; tab menampilkan penanda live sementara baris baru mengalir.',
				alt: 'File log terbuka dalam mode tail menampilkan baris-baris terbaru.',
			},
			{
				image: 'search',
				title: 'Pencarian dengan panel hasil',
				text: 'Kecocokan disorot di log dan didaftarkan dengan nomor baris di sisi kanan.',
				alt: 'Pencarian ERROR dengan sorotan kecocokan dan panel hasil.',
			},
			{
				image: 'detail',
				title: 'Panel Detail',
				text: 'Pilih satu baris untuk membacanya utuh; JSON dan XML tertanam diformat langsung.',
				alt: 'Panel Detail menampilkan payload JSON yang diformat dari sebuah baris log.',
			},
			{
				image: 'find-in-files',
				title: 'Find in Files',
				text: 'Pindai seluruh folder remote untuk kata kunci dan buka kecocokan beserta konteksnya.',
				alt: 'Hasil Find in Files di folder remote dengan pratinjau konteks.',
			},
			{
				image: 'preferences',
				title: 'Preferensi',
				text: 'Font, tema, ukuran tail window, batas pratinjau, thread unduhan, dan memori.',
				alt: 'Dialog Preferensi menampilkan tab General.',
			},
			{
				image: 'server-management',
				title: 'Manajemen Server',
				text: 'Atur server, grup, key, dan default path, lalu uji koneksi sebelum menyimpan.',
				alt: 'Dialog Manajemen Server menampilkan daftar server yang dikelompokkan di kiri.',
			},
		],
	},
	quickstart: {
		title: 'Dari unduhan ke log pertama Anda',
		steps: [
			{
				title: 'Ekstrak dan jalankan',
				text: 'Jalankan launcher.bat di Windows atau launcher.sh di Linux. Paket dengan JRE bawaan tidak perlu setup sama sekali.',
			},
			{
				title: 'Buka log',
				text: 'Tekan Ctrl+O, jatuhkan file ke jendela, atau buka kembali dari panel file terbaru.',
			},
			{
				title: 'Cari dan tail',
				text: 'Filter dengan kata kunci atau regex, klik kecocokan untuk memeriksanya, lalu tekan Tail untuk mengikuti file secara live.',
			},
		],
		link: 'Baca panduan lengkap',
	},
	download: {
		title: 'Unduh',
		subtitle: 'Paket portabel untuk Windows dan Linux. Tanpa installer, tanpa hak admin.',
		packages: [
			{
				name: 'Dengan JRE bawaan',
				text: 'Langsung jalan, tanpa pemasangan. Pilihan tepat untuk sebagian besar pengguna.',
				cta: 'Unduh',
			},
			{
				name: 'Tanpa JRE',
				text: 'Unduhan lebih kecil untuk mesin yang sudah memiliki Java 21 atau lebih baru.',
				cta: 'Unduh',
			},
		],
		notes: [
			'Log remote membutuhkan akun SSH di server.',
			'Java 21 atau lebih baru hanya diperlukan untuk paket tanpa JRE.',
		],
		primaryCta: 'Unduh dari GitHub',
		changelog: 'Lihat perubahan di 0.7.0',
	},
	faq: {
		title: 'Pertanyaan',
		items: [
			{
				q: 'Apakah SeeLoggyPlus gratis?',
				a: 'Ya — gratis untuk penggunaan pribadi maupun profesional.',
			},
			{
				q: 'Apakah bisa dipakai offline?',
				a: 'Membaca file lokal sepenuhnya offline. Log remote memerlukan server yang dapat dijangkau, dan pemeriksaan pembaruan hanya berjalan bila diaktifkan.',
			},
			{
				q: 'Di mana kredensial SSH saya disimpan?',
				a: 'Password dan passphrase key hanya disimpan saat Anda mencentang Save password atau Save passphrase, lalu disimpan terenkripsi di keystore lokal dalam direktori data. File private key tetap berada di disk Anda.',
			},
			{
				q: 'Seberapa besar file log yang didukung?',
				a: 'File multi-gigabyte diindeks di latar belakang. Gunakan Tail atau filter alih-alih menggulir semuanya, tutup tab yang tidak perlu, dan naikkan Max Memory di Preferensi bila file butuh ruang lebih.',
			},
			{
				q: 'Key SSH apa saja yang didukung?',
				a: 'Key RSA, ECDSA, dan Ed25519, termasuk key terenkripsi dengan passphrase.',
			},
			{
				q: 'Bagaimana pembaruannya bekerja?',
				a: 'Aplikasi memeriksa di latar belakang dan dapat mengunduh serta menyiapkan pembaruan untuk restart berikutnya. Unduhan yang gagal tidak mengubah instalasi Anda.',
			},
		],
	},
};

export const landingCopy = { en, id };

export const releasesUrl = 'https://github.com/ariefmahendra/seeloggyplus/releases/latest';
export const repositoryUrl = 'https://github.com/ariefmahendra/seeloggyplus';
