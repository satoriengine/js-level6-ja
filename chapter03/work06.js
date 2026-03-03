// thenにデータを渡す
console.log('1:処理の開始');

// Promiseオブジェクトの作成
new Promise((resolve, reject) => {
    resolve('3:こんにちは');
})
    .then((data) => {
        console.log(data);
        return '4:こんにちは';
    })
    .then((data) => {
        console.log(data);
        return '5:こんにちは';
    })
    .then((data) => {
        console.log(data);
        return '6:こんにちは';
    })
    .then((data) => {
        console.log(data);
    });

console.log('2:プログラムの最後');
