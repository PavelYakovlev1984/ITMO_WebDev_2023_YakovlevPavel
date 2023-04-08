import '@unocss/reset/tailwind.css';
import 'uno.css';

import Dom from './src/contants/dom';
const Tag = ['web', 'update', 'Disain'];
class TaskVO {
  constructor(title, data, tag) {
    this.title = title;
    this.data = data;
    this.stag = tag;
  }
}
// const task new TaskVO("read", Date.now());

const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTask = getDOM(DOM.Template.TASK);

const tasks = [];

getDOM(Dom.Button.CREATE_TASK).onclick = () => {
  console.log('> domPopupCreateTask.classList');
  const domPopupCreateTask = getDOM(Dom.Popup.CREATE_TASK);
  const domClosePopupCreateTask = QUERY(
    domPopupCreateTask,
    Dom.Button.CLOSE_POPUP_CREATE_TASK
  );
  const domBtnConfirm = QUERY(
    domPopupCreateTask,
    Dom.Button.CLOSE_POPUP_CREATE_TASK
  );

  domPopupCreateTask.classList.remove('hidden');
  domClosePopupCreateTask.onclick = () => {
    domPopupCreateTask.classList.add('hidden');
    domClosePopupCreateTask.onclick = null;

    domBtnConfirm.onclick = () => {
      console.log('vocn');
    };

    const taskVO = new TaskVO(randomString(12), Date.now(), Tags[0]);
    console.log(taskVO);
    const taskView = domTask.cloneNode(true);

    tasks.push(taskVO);
    QUERY(taskView, DOM.Template.Task.TITLE).innerText = taskVO.title;
    domTask.parentNode.prepend(taskView);
  };
};
