// 非同期処理によるファイル読み込み
// fsのインポート
import fs from 'node:fs';

// 読み込むファイル名
const fileName = './data/data01.txt';
// 文字コード
const characterCode = 'utf8';

// ファイルを非同期で読み込む
