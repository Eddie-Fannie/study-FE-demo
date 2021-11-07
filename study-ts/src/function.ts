let add: (x: number, y: number) => number

// 等价于 函数类型接口
interface Add {
  (x: number, y: number): number;
}

// 也可以用类型 type
// type Add = (x: number, y: number) => number;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}
function getLib() {
  let lib: Lib = (() => {}) as Lib; // 断言一下
  lib.version = '1.2'
  lib.doSomething = () => {}
}

// 函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))