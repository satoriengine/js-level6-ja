// 非同期処理の実行順序
// fsのインポート
import fs from 'node:fs';

// 読み込むファイル名
const fileName = './data/data02.txt';
// 文字コード
const characterCode = 'utf8';

console.log('1:処理開始');

// ファイルを非同期で読み込む
