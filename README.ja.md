# cookieStorage

cookieStrorage は、Cookieを使ってクライアント上に小さなデータを保存するためのライブラリです。

## 機能
- cookieにデータを保存/取得/削除できる
- 有効期限を設定できる
- Secure属性やSameSite属性を設定できる

## 使い方
cookieStorage.js をインポートして、以下のように使用します。

```javascript
import { cookieStorage } from "./cookieStorage.js";

// データの保存
cookieStorage.setItem("key", "value", 365); // 1年間有効

// データの取得
const value = cookieStorage.getItem("key");

// データの削除
cookieStorage.removeItem("key");

// 全データの削除
cookieStorage.clear();
```

## ライセンス
MIT License