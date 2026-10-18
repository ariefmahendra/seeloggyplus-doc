const en = {
	meta: {
		title: 'Every log, one window',
		description:
			'A fast desktop log viewer for files on your machine and logs on servers, over SSH. Search with plain text or regex, tail in real time, and read the JSON and XML that log lines carry.',
	},
	hero: {
		headline: ['Every log,', 'one window.'],
		sentence:
			'A fast desktop log viewer for files on your machine and logs on servers, over SSH.',
		button: 'Download for Windows',
		link: 'Getting started',
		note: 'Free to use. Portable on Windows and Linux, with or without a bundled Java runtime.',
		demo: {
			filename: 'payment-engine.log',
			placeholder: 'Search this log',
			empty: 'No lines match.',
			count: '{{shown}} of {{total}} lines',
			footnote: 'This is the app’s sample log, running in your browser.',
		},
	},
	features: {
		heading: 'What it does',
		modules: [
			{
				heading: 'Two places, one browser.',
				paragraphs: [
					'Open a file from your disk, or browse a server over SSH. Groups, favourites and recent files behave the same in both.',
					'Recent files remember whether you were reading or tailing, and reopen that way.',
				],
				image: 'file-manager',
				alt: 'The Locations panel listing local drives and servers in groups.',
			},
			{
				heading: 'Search stops being scrolling.',
				paragraphs: [
					'Filter with plain text, regex, or uppercase AND, OR and NOT. Matches are highlighted and counted while you type.',
					'The results panel lists every hit with its line number, and F3 walks through them.',
				],
				image: 'search',
				alt: 'Search results listed with line numbers next to the highlighted log.',
			},
			{
				heading: 'Find the error, not the file.',
				paragraphs: [
					'Point Find in Files at a folder on a server and search every file under it, with context around each hit.',
					'Open the match, or start tailing the file it came from.',
				],
				image: 'find-in-files',
				alt: 'Matches across a remote folder with a context preview.',
			},
			{
				heading: 'A line opens into its payload.',
				paragraphs: [
					'Click a line to read it in full. JSON and XML inside it are formatted and syntax highlighted.',
					'Long entries stay readable, and Copy takes exactly what you see.',
				],
				image: 'detail',
				alt: 'A log line opened into a formatted JSON payload.',
			},
			{
				heading: 'Servers you can trust.',
				paragraphs: [
					'Passwords and keys are stored encrypted, and only if you ask. Host keys are checked against a known-hosts file.',
					'A changed host key is refused outright, with the reason in plain language.',
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
			'This is the app’s live tail running on its sample log. Switch it on and new lines stream the moment they are written.',
		switchLabel: 'Live tail',
		statusOn: 'Tailing payment-engine.log',
		statusOff: 'payment-engine.log',
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
		button: 'Download for Windows',
		note: 'Also for Linux, with or without a bundled Java runtime.',
		guide: 'Getting started',
		changelog: 'Changelog',
	},
};

const id: typeof en = {
	meta: {
		title: 'Semua log, satu jendela',
		description:
			'Log viewer desktop yang cepat untuk file di komputer Anda dan log di server, melalui SSH. Cari dengan teks biasa atau regex, tail secara real time, dan baca JSON serta XML yang dibawa baris log.',
	},
	hero: {
		headline: ['Semua log,', 'satu jendela.'],
		sentence:
			'Log viewer desktop yang cepat untuk file di komputer Anda dan log di server, melalui SSH.',
		button: 'Unduh untuk Windows',
		link: 'Mulai',
		note: 'Gratis. Portabel di Windows dan Linux, dengan atau tanpa Java bawaan.',
		demo: {
			filename: 'payment-engine.log',
			placeholder: 'Cari di log ini',
			empty: 'Tidak ada baris yang cocok.',
			count: '{{shown}} dari {{total}} baris',
			footnote: 'Ini log contoh aplikasi, berjalan langsung di browser Anda.',
		},
	},
	features: {
		heading: 'Yang bisa dilakukannya',
		modules: [
			{
				heading: 'Dua tempat, satu penjelajah.',
				paragraphs: [
					'Buka file dari disk Anda, atau telusuri server melalui SSH. Grup, favorit, dan file terbaru berperilaku sama di keduanya.',
					'File terbaru mengingat apakah Anda sedang membaca atau tail, lalu membukanya kembali dengan cara yang sama.',
				],
				image: 'file-manager',
				alt: 'Panel Locations menampilkan drive lokal dan server dalam grup.',
			},
			{
				heading: 'Pencarian mengakhiri gulir.',
				paragraphs: [
					'Filter dengan teks biasa, regex, atau istilah kapital AND, OR dan NOT. Kecocokan disorot dan dihitung saat Anda mengetik.',
					'Panel hasil mendaftar setiap kecocokan dengan nomor barisnya, dan F3 menelusurinya.',
				],
				image: 'search',
				alt: 'Hasil pencarian dengan nomor baris di samping log yang disorot.',
			},
			{
				heading: 'Temukan error, bukan filenya.',
				paragraphs: [
					'Arahkan Find in Files ke sebuah folder di server dan cari di seluruh file di dalamnya, lengkap dengan konteks setiap kecocokan.',
					'Buka kecocokannya, atau mulai tail file asalnya.',
				],
				image: 'find-in-files',
				alt: 'Kecocokan di folder remote dengan pratinjau konteks.',
			},
			{
				heading: 'Satu baris terbuka jadi payload.',
				paragraphs: [
					'Klik satu baris untuk membacanya utuh. JSON dan XML di dalamnya diformat dan diberi syntax highlighting.',
					'Entri panjang tetap terbaca, dan Copy mengambil persis apa yang Anda lihat.',
				],
				image: 'detail',
				alt: 'Baris log yang terbuka menjadi payload JSON terformat.',
			},
			{
				heading: 'Server yang bisa dipercaya.',
				paragraphs: [
					'Password dan key disimpan terenkripsi, dan hanya jika Anda minta. Host key diperiksa terhadap file known-hosts.',
					'Host key yang berubah langsung ditolak, dengan alasannya dalam bahasa yang jelas.',
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
			'Ini live tail aplikasi yang berjalan pada log contohnya. Nyalakan, dan baris baru mengalir begitu ditulis.',
		switchLabel: 'Live tail',
		statusOn: 'Men-tail payment-engine.log',
		statusOff: 'payment-engine.log',
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
		button: 'Unduh untuk Windows',
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
