/*
ワーク09_練習問題

URLからJSON形式のデータを取得し、JavaScriptのオブジェクトとして出力しましょう。

【課題内容】
データの取得:
以下のURLに対してfetchを用いてアクセスしてください。

URL: https://satori-api.vercel.app/songs

取得できるデータ形式： JSON形式（楽曲情報の配列）

```
[
  {
    "title": "Spring Love",
    "artist": "Bob",
    "category": "Pop"
  },
  {
    "title": "Mighty sky",
    "artist": "Tom",
    "category": "Rock"
  },
  {
    "title": "You and I",
    "artist": "Alice",
    "category": "R&B"
  }
]
```

データの加工:
取得したJSONデータを、JavaScriptのプログラムで
操作可能な オブジェクト（配列） に変換してください。

結果の出力:
変換後の配列をconsole.logで表示してください。
実行結果のように表示する処理を作成してください。

実行結果
[
  { title: 'Spring Love', artist: 'Bob', category: 'Pop' },
  { title: 'Mighty sky', artist: 'Tom', category: 'Rock' },
  { title: 'You and I', artist: 'Alice', category: 'R&B' }
]
*/

// アクセスするURL
const url = 'https://satori-api.vercel.app/songs';

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
