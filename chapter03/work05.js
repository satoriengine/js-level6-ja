// 連続したthenで処理をつなぐ
console.log('1:処理の開始');

// Promiseオブジェクトの作成
new Promise((resolve, reject) => {
    resolve();
})
    .then(() => {
        console.log('3:こんにちは');
    })
    .then(() => {
        console.log('4:こんにちは');
    })
    .then(() => {
        console.log('5:こんにちは');
    })
    .then(() => {
        console.log('6:こんにちは');
    });

console.log('2:プログラムの最後');
