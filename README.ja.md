# cookieStorage

ブラウザのCookieにデータを保存するための、`localStorage`ライクなシンプルなAPIです。クライアントサイドストレージとして馴染みのあるインターフェースを提供しつつ、有効期限の設定が可能です。

## デモ

`cookieStorage` と `localStorage` を比較できる [デモはこちら](https://code4fukui.github.io/cookieStorage/) です。

## 機能

- `localStorage` 互換のAPIを提供 (`setItem`, `getItem`, `removeItem`, `clear`)。
- アイテムごとに任意の有効期限を設定可能。
- デフォルトで長期の有効期限（20年）を設定。
- HTTPSサイトでは自動的に `Secure` 属性を付与。
- セキュリティ強化のため、デフォルトで `SameSite=Strict` を設定。

## 使い方

ESモジュールをインポートします。

```javascript
import { cookieStorage } from './cookieStorage.js';
```

### API

#### `cookieStorage.setItem(key, value, days?)`

指定したキーに値を設定します。オプションの `days` パラメータでCookieの有効期限を日数で指定できます。省略した場合はデフォルトで20年となります。

```javascript
// 1年後に有効期限が切れるアイテムを設定
cookieStorage.setItem('theme', 'dark', 365);

// デフォルトの有効期限（20年）でアイテムを設定
cookieStorage.setItem('session_id', 'abc-123');
```

#### `cookieStorage.getItem(key)`

指定したキーの値を取得します。キーが見つからない場合は `null` を返します。

```javascript
const theme = cookieStorage.getItem('theme'); // "dark"
```

#### `cookieStorage.removeItem(key)`

指定したキーのアイテムを削除します。

```javascript
cookieStorage.removeItem('theme');
```

#### `cookieStorage.clear()`

アプリケーションで管理されているすべてのCookieを削除します。

```javascript
cookieStorage.clear();
```

### 設定

`cookieStorage.js` の先頭にある `simesite` 定数を編集することで、`SameSite` 属性を変更できます。

```javascript
// cookieStorage.js 内
const simesite = "Strict"; // または "Lax"
```

## ライセンス

[MIT](LICENSE)
