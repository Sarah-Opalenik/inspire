export default class ToDo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get Template() {
    let template =
      `<div class="row">
      <div class="col-7">
      <div class="card todo-item m-2 p-2">
        <li><h5>${this.description}</h5>
        <button class="btn btn-success btn-block" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Complete Task</button>
        </li>
      </div>
      </div>
      </div>

    `
    if (this.completed == true) {
      template = `
      <div class="card todo-item m-2 p-2">
        <li><h5>${this.description}</h5></li>
        <button class="btn btn-warning" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Are you sure?</button>
        <button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Yes I'm sure</button>
      </div>
    `
    }
    return template
  }
}
