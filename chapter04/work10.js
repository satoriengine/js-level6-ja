/*
ワーク10_練習問題

以下のような関数myFetchAndSleepが定義されています。

関数myFetchAndSleepはPromiseとsetTimeoutを利用して
非同期処理（APIからのデータ取得）と、指定した時間の待機を
組み合わせた動作を行います。

【課題内容】
データの取得:
以下のURLに対して、関数myFetchAndSleepを用いてアクセスして
ください。

URL: https://satori-api.vercel.app/

取得できるデータ形式：

```
Hello, Bob
```

処理の連結（Promiseチェーン）:
関数myFetchAndSleepを利用して、「データ取得 => 2秒待機」を
3回連続で行ってください。

終了処理:
全ての処理（3回の繰り返し）が完了した後に、console.logで
「終了」と表示してください。

ヒント：
関数myFetchAndSleepの第1引数はURLを指定します。第2引数は
待機時間をミリ秒で指定します。今回は2秒待機するので、2000を
指定します。
関数myFetchAndSleepの戻り値に対して、thenで処理を連結します。
その処理を3回繰り返します。
3回目のthenの処理で「終了」を表示します。

関数myFetchAndSleepを修正してはいけません。
実行結果のように表示する処理を作成してください。

実行結果
Hello, Bob
<< 2秒待機 >>
Hello, Bob
<< 2秒待機 >>
Hello, Bob
<< 2秒待機 >>
終了
*/

// アクセスするURL
const url = 'https://satori-api.vercel.app/';

const myFetchAndSleep = (url, seconds) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                console.log(data);
                setTimeout(() => {
                    resolve();
                }, seconds);
            });
    });
};

myFetchAndSleep(url, 2000)
    .then(() => {
        return myFetchAndSleep(url, 2000);
    })
    .then(() => {
        return myFetchAndSleep(url, 2000);
    })
    .then(() => {
        console.log('終了');
    });
