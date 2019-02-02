// Mocking client-server processing

import _products from './products.json'

const TIMEOUT = 100

export default {
  receiveProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
}
