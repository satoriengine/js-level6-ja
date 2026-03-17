/*
ワーク08_練習問題

以下のようなプログラムがありますが、未完成です。

以下のようなファイル「./data/data08.txt」があります。

/chapter01/data/data08.txt
```
Soccer
Tennis
Swimming
Basketball
```

ファイル「./data/data08.txt」から非同期処理で
データを読み込んでください。読み込んだデータを
文字列として表示します。

実行結果のように表示する処理を作成してください。

ファイルを非同期で読み込む処理を作成します。
それ以外は修正してはいけません。

実行結果
Soccer
Tennis
Swimming
Basketball
*/

// fsのインポート
import fs from 'node:fs';
// 読み込むファイル
const fileName = './data/data08.txt';
// 文字コード
const characterCode = 'utf8';

// 以下の部分に処理を作成します
// 非同期でファイルを読み込んで表示します
