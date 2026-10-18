const en = {
	header: {
		navigation: 'Product navigation',
		menu: 'Open navigation',
		features: 'Features',
		screenshots: 'Screenshots',
		documentation: 'Documentation',
		download: 'Download',
	},
	meta: {
		title: 'Every log, one window',
		description:
			'A fast desktop log viewer for files on your machine and logs on servers, over SSH. Search with plain text or regex, tail in real time, and read the JSON and XML that log lines carry.',
	},
	hero: {
		headline: ['Every log,', 'one window.'],
		sentence:
			'A fast desktop log viewer for files on your machine and logs on servers, over SSH.',
		button: 'Download for Windows / Linux',
		link: 'Getting started',
		note: 'Free to use. Portable on Windows and Linux, with or without a bundled Java runtime.',
		alt: 'The SeeLoggyPlus main window with local log files open, a search running, and a formatted JSON payload in the detail panel.',
	},
	features: {
		heading: 'What it does',
		modules: [
			{
				heading: 'Two places, one browser.',
				paragraphs: [
					'Browse local files and SSH servers in one place, with groups, favourites and recent files that remember whether you were reading or tailing.',
				],
				image: 'file-manager',
				alt: 'The Locations panel listing local drives and servers in groups.',
			},
			{
				heading: 'Search stops being scrolling.',
				paragraphs: [
					'Filter with text, regex, or uppercase AND, OR and NOT. Matches are highlighted and listed with line numbers; F3 takes you to the next hit.',
				],
				image: 'search',
				alt: 'Search results listed with line numbers next to the highlighted log.',
			},
			{
				heading: 'Find the error, not the file.',
				paragraphs: [
					'Search every file under a remote folder, preview the context, then open the match or tail its source file.',
				],
				image: 'find-in-files',
				alt: 'Matches across a remote folder with a context preview.',
			},
			{
				heading: 'A line opens into its payload.',
				paragraphs: [
					'Click a line to read it in full, with embedded JSON and XML formatted and syntax highlighted. Copy takes exactly what you see.',
				],
				image: 'detail',
				alt: 'A log line opened into a formatted JSON payload.',
			},
			{
				heading: 'Secure SSH connections.',
				paragraphs: [
					'Save passwords and key passphrases encrypted only when you choose. Host keys are checked, and changed keys are refused with a clear explanation.',
				],
				image: 'server-management',
				alt: 'The server list with groups and connection details.',
			},
		],
	},
	showcase: {
		headingRest: 'Logs at rest.',
		headingMotion: 'Logs in motion.',
		sentence:
			'Try a simulation of live tail with sample log entries. Switch it on to see new lines stream in.',
		switchLabel: 'Live tail',
		statusOn: 'Tailing payment-engine.log',
		statusOff: 'payment-engine.log',
	},
	gallery: {
		heading: 'A tour of the app',
		subtitle: 'Eight screens from the real application. Nothing staged.',
		prev: 'Previous screenshot',
		next: 'Next screenshot',
		slides: [
			{
				image: 'file-manager',
				title: 'Unified File Manager',
				text: 'Local drives and SSH servers in one browser.',
				alt: 'The file manager browsing a local directory with the Locations tree and file table.',
			},
			{
				image: 'remote-browser',
				title: 'Remote browsing',
				text: 'Browse a server over SSH, then preview, download or tail a log file.',
				alt: 'The file manager connected to a remote server over SSH.',
			},
			{
				image: 'tail',
				title: 'Live tail',
				text: 'New lines stream in with the tab following the newest entries.',
				alt: 'A log file open in tail mode showing the newest lines.',
			},
			{
				image: 'search',
				title: 'Search and results',
				text: 'Every hit is highlighted, counted and listed with its line number.',
				alt: 'A search with highlighted matches and the results panel.',
			},
			{
				image: 'detail',
				title: 'Detail panel',
				text: 'The selected line opens in full, with JSON and XML formatted in place.',
				alt: 'The detail panel showing a prettified JSON payload.',
			},
			{
				image: 'find-in-files',
				title: 'Find in Files',
				text: 'Search every file under a remote folder, with context around each hit.',
				alt: 'Find in Files results across a remote folder with a context preview.',
			},
			{
				image: 'preferences',
				title: 'Preferences',
				text: 'Fonts, theme, tail window, download threads and memory limits.',
				alt: 'The Preferences dialog showing the General tab.',
			},
			{
				image: 'server-management',
				title: 'Server Management',
				text: 'Servers, groups and keys, with Test Connection before you save.',
				alt: 'The Server Management dialog listing servers grouped on the left.',
			},
		],
	},
	journey: {
		heading: 'How a line travels',
		fields: [
			{
				clause: 'First it is written.',
				state: 'raw',
			},
			{
				clause: 'Then it is found.',
				state: 'found',
			},
			{
				clause: 'Then it is read.',
				state: 'read',
			},
			{
				clause: 'Then it is copied.',
				state: 'copied',
			},
		],
		copiedLabel: 'Copied to clipboard',
		matchLabel: 'match 3 of 12',
	},
	faq: {
		heading: 'Questions',
		items: [
			{
				q: 'Is it free?',
				a: 'Yes. SeeLoggyPlus is free to use for personal and professional work.',
			},
			{
				q: 'Does it work offline?',
				a: 'Reading local files works with no network at all. Remote logs need your server to be reachable, and update checks only run when they are enabled.',
			},
			{
				q: 'Where are credentials stored?',
				a: 'Passwords and key passphrases are stored only when you tick Save, encrypted in a keystore inside the data directory. Private key files stay where they are on disk.',
			},
			{
				q: 'How large can files be?',
				a: 'Multi-gigabyte logs are indexed in the background. Tail or filter instead of scrolling everything, and raise Max memory if a file needs more room.',
			},
			{
				q: 'Which keys are supported?',
				a: 'RSA, ECDSA and Ed25519, including encrypted keys with a passphrase.',
			},
			{
				q: 'How do updates work?',
				a: 'The app checks in the background, stages a verified package, and installs it on the next restart. A failed download leaves your installation untouched.',
			},
		],
	},
	cta: {
		statement: 'Free, portable, and open on your desktop in two clicks.',
		button: 'Download for Windows / Linux',
		note: 'Also for Linux, with or without a bundled Java runtime.',
		guide: 'Getting started',
		changelog: 'Changelog',
	},
};

