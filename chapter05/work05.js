// await演算子とfetch

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

console.log('1:処理の開始');

// Promiseオブジェクトを返すasync関数
async function getValue(url) {
    // awaitで非同期処理が完了するまで待機します
    const response = await fetch(url);
    // awaitで非同期処理が完了するまで待機します
    const data = await response.text();
    // titleタグの文字列を抽出します
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    // titleタグの文字列を返します
    return title;
}

// 関数を呼び出す。戻り値はPromiseオブジェクト
// thenで連結します
getValue(url).then((data) => {
    console.log('3:データの取得');
    console.log(data);
});

console.log('2:プログラムの最後');
