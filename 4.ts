// const text = await Deno.readTextFile('./inputs/4.txt');

const text = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const input = text.split('\n').map((x) => x.split(',').map((y) => y.split('-').map((z) => parseInt(z))));

// let acc = 0;
// for (const elves of input)
// 	if (
// 		(elves[0][0] <= elves[1][1] && elves[0][0] >= elves[1][0] && elves[0][1] >= elves[1][0] && elves[0][1] <= elves[1][1]) ||
// 		(elves[1][0] <= elves[0][1] && elves[1][0] >= elves[0][0] && elves[1][1] >= elves[0][0] && elves[1][1] <= elves[0][1])
// 	)
// 		acc++;

// console.log(acc);

let acc = 0;
for (const elves of input)
	if (
		(elves[0][0] <= elves[1][1] && elves[0][0] >= elves[1][0]) ||
		(elves[0][1] >= elves[1][0] && elves[0][1] <= elves[1][1]) ||
		(elves[1][0] <= elves[0][1] && elves[1][0] >= elves[0][0]) ||
		(elves[1][1] >= elves[0][0] && elves[1][1] <= elves[0][1])
	)
		acc++;

console.log(acc);
