class TasksModal {
  #tasks = [];
  #updateCallbacks = [];
  constructor() {}
  set tasks(value) {
    this.#tasks = value;
    this.#updateCallbacks.forEach((c) => c(this.#tasks));
  }

  addUpdateCallback(callback) {
    if (!callback || !(callback instanceof Function)) throw new Error(`Wrong`);
    this.#updateCallbacks.push(callback);
  }
}
export default TasksModal;
