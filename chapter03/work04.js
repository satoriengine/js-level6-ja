// thenをチェーンメソッドでつなぐ　失敗時
console.log('1:処理の開始');

// Promiseオブジェクトの作成
new Promise((resolve, reject) => {
    // 1秒後に失敗
    setTimeout(() => {
        reject('5:さようなら');
    }, 1000);
})
    .then((data) => {
        console.log('3:成功した');
        console.log(data);
    })
    .catch((data) => {
        console.log('4:失敗した');
        console.log(data);
    });

console.log('2:プログラムの最後');
