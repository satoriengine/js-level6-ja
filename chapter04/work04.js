// JSONデータの取得

// アクセスするURL
const url = 'https://satori-api.vercel.app/players';

// fetchを利用してURLにアクセスしてデータ取得
fetch(url)
    .then((response) => {
        // URLからレスポンスを取得したら
        return response.json();
    })
    .then((json) => {
        // JSONデータを取得したら
        console.log(json);
    });
