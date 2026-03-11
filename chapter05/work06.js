// async/await/fetch/sleep

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

console.log('1:処理の開始');

// secondsミリ秒待機するasync関数
async function sleep(seconds) {
    return await new Promise((resolve, reject) => {
        setTimeout(resolve, seconds);
    });
}

// Promiseオブジェクトを返すasync関数
async function getValue(url, seconds) {
    // URLにアクセスしてデータを取得
    const response = await fetch(url);
    // データを取得
    const data = await response.text();
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    // secondsミリ秒待機する
    await sleep(seconds);
    // 文字列を返します
    return title;
}

// 関数を呼び出すが、戻り値はPromiseオブジェクト
getValue(url, 1000)
    .then((data) => {
        console.log('3:データの取得');
        console.log(data);
        return getValue(url, 1000);
    })
    .then((data) => {
        console.log('4:データの取得');
        console.log(data);
        return getValue(url, 1000);
    })
    .then((data) => {
        console.log('5:データの取得');
        console.log(data);
        return getValue(url, 1000);
    })
    .then((data) => {
        console.log('6:データの取得');
        console.log(data);
    });

console.log('2:プログラムの最後');
