const text = await Deno.readTextFile('./inputs/1.txt');
const elves = text.split('\n\n').map((x) => x.split('\n').map((y) => parseInt(y)));

// let highest = 0;
// for (const elf of elves) {
// 	let acc = 0;
// 	for (const x of elf) acc += x;
// 	if (acc > highest) highest = acc;
// }

// console.log(highest);

const highest = [0, 0, 0];
for (const elf of elves) {
	let acc = 0;
	for (const x of elf) acc += x;
	if (acc > highest[0]) {
		highest.unshift(acc);
		highest.pop();
	} else if (acc > highest[1]) {
		highest.splice(1, 0, acc);
		highest.pop();
	} else if (acc > highest[2]) {
		highest.pop();
		highest.push(acc);
	}
}

console.log(highest.reduce((a, b) => a + b));
