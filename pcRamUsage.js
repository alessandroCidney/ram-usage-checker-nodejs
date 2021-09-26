const os = require('os');

const { arch, platform, totalmem, freemem } = os;

const covertToGB = bytesSize => bytesSize/1024/1024;

setInterval(() => {
	const tRAM = covertToGB(totalmem());
	const fRAM = covertToGB(freemem());

	const usage = (1 - fRAM / tRAM) * 100;

	const stats = {
		OS: platform(),
		Arch: arch(),
		TotalRAM: `${parseInt(tRAM)} MB`,
		FreeRAM: `${parseInt(fRAM)} MB`,
		Usage: `${usage.toFixed(2)}%`
	};

	console.clear();
	console.table(stats);

	exports.stats = stats;
}, 1000);