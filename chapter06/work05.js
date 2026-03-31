/*
ワーク05_最終問題

async/await を利用して、非同期処理の結果を同期処理のように
扱うプログラムを完成させましょう。

通信用関数myFetch:
通信処理を行う関数myFetchが定義されています。関数myFetchは
async関数です。関数myFetchは引数で指定されたURLにアクセスして、
<title>タグの文字列を取り出します。非同期で動作し、結果を
Promiseオブジェクトで返します。

課題内容:
(1) 関数の呼び出し
定義済みの関数myFetchを呼び出してください。

引数：url（https://satori-api.vercel.app/hello）

(2) 結果の受け取り（待機）
await演算子を使用して、関数myFetchから返される Promiseが
解決するまで待機します。抽出されたタイトル情報（文字列）を
変数に代入してください。

(3) 表示処理
受け取ったタイトル情報を表示してください。

実行結果のように表示する処理を作成してください。

実行結果
Hello, World
*/

// アクセスするURL
const url = 'https://satori-api.vercel.app/hello';

// 通信処理関数myFetchが定義されています
async function myFetch(url) {
    const response = await fetch(url);
    const data = await response.text();
    const title = data.match('<title[^>]*>([^<]+)</title>')[1];
    return title;
}

// 以下の部分にプログラムを作成します
// 通信処理関数myFetchを呼び出します
// 引数でurlを渡します。戻り値はPromiseオブジェクトです
// awaitで非同期処理が完了するまで待機します
// 戻り値を表示します
