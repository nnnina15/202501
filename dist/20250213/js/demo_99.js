let a = 9;
let b = 9;

for (let i = 1; i <= a; i++) {
    console.log(`i=${i}的乘法表`);
    for (let j = 1; j <= b; j++) {
        // console.log(`j=${j}`);
        console.log(`${i}*${j}=${i * j}`);
    }
    console.log(`i=${i}的乖法結束`);
}
