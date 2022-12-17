const text = await Deno.readTextFile('./inputs/7.txt');

// const text = `$ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k`;

class Dir {
	constructor(public name: string, public parentDir?: Dir, public size = 0, public subDirs: Record<string, Dir> = {}) {}

	public totalSize(cb?: (totalSize: number) => void): number {
		const total = Object.values(this.subDirs).reduce((acc: number, x) => acc + x.totalSize(cb), this.size);
		cb && cb(total);
		return total;
	}
}
class Fs {
	public root = new Dir('/');
	public currentDir = this.root;
	constructor(input: string[]) {
		for (const x of input) {
			x.startsWith('$') ? this.parseCommand(x) : this.parseOutput(x);
		}
	}

	private parseCommand(command: string) {
		const split = command.split(' ');
		if (split[1] === 'ls') return;

		switch (split[2]) {
			case '/':
				this.currentDir = this.root;
				break;
			case '..':
				if (this.currentDir.parentDir) this.currentDir = this.currentDir.parentDir;
				break;
			default:
				this.currentDir = this.currentDir.subDirs[split[2]];
		}
	}

	private parseOutput(output: string) {
		const split = output.split(' ');
		if (split[0] === 'dir') return (this.currentDir.subDirs[split[1]] = new Dir(split[1], this.currentDir));
		this.currentDir.size += +split[0];
	}
}
const fs = new Fs(text.split('\n'));

// --- p1
// let acc = 0;
// fs.root.totalSize((size) => (acc += size < 100000 ? size : 0));
// console.log(acc);
// --- p1

const deleting = 30000000 - (70000000 - fs.root.totalSize());
let smallest = Infinity;
fs.root.totalSize((size) => {
	if (size > deleting && size < smallest) smallest = size;
});
console.log(smallest);
