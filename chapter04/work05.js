// fetchの関数化

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

const myFetch = (url) => {
    fetch(url)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            const title = data.match('<title[^>]*>([^<]+)</title>')[1];
            console.log(title);
        });
};

myFetch(url);
