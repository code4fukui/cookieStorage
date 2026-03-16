# cookieStorage

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

cookieStorage is a library to save small data on the client via Cookies.

## Demo
[Demo](https://code4fukui.github.io/cookieStorage/)

## Features
- Saves data using browser cookies
- Provides methods to set, get, remove, and clear cookie-stored data
- Automatically sets the cookie's `SameSite` attribute to `Strict` or `Lax`
- Sets the `Secure` attribute for HTTPS connections

## Usage
To use the library, import the `cookieStorage` object and call its methods:

```javascript
import { cookieStorage } from './cookieStorage.js';

// Set an item
cookieStorage.setItem('key', 'value');

// Get an item
const value = cookieStorage.getItem('key');

// Remove an item
cookieStorage.removeItem('key');

// Clear all items
cookieStorage.clear();
```

## License
MIT License — see [LICENSE](LICENSE).