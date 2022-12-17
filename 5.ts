const text = await Deno.readTextFile('./inputs/5.txt');
// const text = `    [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`;

const [crates, instructions] = text.split('\n\n');

// parse crates into reg
const hSplit = crates.split('\n');

const crateNum = parseInt(hSplit.pop()?.trim().at(-1) || '');
const reg: string[][] = [];
for (let i = 0; i < crateNum; i++) reg[i] = [];

const crateY = hSplit.length;

for (let i = crateY - 1; i >= 0; i--) {
	for (let j = 0; j < crateNum; j++) {
		const content = 4 * j + 1;

		hSplit[i][content].trim() && reg[j].push(hSplit[i][content]);
	}
}

// --- move crates to desired location : p1
// for (const ins of instructions.split('\n').map((x) => x.split(' '))) {
// 	const [n, from, to] = [ins[1], ins[3], ins[5]].map((x) => parseInt(x));
// 	for (let i = 0; i < n; i++) {
// 		reg[to - 1].push(reg[from - 1].pop() || '');
// 	}
// }
// --- p1

// --- p2
for (const ins of instructions.split('\n').map((x) => x.split(' '))) {
	const [n, from, to] = [ins[1], ins[3], ins[5]].map((x) => parseInt(x));

	const moving = reg[from - 1].splice(reg[from - 1].length - n, n);
	for (const i of moving) reg[to - 1].push(i);
}
// --- p2

// get all last items into string
const ans = reg.map((x) => x.at(-1)).join('');
console.log(ans);

// what a mess
