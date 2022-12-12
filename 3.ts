const text = (await Deno.readTextFile('./inputs/3.txt')).split('\n');

// const text = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`.split('\n');

// let acc = 0;
// for (const x of text) {
// 	const compartments = [x.slice(0, x.length / 2), x.slice(x.length / 2, x.length)];
// 	let repeat = '';
// 	same: for (const i of compartments[0]) {
// 		for (const j of compartments[1]) {
// 			if (i === j) {
// 				repeat = i;
// 				break same;
// 			}
// 		}
// 	}
// 	const minascii = repeat.charCodeAt(0) - 64;
// 	const final = repeat === repeat.toUpperCase() ? minascii + 26 : minascii - 32;
// 	acc += final;
// }
// console.log(acc);

let acc = 0;
for (let group = 0; group < text.length; group += 3) {
	const elves = [text[group], text[group + 1], text[group + 2]];

	let repeat = '';
	same: for (const i of elves[0]) {
		for (const j of elves[1]) {
			for (const k of elves[2])
				if (i === j && j === k) {
					repeat = i;
					break same;
				}
		}
	}
	const minascii = repeat.charCodeAt(0) - 64;
	const final = repeat === repeat.toUpperCase() ? minascii + 26 : minascii - 32;
	acc += final;
}
console.log(acc);
