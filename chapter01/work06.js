// 同期処理によるファイル書き込み
// fsのインポート
import fs from 'node:fs';

// 書き込むファイル名
const fileName = 'data6.txt';
// 文字コード
const characterCode = 'utf8';
// 書き込む文字列
const text = 'My name is Alice';

console.log('1:処理開始');

// ファイルを同期で書き込む
fs.writeFileSync(fileName, text, characterCode);

console.log('2:プログラムの最後');
