// await演算子
console.log('1:処理の開始');

// Promiseオブジェクトを返すasync関数
async function getValue(seconds, message) {
    // awaitで非同期処理が完了するまで待機します
    // secondsミリ秒待機後、resolveします
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, seconds);
    });
    // 変数resultの実体はmessage
    return result;
}

// 関数を呼び出す。戻り値はPromiseオブジェクト
// thenで連結します
getValue(1000, '3:こんにちは').then((data) => {
    console.log(data);
});

console.log('2:プログラムの最後');
