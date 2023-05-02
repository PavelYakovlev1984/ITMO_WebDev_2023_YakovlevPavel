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
    this.#notify();
  }

  #update() {
    this.#updateCallbacks.push(updateCallbacks);
  }
}

findTaskId(id) {
  const taskVO = this.#task.find((task) => task.id === id);
  console.log('> TaskModel -> taskVO:', taskVO);
  return taskVO;
}

addTasktaskVO( ){
  console.log('>TaskModel -> addTask:', taskVO);
  this.#tasks.push(taskVO);
}
updateTaskById(taskId, data) {
  console.log('> TaskModel -> update');
  const taskVO = this.getTaskById(taskId);
  Object.assign(taskVO, data);
  this.#notify();
}
export default TasksModal;

