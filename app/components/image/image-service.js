// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

function setState(propName, data) {
	_state[propName] = data
	_subscriber[propName].forEach(fn => fn())
}

let _state = {
	image: {}
}

let _subscriber = {
	image: []
}

export default class ImageService {
	getImage() {
		imgApi.get()
			.then(res => {
				let image = res.data.large_url
				setState('image', image)
			})
	}
	addSubscriber(propName, fn) {
		_subscriber[propName].push(fn)
	}
	get Image() {
		return _state['image']
	}
}
