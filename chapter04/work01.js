// fetchを利用した取得処理

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

// fetchを利用してURLにアクセスしてデータ取得
const promise = fetch(url);

// fetchはPromiseオブジェクトを返す
promise
    .then((response) => {
        // URLからレスポンスを取得したら
        return response.text();
    })
    .then((data) => {
        // レスポンスボディを取得したら
        console.log(data);
    });
