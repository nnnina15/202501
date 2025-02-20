//NINA TEST
const app = document.getElementById("app");

const setAppClass = function (className) {
    app.classList.add(className);
};

const removeAppClass = function (className) {
    app.classList.remove(className);
};

const highlightControlEvent = function () {
    const setHighlightButton = document.querySelector("#set-highlight");
    const removeHighlightButton = document.querySelector("#remove-highlight");

    setHighlightButton.addEventListener("click", function () {
        setAppClass("highlight");
    });

    removeHighlightButton.addEventListener("click", function () {
        removeAppClass("highlight");
    });
};

highlightControlEvent();

// 添加 getAccountDom 函數
const getAccountDom = function () {
    return document.querySelector("#Account");
};

/* const bindDemoEvent = function () {
    console.log("-----bindDemoEvent-----");
    const accountDom = getAccountDom();

    accountDom.addEventListener("click", function () {
        console.log("---click---");
    });

    accountDom.addEventListener("focus", function () {
        console.log("---focus---");
    });

    accountDom.addEventListener("blur", function () {
        console.log("---blur---");
    });

    accountDom.addEventListener("change", function () {
        console.log("---change---");
    });

    accountDom.addEventListener("keyup", function () {
        console.log("---keyup---");
        console.log(accountDom.value);
    });
    accountDom.addEventListener("keypress", function () {
        console.log("---keypress---");
        console.log(accountDom.value);
    });
}; */
/**
 * 事件類型
 * - click 點擊
 * - focus 聚焦
 * - blur 失去焦點
 * - keyup 按下鍵盤
 * - keypress 按下鍵盤
 * - change 改變
 * - submit 提交
 */

const bindDemoEvent = function () {
    console.log("---bindDemoEvent---");
    const accountDom = getAccountDom();

    /**
     * 當 input 被點擊時觸發(不常用，通常使用 focus)
     */
    accountDom.addEventListener("click", function () {
        console.log("---click---");
    });

    /**
     * 當 input 獲得焦點時觸發
     */
    accountDom.addEventListener("focus", function () {
        console.log("---focus---");
    });

    /**
     * 當 input 失去焦點時觸發(不常用，通常使用 change)
     */
    accountDom.addEventListener("blur", function () {
        console.log("---blur---");
    });

    /**
     * 當值有改變且失去焦點時觸發
     */
    accountDom.addEventListener("change", function () {
        console.log("---change---");
    });

    /**
     * 需求
     * 判斷帳號是否大於 10 個字
     * 如果大於 10 個字，則提示 "帳號長度超過 10 個字"
     * 如果小於 10 個字，則提示 "帳號長度小於 10 個字"
     */

    /**
     * 當按下鍵盤時觸發
     * 如果要檢查內容，通常使用 keyup
     */
    accountDom.addEventListener("keyup", function () {
        console.log("---keyup---");
        console.log(accountDom.value);
        checkAccountLength();
    });

    /**
     * 當按下鍵盤時觸發
     * 如果要檢查內容，通常使用 keyup
     * keypress 會有漏字問題
     */
    accountDom.addEventListener("keypress", function () {
        // console.log("---keypress---");
        // console.log(accountDom.value);
        // checkAccountLength();
    });
};

const checkAccountLength = function () {
    const accountDom = getAccountDom();
    const accountValue = accountDom.value;
    const accountLength = accountValue.length;
    console.log(`目前長度: ${accountLength}`);
    if (accountLength > 10) {
        console.log("帳號長度超過 10 個字");
        accountDom.value = accountValue.slice(0, 10);
    } else {
        console.log("帳號長度小於 10 個字");
    }
};

bindDemoEvent();

// AI DOM 操作示範腳本

// 當文檔完全載入後執行
document.addEventListener("DOMContentLoaded", () => {
    // 改變文字的功能
    const changeTextBtn = document.getElementById("changeTextBtn");
    const demoText = document.getElementById("demoText");
    let isOriginalText = true;

    changeTextBtn.addEventListener("click", () => {
        if (isOriginalText) {
            demoText.textContent = "文字已經被改變了！";
        } else {
            demoText.textContent = "這是一段可以被改變的文字";
        }
        isOriginalText = !isOriginalText;
    });

    // 新增項目的功能
    const addItemBtn = document.getElementById("addItemBtn");
    const itemList = document.getElementById("itemList");
    let itemCount = 2;

    addItemBtn.addEventListener("click", () => {
        itemCount++;
        const newItem = document.createElement("li");
        newItem.textContent = `項目 ${itemCount}`;
        itemList.appendChild(newItem);
    });
});
