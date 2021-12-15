/**
 * const,let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言可能";
console.log(val1);

// let変数
let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);
// letは再宣言不可能
// let val2 = "let変数を再宣言";

// const宣言
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const変数は再宣言不可
// const val3 = "const変数を再宣言";

const val4 = { name: "ジャケえ", age: 28 };
console.log(val4);

val4.name = "jake";
console.log(val4);

val4.addres = "Fukuoka-Ken";
console.log(val4);

// cpmstで定義した配列はプロパティの変更は可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

const name = "ジャケぇ";
const age = 28;
// 「私の名前はジャケえです。年齢は２９歳です。」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です。"));
const func_ = function (str) {
  return str;
};
console.log(func_("func_です。"));

// アロー関数
const func2 = (str) => {
  return str;
};
// const func2 = str => {
//   return str;
// };
// const func2 = (str) => str;
console.log(func2("func2です"));
