import request from "./request"

export function baseCart(url, fruits, count, site, isFinish = false) {
  let param = new URLSearchParams()
  let discount = fruits.decorate ? 0.6 : 1;
  let totalPrice = (fruits.price * discount * count).toFixed(2) * 1;
  param.append('fruits', fruits.id)
  param.append('count', count)
  param.append('totalPrice', totalPrice)
  param.append('isFinish', isFinish)
  param.append('timestamp', fruits.timestamp)

  url == 'addCart' && param.append('site', site);
  return request({
    url: '/cart/' + url,
    method: 'post',
    data: param
  })
}

export function removeCart(fruits) {
  let param = new URLSearchParams()
  console.log(fruits);

  param.append('fruits', fruits.id)
  param.append('timestamp', fruits.timestamp)
  return request({
    url: '/cart/removeCart',
    method: 'post',
    data: param
  })
}

export function buyGoods(fruits) {
  let param = new URLSearchParams()
  console.log(fruits);
  param.append('fruits', JSON.stringify(fruits))
  return request({
    url: '/cart/buyGoods',
    method: 'post',
    data: param
  })
}

export function elseGoods() {
  return request({
    url: '/cart/elseGoods',
  })
}