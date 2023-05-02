class NetworkService {
  constructor(url) {
    this.#url = url;
  }
  retriveFromPath(path) {
    return fetch(`${this.#url}/${path}`).then(
      (respons) => response.ok && response.json()
    );
  }
  post() {}
  delete() {}
  put() {}
}
