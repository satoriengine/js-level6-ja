/*
ワーク08_練習問題

指定されたURLから果物のデータを取得し、プログラムで
扱いやすい形式に加工しましょう。

【課題内容】
データの取得:
以下のURLにfetchを利用してアクセスし、データを取得して
ください。

URL: https://satori-api.vercel.app/fruits

取得できるデータ形式：
"apple/orange/melon/banana" （スラッシュ区切りの文字列）

データの加工:
取得した文字列をスラッシュ（/）で分割し、配列に
変換してください。

結果の出力:
変換後の配列をconsole.logで表示してください。実行結果の
ように表示する処理を作成してください。

実行結果
[ 'apple', 'orange', 'melon', 'banana' ]
*/

// アクセスするURL
const url = 'https://satori-api.vercel.app/fruits';

// fetchを利用してURLにアクセスしてデータ取得
