// await演算子とfetch

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

console.log('1:処理の開始');

// Promiseオブジェクトを返すasync関数
async function getValue(url) {
    const response = await fetch(url);
    const data = await response.text();
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    return title;
}

// 関数を呼び出す。戻り値はPromiseオブジェクト
getValue(url).then((data) => {
    console.log('3:データの取得');
    console.log(data);
});

console.log('2:プログラムの最後');
