//Promise.allメソッド
console.log('1:処理の開始');

// PromiseとsetTimeoutを利用した無名関数を定義
const sleep = (seconds, callback) => {
    // 戻り値としてPromiseオブジェクトを返す
    return new Promise((resolve, reject) => {
        // 引数seconds時間待機して、その後、引数callbackを実行
        setTimeout(() => {
            resolve(callback());
        }, seconds);
    });
};

Promise.all([
    sleep(1000, () => {
        return '3:こんにちは';
    }),
    sleep(2000, () => {
        return '4:こんにちは';
    }),
    sleep(3000, () => {
        return '5:こんにちは';
    }),
]).then((data) => {
    console.log(data);
});

console.log('2:プログラムの最後');
