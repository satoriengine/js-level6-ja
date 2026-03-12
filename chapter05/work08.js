// トップレベルのawait演算子2

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

console.log('1:処理の開始');

// ここではアロー関数で待機処理を定義します
// secondsミリ秒待機後、resolveします
const sleep = (seconds) =>
    new Promise((resolve, reject) => setTimeout(resolve, seconds));

// Promiseオブジェクトを返すasync関数
async function getValue(url, seconds) {
    // awaitで非同期処理が完了するまで待機します
    const response = await fetch(url);
    // awaitで非同期処理が完了するまで待機します
    const data = await response.text();
    // titleタグの文字列を抽出します
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    // awaitで非同期処理が完了するまで待機します
    await sleep(seconds);
    // titleタグの文字列を返します
    return title;
}

// 関数を呼び出す。戻り値はPromiseオブジェクト
// awaitで非同期処理が完了するまで待機します
let data = await getValue(url, 1000);
console.log('2:データの取得');
console.log(data);

// awaitで非同期処理が完了するまで待機します
data = await getValue(url, 1000);
console.log('3:データの取得');
console.log(data);

// awaitで非同期処理が完了するまで待機します
data = await getValue(url, 1000);
console.log('4:データの取得');
console.log(data);

// awaitで非同期処理が完了するまで待機します
data = await getValue(url, 1000);
console.log('5:データの取得');
console.log(data);

console.log('6:プログラムの最後');
