/*
ワーク09_練習問題

setIntervalを使用して、5から0まで1秒ごとに
カウントダウンを表示するプログラムを作成して
ください。

実行結果のように表示する処理を作成してください。

実行結果
5
4
3
2
1
0
*/

let count = 5;

const timer = setInterval(function () {
    console.log(count);
    count--;
    if (count < 0) {
        clearInterval(timer);
    }
}, 1000);
