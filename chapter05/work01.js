// async関数
console.log('1:処理の開始');

// Promiseオブジェクトを返すasync関数
async function getValue() {
    return '4:こんにちは';
}

// 関数を呼び出す。戻り値はPromiseオブジェクト
const promise = getValue();

// thenで処理をつなぐ
promise.then((data) => {
    // getValueの戻り値は引数dataとして受け取る
    console.log('3:成功した');
    console.log(data);
});

console.log('2:プログラムの最後');
