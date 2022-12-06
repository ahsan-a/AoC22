const text = await Deno.readTextFile('./inputs/2.txt');

const opp = ['A', 'B', 'C'];
const me = ['X', 'Y', 'Z'];

const ins: number[][] = text
	.split('\n')
	.map((x) => x.split(' '))
	.map((x) => [opp.indexOf(x[0]), me.indexOf(x[1])]);

// let acc = 0;
// for (const r of ins) {
// 	acc += r[1] + 1;
// 	if (r[0] === r[1]) acc += 3;
// 	else if ([2, -1].includes(r[0] - r[1])) acc += 6;
// }
// console.log(acc);

const mod = (n: number, m: number) => ((n % m) + m) % m;

let acc = 0;
for (const r of ins) {
	let opt: number;
	if (r[1] == 1) opt = r[0];
	else if (r[1] == 0) opt = mod(r[0] - 1, 3);
	else opt = mod(r[0] + 1, 3);

	acc += opt + 1;
	acc += r[1] * 3;
}
console.log(acc);
