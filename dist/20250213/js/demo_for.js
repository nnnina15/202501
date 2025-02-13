for (let i = 0; i < 10; i++) {
    console.log("Hello World");
}

let students = [60, 59, 58, 57, 56, 55, 54, 53, 52, 51];
let max = students.length;

for (let i = 0; i < max; i++) {
    console.log(`第${i + 1}位同學分數是${students[i]}`);
    console.log("---加10分---");
    students[i] += 10;
    console.log(`第${i + 1}同學分數是${students[i]}`);
}
