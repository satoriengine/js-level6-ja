/*
ワーク10_練習問題

以下のようなプログラムがありますが、未完成です。

以下のようなファイル「./data/data10.txt」がありますが、
ファイルは空です。

/chapter01/data/data10.txt
```
```

変数colorsの要素を改行で連結した文字列にします。
ファイル「./data/data10.txt」に非同期でデータを
書き込んでください。

実行結果として何も表示しませんが、ファイル「./data/data10.txt」に
以下のように書き込みます。

ファイルに非同期で書き込む処理を作成します。
それ以外は修正してはいけません。

実行結果
何も表示しない

/chapter01/data/data10.txt
```
Guitar
Piano
Violin
Drums
```
*/

// fsのインポート
import fs from 'node:fs';
// 書き込むファイル
const fileName = './data/data10.txt';
// 文字コード
const characterCode = 'utf8';
// 書き込む配列
const colors = ['Guitar', 'Piano', 'Violin', 'Drums'];

// 以下の部分に処理を作成します
// 配列の要素を改行で連結した文字列にします
const text = colors.join('\n');
// 非同期でファイルに書き込みます
fs.writeFile(fileName, text, characterCode, function (error) {
    if (error) {
        throw error;
    }
});
