// 非同期処理の実行順序
// fsのインポート
import fs from 'node:fs';

// 読み込むファイル名
const fileName = 'data2.txt';
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
    // ファイルデータの表示
    console.log(data);
    console.log('4:処理終了');
});

console.log('2:プログラムの最後');
