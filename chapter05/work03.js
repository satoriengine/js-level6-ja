// チェーンで連続したasync関数を実行
console.log('1:処理の開始');

// Promiseオブジェクトを返すasync関数
async function getValue(message) {
    return message;
}

// 関数を呼び出すが、戻り値はPromiseオブジェクト
getValue('3:こんにちは')
    .then((data) => {
        console.log(data);
        return getValue('4:こんにちは');
    })
    .then((data) => {
        console.log(data);
        return getValue('5:こんにちは');
    })
    .then((data) => {
        console.log(data);
        return getValue('6:こんにちは');
    })
    .then((data) => {
        console.log(data);
    });

console.log('2:プログラムの最後');
