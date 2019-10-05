// 請介紹兩個字串方法跟數字方法
console.log("string的方法");
let s: string[] = ['apple', 'pie'];
let s2: string[] = ['good'];
let con = s.concat(s2);
console.log('將apple字母轉成大寫：', s[0].toUpperCase()); //轉成大寫
console.log('將變數s與變數s2的資料串再一起:', con); //將資料合併
console.log("-".repeat(10));

console.log("數值的方法");
let i = 20;
console.log('設定數字的小數點幾位數:', i.toFixed(2));
console.log('強制數字用指數型態顯示：', i.toExponential());
console.log("-".repeat(10));
// 錢錢大於一個值，叫乾爹
console.log("if和else的練習題");
let money = 10010000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log('叫乾爹');
} else {
    console.log("叫乾媽");
}ㄑ