const id: typeof en = {
	header: {
		navigation: 'Navigasi produk',
		menu: 'Buka navigasi',
		features: 'Fitur',
		screenshots: 'Screenshot',
		documentation: 'Dokumentasi',
		download: 'Unduh',
	},
	meta: {
		title: 'Semua log, satu jendela',
		description:
			'Log viewer desktop yang cepat untuk file di komputer Anda dan log di server, melalui SSH. Cari dengan teks biasa atau regex, tail secara real time, dan baca JSON serta XML yang dibawa baris log.',
	},
	hero: {
		headline: ['Semua log,', 'satu jendela.'],
		sentence:
			'Log viewer desktop yang cepat untuk file di komputer Anda dan log di server, melalui SSH.',
		button: 'Unduh untuk Windows / Linux',
		link: 'Mulai',
		note: 'Gratis. Portabel di Windows dan Linux, dengan atau tanpa Java bawaan.',
		alt: 'Jendela utama SeeLoggyPlus dengan file log lokal terbuka, pencarian berjalan, dan payload JSON terformat di panel detail.',
	},
	features: {
		heading: 'Yang bisa dilakukannya',
		modules: [
			{
				heading: 'Dua tempat, satu penjelajah.',
				paragraphs: [
					'Telusuri file lokal dan server SSH dari satu tempat, lengkap dengan grup, favorit, dan file terbaru yang mengingat mode baca atau tail.',
				],
				image: 'file-manager',
				alt: 'Panel Locations menampilkan drive lokal dan server dalam grup.',
			},
			{
				heading: 'Temukan baris tanpa terus menggulir.',
				paragraphs: [
					'Filter dengan teks, regex, atau AND, OR dan NOT huruf kapital. Kecocokan disorot dan didaftarkan beserta nomor barisnya; tekan F3 untuk berpindah ke hasil berikutnya.',
				],
				image: 'search',
				alt: 'Hasil pencarian dengan nomor baris di samping log yang disorot.',
			},
			{
				heading: 'Temukan error, bukan filenya.',
				paragraphs: [
					'Cari di seluruh file dalam folder remote, lihat konteksnya, lalu buka kecocokan atau mulai tail file asalnya.',
				],
				image: 'find-in-files',
				alt: 'Kecocokan di folder remote dengan pratinjau konteks.',
			},
			{
				heading: 'Baca JSON dan XML dengan jelas.',
				paragraphs: [
					'Klik baris untuk membacanya utuh, dengan JSON dan XML terformat serta syntax highlighting. Copy menyalin persis yang Anda lihat.',
				],
				image: 'detail',
				alt: 'Baris log yang terbuka menjadi payload JSON terformat.',
			},
			{
				heading: 'Koneksi SSH yang aman.',
				paragraphs: [
					'Simpan password dan passphrase key secara terenkripsi hanya jika Anda memilihnya. Host key diperiksa, dan perubahan key ditolak dengan alasan yang jelas.',
				],
				image: 'server-management',
				alt: 'Daftar server dengan grup dan detail koneksinya.',
			},
		],
	},
	showcase: {
		headingRest: 'Log diam.',
		headingMotion: 'Log bergerak.',
		sentence:
			'Coba simulasi live tail dengan contoh baris log. Nyalakan untuk melihat baris baru mengalir masuk.',
		switchLabel: 'Live tail',
		statusOn: 'Men-tail payment-engine.log',
		statusOff: 'payment-engine.log',
	},
	gallery: {
		heading: 'Tur aplikasi',
		subtitle: 'Delapan layar dari aplikasi aslinya. Tanpa rekayasa.',
		prev: 'Tangkapan layar sebelumnya',
		next: 'Tangkapan layar berikutnya',
		slides: [
			{
				image: 'file-manager',
				title: 'File Manager Terpadu',
				text: 'Drive lokal dan server SSH dalam satu browser.',
				alt: 'File manager menelusuri direktori lokal dengan pohon Locations dan tabel file.',
			},
			{
				image: 'remote-browser',
				title: 'Menelusuri remote',
				text: 'Telusuri server melalui SSH, lalu pratinjau, unduh, atau tail file log.',
				alt: 'File manager terhubung ke server remote melalui SSH.',
			},
			{
				image: 'tail',
				title: 'Live tail',
				text: 'Baris baru mengalir masuk dan tab mengikuti entri terbaru.',
				alt: 'File log terbuka dalam mode tail menampilkan baris-baris terbaru.',
			},
			{
				image: 'search',
				title: 'Pencarian dan hasil',
				text: 'Setiap kecocokan disorot, dihitung, dan didaftarkan dengan nomor barisnya.',
				alt: 'Pencarian dengan sorotan kecocokan dan panel hasil.',
			},
			{
				image: 'detail',
				title: 'Panel Detail',
				text: 'Baris terpilih terbuka utuh, dengan JSON dan XML terformat langsung.',
				alt: 'Panel Detail menampilkan payload JSON yang diformat.',
			},
			{
				image: 'find-in-files',
				title: 'Find in Files',
				text: 'Cari di seluruh file dalam folder remote, lengkap dengan konteks tiap kecocokan.',
				alt: 'Hasil Find in Files di folder remote dengan pratinjau konteks.',
			},
			{
				image: 'preferences',
				title: 'Preferensi',
				text: 'Font, tema, tail window, thread unduhan, dan batas memori.',
				alt: 'Dialog Preferensi menampilkan tab General.',
			},
			{
				image: 'server-management',
				title: 'Manajemen Server',
				text: 'Server, grup, dan key, dengan Test Connection sebelum menyimpan.',
				alt: 'Dialog Manajemen Server menampilkan daftar server yang dikelompokkan di kiri.',
			},
		],
	},
	journey: {
		heading: 'Perjalanan satu baris',
		fields: [
			{
				clause: 'Pertama, ia ditulis.',
				state: 'raw',
			},
			{
				clause: 'Lalu ia ditemukan.',
				state: 'found',
			},
			{
				clause: 'Lalu ia dibaca.',
				state: 'read',
			},
			{
				clause: 'Lalu ia disalin.',
				state: 'copied',
			},
		],
		copiedLabel: 'Tersalin ke clipboard',
		matchLabel: 'kecocokan 3 dari 12',
	},
	faq: {
		heading: 'Pertanyaan',
		items: [
			{
				q: 'Apakah gratis?',
				a: 'Ya. SeeLoggyPlus gratis untuk kebutuhan pribadi maupun profesional.',
			},
			{
				q: 'Apakah bisa offline?',
				a: 'Membaca file lokal sama sekali tidak butuh jaringan. Log remote memerlukan server yang dapat dijangkau, dan pemeriksaan pembaruan hanya berjalan bila diaktifkan.',
			},
			{
				q: 'Di mana kredensial disimpan?',
				a: 'Password dan passphrase key disimpan hanya saat Anda mencentang Save, terenkripsi di keystore dalam direktori data. File private key tetap berada di disk Anda.',
			},
			{
				q: 'Seberapa besar filenya?',
				a: 'Log multi-gigabyte diindeks di latar belakang. Gunakan tail atau filter alih-alih menggulir semuanya, dan naikkan Max memory bila file butuh ruang lebih.',
			},
			{
				q: 'Key apa saja yang didukung?',
				a: 'RSA, ECDSA dan Ed25519, termasuk key terenkripsi dengan passphrase.',
			},
			{
				q: 'Bagaimana pembaruannya?',
				a: 'Aplikasi memeriksa di latar belakang, menyiapkan paket yang terverifikasi, lalu memasangnya saat restart berikutnya. Unduhan yang gagal tidak mengubah instalasi Anda.',
			},
		],
	},
	cta: {
		statement: 'Gratis, portabel, dan terbuka di desktop Anda dalam dua klik.',
		button: 'Unduh untuk Windows / Linux',
		note: 'Juga untuk Linux, dengan atau tanpa Java bawaan.',
		guide: 'Mulai',
		changelog: 'Changelog',
	},
};

