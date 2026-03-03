// 非同期処理によるファイル書き込み
// fsのインポート
import fs from 'node:fs';

// 書き込むファイル名
const fileName = './data/data05.txt';
// 文字コード
const characterCode = 'utf8';
// 書き込む文字列
const text = 'Hello, I am Bob';

console.log('1:処理開始');

// ファイルを非同期で書き込む
fs.writeFile(fileName, text, characterCode, function (error) {
    // 何らかのエラーの場合
    if (error) {
        throw error;
    }
    console.log('3:処理終了');
});

console.log('2:プログラムの最後');
