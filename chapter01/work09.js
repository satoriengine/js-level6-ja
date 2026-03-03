/*
ワーク09_練習問題

以下のようなプログラムがありますが、未完成です。

以下のようなファイル「./data/data09.txt」があります。

/chapter01/data/data09.txt
```
Canada
Brazil
Mexico
Paraguay
```

ファイル「./data/data09.txt」から非同期処理でデータを
読み込んでください。読み込んだデータを改行区切りで
配列に変換して表示します。

実行結果のように表示する処理を作成してください。

ファイルを非同期で読み込む処理を作成します。
それ以外は修正してはいけません。

実行結果
[ 'Canada', 'Brazil', 'Mexico', 'Paraguay' ]
*/

// fsのインポート
import fs from 'node:fs';
// 読み込むファイル
const fileName = './data/data09.txt';
// 文字コード
const characterCode = 'utf8';

// 以下の部分に処理を作成します
// 非同期でファイルを読み込みます
// 読み込んだデータを配列に変換して表示します
fs.readFile(fileName, characterCode, function (error, data) {
    if (error) {
        throw error;
    }
    const nations = data.trim().split('\n');
    console.log(nations);
});
