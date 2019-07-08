import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let quoteElem = document.querySelector("#quote")
  let quote = _qs.Quote
  quoteElem.innerHTML = quote.Template
}
export default class QuoteController {
  constructor() {
    _qs.getQuote()
    _qs.addSubscriber('quote', drawQuote)
  }
}
