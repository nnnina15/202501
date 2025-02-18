// 展示陣列的基本操作

// 建立並初始化陣列
const fruits = ["蘋果", "香蕉", "柳橙"];

// 顯示陣列元素的函數
function displayArray(arr) {
    console.log("目前陣列:", arr);
}

// 陣列操作展示
function arrayDemo() {
    // 顯示初始陣列
    displayArray(fruits);

    // 新增元素 (push)
    fruits.push("葡萄");
    console.log("使用push新增元素後:");
    displayArray(fruits);

    // 刪除元素 (pop)
    const removedFruit = fruits.pop();
    console.log("使用pop刪除最後一個元素後:");
    displayArray(fruits);
    console.log("被刪除的元素:", removedFruit);

    // 在陣列開頭新增元素 (unshift)
    fruits.unshift("草莓");
    console.log("使用unshift在開頭新增元素後:");
    displayArray(fruits);

    // 刪除第一個元素 (shift)
    const shiftedFruit = fruits.shift();
    console.log("使用shift刪除第一個元素後:");
    displayArray(fruits);
    console.log("被刪除的元素:", shiftedFruit);
}

// 執行展示
arrayDemo();

console.log("-------------JOIN-------------");
let arrayString = ["我", "來", "測", "試"];
let JoinString = arrayString.join(",");
console.log(JoinString);

let students = [
    {
        name: "MEI",
        chinese: 85,
        englist: 76,
        math: 90,
    },
    {
        name: "CICI",
        chinese: 55,
        englist: 80,
        math: 75,
    },
    {
        name: "MAY",
        chinese: 60,
        englist: 92,
        math: 80,
    },
    {
        name: "AMY",
        chinese: 99,
        englist: 86,
        math: 88,
    },
    {
        name: "TOM",
        chinese: 90,
        englist: 67,
        math: 53,
    },
];

console.log("學生的成績");
console.log(students);

function dowloadCSV() {
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + cavString], {
        type: "text/cav;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "學生成功表.csv";

    document;
}
