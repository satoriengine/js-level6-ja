// 連続したthenをPromiseでつなぐ
console.log('1:処理の開始');

// Promiseオブジェクトの作成
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3:こんにちは');
    }, 1000);
})
    .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('4:こんにちは');
            }, 1000);
        });
    })
    .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('5:こんにちは');
            }, 1000);
        });
    })
    .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('6:こんにちは');
            }, 1000);
        });
    })
    .then((data) => {
        console.log(data);
    });

console.log('2:プログラムの最後');
