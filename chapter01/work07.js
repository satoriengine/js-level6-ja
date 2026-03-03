// 配列を書き込む
// fsのインポート
import fs from 'node:fs';

// 書き込むファイル名
const fileName = './data/data07.txt';
// 文字コード
const characterCode = 'utf8';
// 書き込む配列
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

//配列を文字列に変換
const text = colors.join('\n');

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
