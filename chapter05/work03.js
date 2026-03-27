// 連続したasync関数をチェーンでつなぐ
console.log('1:処理の開始');

// Promiseオブジェクトを返すasync関数
async function getValue(message) {
    return message;
}

// 関数を呼び出すが、戻り値はPromiseオブジェクト
