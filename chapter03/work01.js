// Promiseの基本
console.log('1:処理の開始');

// Promiseオブジェクトの作成
const promise = new Promise((resolve, reject) => {
    // 1秒後に成功
    setTimeout(() => {
        resolve('5:こんにちは');
    }, 1000);
});

// 成功したときに動作する関数
const onResolve = (data) => {
    console.log('3:成功した');
    console.log(data);
};

// 失敗したときに動作する関数
const onReject = (data) => {
    console.log('4:失敗した');
    console.log(data);
};

// thenメソッドで成功時と失敗時に実行するコールバック関数を設定
promise.then(onResolve, onReject);

console.log('2:プログラムの最後');
