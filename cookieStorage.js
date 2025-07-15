const simesite = "Strict";
//const simesite = "Lax";

export const cookieStorage = {
  setItem: function (key, value, days = 365 * 20) { // 20year
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    let cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=${simesite}`;
    if (location.protocol === "https:") {
      cookie += "; Secure";
    }
    document.cookie = cookie;
  },
  getItem: function (key) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [k, v] = cookie.split("=");
      if (decodeURIComponent(k) === key) {
        return decodeURIComponent(v);
      }
    }
    return null;
  },
  removeItem: function (key) {
    console.log("remm", key)
    let cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=${simesite}`;
    if (location.protocol === "https:") {
      cookie += "; Secure";
    }
    document.cookie = cookie;
  },
  clear: function () {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [k] = cookie.split("=");
      this.removeItem(decodeURIComponent(k));
    }
  },
};
