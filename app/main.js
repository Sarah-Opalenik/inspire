import WeatherController from "./components/weather/weather-controller.js";
import TodoController from "./components/todo/todo-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import ImageController from "./components/image/image-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      quoteContoller: new QuoteController(),
      imageController: new ImageController()
    }
  }
}

window['app'] = new App()


// TODO need to add a counter for how many items on To-Do List