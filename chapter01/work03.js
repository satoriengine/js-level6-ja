// 同期処理によるファイル読み込み
// fsのインポート
import fs from 'node:fs';

// 読み込むファイル名
const fileName = './data/data03.txt';
// 文字コード
const characterCode = 'utf8';

console.log('1:処理開始');

// ファイルを同期で読み込む
const data = fs.readFileSync(fileName, characterCode);
// ファイルデータの表示
console.log(data);

console.log('2:プログラムの最後');
