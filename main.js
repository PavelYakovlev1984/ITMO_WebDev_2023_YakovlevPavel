import 'uno.css';
import '@unocss/reset/tailwind.css';
import DOM from './src/contants/dom';
import { randomString } from './src/utils/stringsUtils.js';

const KEY_LOCAL_TASKS = 'tasks';

const Tags = ['Web', 'Update', 'Design', 'Content'];

class TaskVO {
  static fromJSON(json) {
    return new TaskVO(json.id, json.title, json.date, json.tag);
  }
  constructor(id, title, date, tag) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.tag = tag;
  }
}

// const task = new TaskVO("Read", Date.now(), Tags[0]);

const QUERY = (container, id) => container.querySelector([(id = '${id}')]);

const domTaskColumn = domTemplateTask.parentNode;
domTemplateTask.remove();
const getDOM = (id) => document.getElementById(id);
domTaskColumn.onclick = (e) => {
  console.log(e.target);
};
const domTemplateTask = getDOM(DOM.Template.TASK);

const rawTasks = localStorage.getItem(KEY_LOCAL_TASKS);

const tasks = rawTasks
  ? JSON.parse(rawTasks).map((json) => TaskVO.fromJSON(json))
  : [];
tasks.forEach((taskVO) => renderTask(taskVO));
console.log('> tasks', tasks);

getDOM(DOM.Button.CREATE_TASK).onclick = () => {
  console.log('> domPopupCreateTask.classList');

  const domPopupCreateTask = getDOM(DOM.Popup.CREATE_TASK);
  const domBtnClose = QUERY(
    domPopupCreateTask,
    DOM.Button.POPUP_CREATE_TASK_CLOSE
  );
  const domBtnConfirm = QUERY(
    domPopupCreateTask,
    DOM.Button.POPUP_CREATE_TASK_CONFIRM
  );
  const domInputTitle = getDOM(DOM.Popup.Input.INFO_TITLE);
  // const domCreateDate = getDOM(DOM.Popup.Input.USER_DATE);

  domPopupCreateTask.classList.remove('hidden');
  const onClosePopup = () => {
    domPopupCreateTask.classList.add('hidden');
    domBtnClose.onclick = null;
    domBtnConfirm.onclick = null;
  };

  domBtnConfirm.onclick = () => {
    const taskId = `task_${Date.now()}`;
    let titleInfo = domInputTitle.value;
    domInputTitle.innerHTML = titleInfo;

    const taskVO = new TaskVO(titleInfo, Date.now(), Tags[0]);

    renderTask(taskVO);

    tasks.push(taskVO);

    localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));

    onClosePopup();
  };
};

domTitle.innerText = popupTitle;

function renderTask(taskVO) {
  const domTaskClone = domTemplateTask.cloneNode(true);
  domTaskClone.dataset.id = taskVO.id;
  QUERY(domTaskClone, DOM.Template.Task.TITLE).innerHTML = taskVO.title;
  domTaskColumn.prepend(domTaskClone);
}

function onCreateTaskClick() {
  const taskId = `task_${Date.now()}`;
  const taskTitle = randomString(12);
}
// function renderTaskPopup =
