// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '4'];

// 元祖
let tuple: [number, string] = [0, '1'];
// tuple.push(true); // 提示报错，boolean类型
tuple.push(2);
console.log(tuple);
// tuple[2]; // 提示报错 在元祖索引为2下无元素

// 对象
let obj = {x: 1, y: 2}
obj.x = 3;