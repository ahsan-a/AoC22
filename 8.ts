const text = await Deno.readTextFile('./inputs/8.txt');
// const text = `30373
// 25512
// 65332
// 33549
// 35390`;

const map = text.split('\n');

// --- p1
// let visible = 0;
// for (let i = 0; i < map.length; i++) {
// 	for (let j = 0; j < map[0].length; j++) {
// 		const tree = map[i][j];
// 		if (i === 0 || j === 0 || i === map.length - 1 || j === map[0].length - 1) {
// 			visible++;
// 			continue;
// 		}
// 		let blocked = 0;
// 		// top
// 		for (let x = j - 1; x >= 0; x--) {
// 			if (map[i][x] >= tree) {
// 				blocked++;
// 				break;
// 			}
// 		}
// 		//left
// 		for (let x = i - 1; x >= 0; x--) {
// 			if (map[x][j] >= tree) {
// 				blocked++;
// 				break;
// 			}
// 		}
// 		//bottom
// 		for (let x = j + 1; x < map.length; x++) {
// 			if (map[i][x] >= tree) {
// 				blocked++;
// 				break;
// 			}
// 		}
// 		//right
// 		for (let x = i + 1; x < map[0].length; x++) {
// 			if (map[x][j] >= tree) {
// 				blocked++;
// 				break;
// 			}
// 		}
// 		if (blocked != 4) visible++;
// 	}
// }

// console.log(visible);
// --- p1

let highest = 0;
for (let i = 1; i < map.length - 1; i++) {
	for (let j = 1; j < map[0].length - 1; j++) {
		const tree = map[i][j];
		const distance = [0, 0, 0, 0];

		// top
		for (let k = i - 1; k >= 0; k--) {
			distance[0]++;
			if (map[k][j] >= tree) break;
		}

		// left
		for (let k = j - 1; k >= 0; k--) {
			distance[1]++;
			if (map[i][k] >= tree) break;
		}

		// bottom
		for (let k = i + 1; k < map.length; k++) {
			distance[2]++;
			if (map[k][j] >= tree) break;
		}

		// right
		for (let k = j + 1; k < map[0].length; k++) {
			distance[3]++;
			if (map[i][k] >= tree) break;
		}

		highest = Math.max(
			highest,
			distance.reduce((acc, x) => acc * x)
		);
	}
}

console.log(highest);
