// トップレベルのawait演算子

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

console.log('1:処理の開始');

// secondsミリ秒待機後、resolveします
function sleep(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, seconds);
    });
}

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
// awaitでの待機完了後、戻り値はタイトルタグの文字列になります
const data = await getValue(url, 1000);
console.log('2:データの取得');
console.log(data);

console.log('3:プログラムの最後');
