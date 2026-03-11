// テキストデータの取得

// アクセスするURL
const url = 'https://satori-api.vercel.app/colors';

// fetchを利用してURLにアクセスしてデータ取得
fetch(url)
    .then((response) => {
        // URLからレスポンスを取得したら
        return response.text();
    })
    .then((data) => {
        // レスポンスボディを取得したら
        console.log(data);
    });
