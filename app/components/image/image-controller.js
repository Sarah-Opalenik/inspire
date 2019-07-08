import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
  let image = _is.Image
  document.body.style.backgroundImage = `url(${image})`
}

export default class ImageController {
  constructor() {
    _is.getImage()
    _is.addSubscriber('image', drawImage)
  }
}

