// fetchをチェーンでつないだ通信処理

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

// fetchを利用してURLにアクセスしてデータ取得
fetch(url)
    .then((response) => {
        // URLからレスポンスを取得したら
        return response.text();
    })
    .then((data) => {
        // レスポンスボディを取得したら
        const title = data.match('<title[^>]*>([^<]+)</title>')[1];
        console.log(title);
    });