export const landingCopy = { en, id };

export const releasesUrl = 'https://github.com/ariefmahendra/seeloggyplus/releases/latest';
export const repositoryUrl = 'https://github.com/ariefmahendra/seeloggyplus';

export const logLines = [
	'2026-10-17 13:04:15,945 INFO  [http-nio-8080-exec-5] c.a.p.PaymentService - Handling request POST /v1/payments/authorize',
	'2026-10-17 13:04:15,982 INFO  [http-nio-8080-exec-7] c.a.p.Gateway - Payment authorization received for order ORD-88213',
	'2026-10-17 13:04:16,105 TRACE [http-nio-8080-exec-7] c.a.p.PaymentService - Connection pool in-use 18/50, waiting 0 ms',
	'2026-10-17 13:04:16,213 WARN  [http-nio-8080-exec-2] c.a.p.Gateway - Upstream gateway latency 812 ms exceeds the 800 ms budget',
	'2026-10-17 13:04:16,952 ERROR [http-nio-8080-exec-1] c.a.p.PaymentService - Payment authorization failed for order ORD-88213: upstream timeout',
	'2026-10-17 13:04:16,953 ERROR [http-nio-8080-exec-1] c.a.p.PaymentService - java.lang.IllegalStateException: upstream timeout',
	'2026-10-17 13:04:17,004 INFO  [http-nio-8080-exec-3] c.a.p.Telemetry - Metrics flushed to collector (12 series)',
	'2026-10-17 13:04:17,118 DEBUG [http-nio-8080-exec-4] c.a.p.Gateway - Retrying webhook delivery for order ORD-88213 attempt 2/3',
	'2026-10-17 13:04:17,209 INFO  [http-nio-8080-exec-6] c.a.p.PaymentService - Emitted audit event payment.authorized id EVT-90231',
	'2026-10-17 13:04:17,331 WARN  [http-nio-8080-exec-8] c.a.p.Gateway - Cache hit for tenant TNT-4410 (ttl 300s)',
	'2026-10-17 13:04:17,447 DEBUG [http-nio-8080-exec-5] c.a.p.Telemetry - Upstream gateway latency 780 ms',
	'2026-10-17 13:04:17,556 ERROR [http-nio-8080-exec-2] c.a.p.Gateway - Payment authorization failed for order ORD-88213: retry budget exhausted',
];

export const journeyPayload = `{
  "timestamp": "2026-10-17T13:04:16.952+0200",
  "level": "ERROR",
  "service": "payment-engine",
  "order": "ORD-88213",
  "error": { "type": "UpstreamTimeout", "retryable": true }
}`;
