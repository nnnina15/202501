let num = 10;
while (num > 0) {
    console.log(num);
    num--;
}

let i = 10;
console.log("while永遠不成立");
while (i < 10) {
    console.log(i);
    i++;
}

console.log("do while 至少會執行一次");
do {
    console.log(i);
    i++;
} while (i < 10);

console.log(i);
