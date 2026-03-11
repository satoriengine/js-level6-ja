// await演算子
console.log('1:処理の開始');

// Promiseオブジェクトを返すasync関数
// secondsミリ秒待機後、messageを表示します
async function getValue(seconds, message) {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, seconds);
    });
    return result;
}

// 関数を呼び出す。戻り値はPromiseオブジェクト
getValue(1000, '3:こんにちは')
    .then((data) => {
        console.log(data);
        return getValue(1000, '4:こんにちは');
    })
    .then((data) => {
        console.log(data);
        return getValue(1000, '5:こんにちは');
    })
    .then((data) => {
        console.log(data);
        return getValue(1000, '6:こんにちは');
    })
    .then((data) => {
        console.log(data);
    });

console.log('2:プログラムの最後');
