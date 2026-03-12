// 繰り返し処理でのasync/await

console.log('1:処理の開始');

// アクセスするURL
const sites = [
    'https://www.yahoo.co.jp/',
    'https://www.amazon.co.jp/',
    'https://www.youtube.com/',
];

// 待機処理のアロー関数
const sleep = (seconds) =>
    new Promise((resolve, reject) => setTimeout(resolve, seconds));

// Promiseオブジェクトを返すasync関数
async function getValue(url, seconds) {
    const response = await fetch(url);
    const data = await response.text();
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    await sleep(seconds);
    return title;
}

// 繰り返し処理でawaitする
for (const url of sites) {
    // awaitで非同期処理が完了するまで待機します
    const title = await getValue(url, 1000);
    console.log(title);
}

console.log('2:プログラムの最後');
