# RESTful な WebAPI を作成しました。

## shield.io と simpleicons の使い方

[shield.io](https://shields.io/badges/dynamic-toml-badge)  
[simpleicons](https://simpleicons.org/?q=Node)

template

```
![Static Badge](https://img.shields.io/badge/$(バッチ左の文字)-$(バッチ右の文字)-(バッチ右の文字の背景色).svg?style=plastic&logo=$(バッチ左側のアイコン：simpleiconsの名前))
```

## 本題

[【WebAPI 入門】RESTful な WebAPI を自作して API を理解しよう ~WebAPI 入門~](https://www.youtube.com/watch?v=9HXcaDQyWxA&t=19s)

### 技術スタック

![Static Badge](https://img.shields.io/badge/POSTMAN-000.svg?style=plastic&logo=Postman)
![Static Badge](https://img.shields.io/badge/Node.js-000.svg?style=plastic&logo=Node.js)
![Static Badge](https://img.shields.io/badge/Express-000.svg?style=plastic&logo=express)

# API とは

アプリケーション、ソフトウェア同士が通信し、データをやり取りするためのインターフェース。

# WebAPI

WEB API：インターネット経由、つまり HTTP を使ってウェブ上でデータや機能を交換する API。API の一種。  
fetch は、JS のメソッドで、Web API にアクセスしてリソースを取得するために使用する。fetch は、HTTP リクエストを行い、その結果を Promise として返す。
fetch はリクエストを送る手段。レスポンスを送ることで、特定のデータを返却し、変更をする。  
種類は、REST API, SOAP API, GraphQL などがある。

# RESTful API とは

WebAPI の一種。
REST:**Web サービス設計思想の一つ**  
REpresentational(代表的な)  
State(状態)  
Transfer(転送)

以下の４つの特徴を兼ね備えた WebAPI のこと
4 大設計ルール

1. アドレス可能性
   ある URL を使う事で一意のレスポンスが返ってくること。
2. 統一インターフェース
   HTTP リクエストメソッドの GET,POST,PUT,DELETE を用いる
   サーバーは Json 形式で返却
3. ステートレス性
   サーバーがクライアントの情報を持たない
4. 接続性
   Web のように広がる
