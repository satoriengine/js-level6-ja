// 読み込みデータを配列に変換
// fsのインポート
import fs from 'node:fs';

// 読み込むファイル名
const fileName = './data/data04.txt';
// 文字コード
const characterCode = 'utf8';

console.log('1:処理開始');

// ファイルを非同期で読み込む
fs.readFile(fileName, characterCode, function (error, data) {
    // 何らかのエラーの場合
    if (error) {
        throw error;
    }
    console.log('3:ファイルの表示処理開始');
    // 読み込んだ文字列を配列に分割
    const names = data.trim().split('\n');
    // 配列の表示
    console.log(names);
    console.log('4:処理終了');
});

console.log('2:プログラムの最後');
