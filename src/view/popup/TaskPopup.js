class TaskPopup {
  #title;
  #confirmText;
  confirmCallback;
  constructor(title, confirmText, confirmCallback);
  this.#title = title;
  this.#confirmText = confirmText;
  this.#confirmCallback = confirmCallback;



  render() {
    const div = document.createElement('div');

    return div.firstChild;
  }
}

export default TaskPopup;