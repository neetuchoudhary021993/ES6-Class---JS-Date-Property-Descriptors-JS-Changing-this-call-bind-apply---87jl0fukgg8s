//Write your code here
class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#setSecure();
  }

  #setSecure() {
    this.#secure = this.url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateURL(newURL) {
    this.url = newURL;
    this.#setSecure();
  }
}

// // Example usage:
// const s = new API('http://api.com/api/hello');
// console.log(s.isSecure()); // false

// s.updateURL('https://api.com/api/hello');
// console.log(s.isSecure()); // true

// console.log(s.url); // https://api.com/api/hello


//Do not remove this code
module.exports = { API }
