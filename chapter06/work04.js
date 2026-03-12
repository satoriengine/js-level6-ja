/*
ワーク04_最終問題

あらかじめ定義された通信用関数myFetchを利用して、特定の情報を
取得・表示するプログラムを完成させましょう。

通信用関数myFetch:
通信処理を行う関数myFetchが定義されています。関数myFetchは引数で
指定されたURLにアクセスして、<title>タグの文字列を取り出します。
関数myFetchは非同期で動作し、結果をPromiseオブジェクトで返します。

課題内容:
(1) 関数の呼び出し
定義済みの関数myFetchを呼び出してください。

引数：url（https://satori-api.vercel.app/hello）

(2) 結果の受け取り
関数myFetchの戻り値はPromiseです。thenメソッドを使用して、抽出された
タイトル情報を受け取ってください。

(3) 表示処理
受け取ったタイトル情報を表示してください。
続けて「通信処理終了」とコンソールに出力してください。

実行結果のように表示する処理を作成してください。

実行結果
Hello, World
通信処理終了
*/

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

// 通信処理関数myFetchが定義されています
function myFetch(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                const title = data.match('<title[^>]*>([^<]+)</title>')[1];
                resolve(title);
            });
    });
}

// 以下の部分にプログラムを作成します
// 通信処理関数myFetchを呼び出します
// 引数でurlを渡します。戻り値はPromiseオブジェクトです
// thenメソッドで処理を連結します
myFetch(url).then((data) => {
    console.log(data);
    console.log('通信処理終了');
});
