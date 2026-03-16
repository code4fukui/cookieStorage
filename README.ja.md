# cookieStorage

cookieStorageは、Cookieを使ってクライアント上に小さなデータを保存するためのJavaScriptライブラリです。

## 機能
- Cookieにデータを保存、取得、削除できます
- Cookieの有効期限を設定できます
- Secure属性やSameSite属性を設定できます

## 使い方
cookieStorage.jsをインポートして、以下のように使用します。

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