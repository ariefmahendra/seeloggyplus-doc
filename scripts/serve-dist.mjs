import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const port = Number(process.argv[2] ?? 4373);

const types = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.json': 'application/json',
	'.xml': 'application/xml',
	'.txt': 'text/plain; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.webp': 'image/webp',
	'.avif': 'image/avif',
	'.ico': 'image/x-icon',
	'.woff2': 'font/woff2',
	'.wasm': 'application/wasm',
};

const send = async (response, filePath) => {
	try {
		const body = await readFile(filePath);
		response.writeHead(200, { 'content-type': types[extname(filePath)] ?? 'application/octet-stream' });
		response.end(body);
	} catch {
		try {
			const notFound = await readFile(join(root, '404.html'));
			response.writeHead(404, { 'content-type': types['.html'] });
			response.end(notFound);
		} catch {
			response.writeHead(404);
			response.end('not found');
		}
	}
};

createServer(async (request, response) => {
	const url = new URL(request.url ?? '/', 'http://localhost');
	let pathname = decodeURIComponent(url.pathname);
	const candidate = resolve(join(root, pathname));
	if (!candidate.startsWith(root + sep) && candidate !== root) {
		response.writeHead(403);
		response.end('forbidden');
		return;
	}

	try {
		const info = await stat(candidate);
		if (info.isDirectory()) {
			await send(response, join(candidate, 'index.html'));
			return;
		}
		await send(response, candidate);
		return;
	} catch {
		await send(response, join(candidate, 'index.html'));
	}
}).listen(port, '127.0.0.1', () => {
	console.log(`serving dist on http://127.0.0.1:${port}`);
});
