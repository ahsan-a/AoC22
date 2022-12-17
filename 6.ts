const text = await Deno.readTextFile('./inputs/6.txt');

// --- p1
for (let i = 0; i < text.length - 4; i++) {
	if ([...new Set([text[i], text[i + 1], text[i + 2], text[i + 3]])].length === 4) {
		// console.log(i + 4);
		break;
	}
}
// --- p1

// --- p2
for (let i = 0; i < text.length - 14; i++) {
	const set = new Set();
	for (let j = 0; j < 14; j++) set.add(text[i + j]);
	if ([...set].length === 14) {
		console.log(i + 14);
		break;
	}
}
// --- p2
