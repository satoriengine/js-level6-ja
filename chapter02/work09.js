/*
ワーク09_練習問題

setIntervalを使用して、5から0まで1秒ごとに
カウントダウンを表示するプログラムを作成して
ください。

実行結果のように表示する処理を作成してください。

実行結果
<< 1秒待機 >>
5
<< 1秒待機 >>
4
<< 1秒待機 >>
3
<< 1秒待機 >>
2
<< 1秒待機 >>
1
<< 1秒待機 >>
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
