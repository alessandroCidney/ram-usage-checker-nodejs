const http = require('http');
const stats = require('./pcRamUsage.js');

const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
	let url = req.url;

	console.log("URL", url);

	if(url === '/usage') {
		res.end(JSON.stringify(stats, null, 2));
	} else {
		res.end(`
			<h1>Veja o Status de sua memória RAM!</h1>
			<a href="http://localhost:3000/usage">Ver status</a>
		`);
	}
}).listen(port, () => console.log(`Server is runnig at ${host}:${port}`));