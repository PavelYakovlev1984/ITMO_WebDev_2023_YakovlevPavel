import TaskVO from '../model/vo/TaskVO.js';

class TasksController {
  #model;
  constructor(model) {
    this.#model = model;
  }

  async retrieveTasks() {
    this.#model.tasks = await fetch('http://localhost:3000/tasks')
      .then((response) => response.ok && response.json())
      .then((rawTasks) => {
        if (rawTasks && rawTasks instanceof Array) {
          console.log('json', rawTasks);
          return rawTasks.map((json) => TaskVO.fromJSON(json));
        } else {
          window.alert('Problem with data parsing, try refresh later');
          return [];
        }
      })
      .catch((e) => {
        window.alert('Server error:' + e.toString());
        return [];
      });
  }

  deleteTask(taskId) {
    console.log('> TaskController');
  }
  createTask(taskTitle, taskDate, taskTags) {
    console.log('> Create task -> On Confirm');

    return fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: taskTitle,
        date: taskDate,
        tags: taskTags,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const taskVO = TaskVO.fromJSON(data);
        this.#model.addTask(taskVO);
      })
      .catch((e) => {
        console.error('>');
        throw new Error(e.toString());
      });

    const taskId = `task_${Date.now()}`;
    const taskVO = new TaskVO(taskId, taskTitle, taskDate, taskTags);

    // renderTask(taskVO);
    // tasks.push(taskVO);
    //
    // saveTask();
  }
}

export default TasksController;
