// sleepのアロー関数化

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

console.log('1:処理の開始');

// secondsミリ秒待機するasyncのアロー関数
const sleep = async (seconds) =>
    await new Promise((resolve, reject) => setTimeout(resolve, seconds));

// Promiseオブジェクトを返すasync関数
async function getValue(url, seconds) {
    const response = await fetch(url);
    const data = await response.text();
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    await sleep(seconds);
    return title;
}

// 関数を呼び出す。戻り値はPromiseオブジェクト
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
