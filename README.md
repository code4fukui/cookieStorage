# cookieStorage

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, `localStorage`-like API for storing data in browser cookies. This provides a familiar interface for client-side storage but with the ability to set expiration dates.

## Demo

[View the demo](https://code4fukui.github.io/cookieStorage/) which compares `cookieStorage` with `localStorage`.

## Features

-   Provides a `localStorage`-compatible API (`setItem`, `getItem`, `removeItem`, `clear`).
-   Allows setting a custom expiration duration for each item.
-   Defaults to a long-term expiration (20 years).
-   Automatically sets the `Secure` attribute on HTTPS sites.
-   Sets `SameSite=Strict` by default for enhanced security.

## Usage

Import the ES module:

```javascript
import { cookieStorage } from './cookieStorage.js';
```

### API

#### `cookieStorage.setItem(key, value, days?)`

Sets a value for a given key. The optional `days` parameter specifies the cookie's lifetime in days. If omitted, it defaults to 20 years.

```javascript
// Set an item that expires in 1 year
cookieStorage.setItem('theme', 'dark', 365);

// Set an item with the default 20-year expiration
cookieStorage.setItem('session_id', 'abc-123');
```

#### `cookieStorage.getItem(key)`

Retrieves the value for a given key. Returns `null` if the key is not found.

```javascript
const theme = cookieStorage.getItem('theme'); // "dark"
```

#### `cookieStorage.removeItem(key)`

Removes the item for a given key.

```javascript
cookieStorage.removeItem('theme');
```

#### `cookieStorage.clear()`

Removes all cookies managed by the application.

```javascript
cookieStorage.clear();
```

### Configuration

You can change the `SameSite` attribute by editing the `simesite` constant at the top of `cookieStorage.js`.

```javascript
// In cookieStorage.js
const simesite = "Strict"; // or "Lax"
```

## License

[MIT](LICENSE)