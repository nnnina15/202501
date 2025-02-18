const person = {
    name: "Nina",
    age: 18,
    city: "HK",
    email: "nina@gmail.com",
    sayHello: function () {
        console.log("Hello my name is " + this.name);
    },
};

/* person.name = "Amy";
 */
console.log(person);

person.sayHello();
/* // 展示物件的基本操作

// 建立基本物件
const person = {
    firstName: "小明",
    lastName: "王",
    age: 25,
    hobbies: ["閱讀", "游泳", "攝影"],
    address: {
        street: "中山路100號",
        city: "台北市",
        country: "台灣",
    },
};

// 顯示物件內容的函數
function displayObject(obj) {
    console.log("物件內容:", obj);
}

// 物件操作展示
function objectDemo() {
    // 顯示初始物件
    console.log("--- 初始物件 ---");
    displayObject(person);

    // 存取物件屬性
    console.log("\n--- 存取物件屬性 ---");
    console.log("姓名:", person.lastName + person.firstName);
    console.log("年齡:", person.age);
    console.log("第一個興趣:", person.hobbies[0]);
    console.log("城市:", person.address.city);

    // 修改物件屬性
    console.log("\n--- 修改屬性 ---");
    person.age = 26;
    person.hobbies.push("烹飪");
    console.log("修改後的物件:");
    displayObject(person);

    // 新增屬性
    console.log("\n--- 新增屬性 ---");
    person.email = "xiaoming@example.com";
    person.phone = "0912-345-678";
    console.log("新增屬性後的物件:");
    displayObject(person);

    // 刪除屬性
    console.log("\n--- 刪除屬性 ---");
    delete person.phone;
    console.log("刪除屬性後的物件:");
    displayObject(person);

    // 使用Object.keys()列出所有屬性
    console.log("\n--- 物件的所有屬性 ---");
    console.log("屬性列表:", Object.keys(person));

    // 使用Object.values()列出所有值
    console.log("\n--- 物件的所有值 ---");
    console.log("值列表:", Object.values(person));
}

// 執行展示
objectDemo();
 */
