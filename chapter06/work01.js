/*
ワーク01_最終問題

以下のようなプログラムがありますが、未完成です。

以下のファイル「./data/data01.txt」があります。

/chapter06/data/data01.txt
```
London
Paris
Rome
Madrid
```

ファイル「./data/data01.txt」から非同期処理で
データを読み込んでください。読み込んだデータを
文字列として表示します。

実行結果のように表示する処理を作成してください。

ファイルを非同期で読み込む処理を作成します。
それ以外は修正してはいけません。

実行結果
London
Paris
Rome
Madrid
*/

// fsのインポート
import fs from 'node:fs';
// 読み込むファイル
const fileName = './data/data01.txt';
// 文字コード
const characterCode = 'utf8';

// 以下の部分に処理を作成します
// 非同期でファイルを読み込んで表示します
fs.readFile(fileName, characterCode, function (error, data) {
    if (error) {
        throw error;
    }
    console.log(data);
});
