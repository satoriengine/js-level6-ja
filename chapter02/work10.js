/*
ワーク10_練習問題

定義されている関数sleepを利用して、指定した時間が経過した後に
メッセージを表示するプログラムを作成してください。以下の要件に
従ってプログラムを作成してください。

要件：
関数sleepを呼び出し、2秒後に「I am Bob」と表示します。
関数sleepを呼び出し、4秒後に「I am Alice」と表示します。

関数sleepの第1引数として、待機時間（ミリ秒）を渡します。
関数sleepの第2引数として、コールバック関数を渡します。
第2引数のコールバック関数で表示処理を行います。

実行結果のように表示する処理を作成してください。

実行結果
I am Bob
I am Alice

*/

// 非同期処理を呼び出すアロー関数の定義
const sleep = (seconds, callback) => {
    // 非同期処理の呼び出し
    setTimeout(callback, seconds);
};

// 以下の部分に処理を作成します
sleep(2000, () => console.log('I am Bob'));
sleep(4000, () => console.log('I am Alice'));
