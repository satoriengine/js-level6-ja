// fetch関数での待機処理

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

const myFetchAndSleep = (url, seconds) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                const title = data.match('<title[^>]*>([^<]+)</title>')[1];
                console.log(title);
                setTimeout(() => {
                    resolve();
                }, seconds);
            });
    });
};

myFetchAndSleep(url, 1000)
    .then(() => {
        console.log('1回目終了');
        return myFetchAndSleep(url, 1000);
    })
    .then(() => {
        console.log('2回目終了');
        return myFetchAndSleep(url, 1000);
    })
    .then(() => {
        console.log('3回目終了');
    });
