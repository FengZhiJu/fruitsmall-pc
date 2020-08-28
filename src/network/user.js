import request from "./request"

export function signup(username, password) {
  let param = new URLSearchParams()
  param.append('username', username)
  param.append('password', password)
  return request({
    url: '/user/signup',
    method: 'post',
    data: param,
  })
}

export function findUsername(username) {
  return request({
    url: 'user/find/' + username,
    method: 'post'
  })
}

export function sendLogin(username, password) {
  let param = new URLSearchParams()
  param.append('username', username)
  param.append('password', password)
  return request({
    url: '/user/login',
    method: 'post',
    data: param
  })
}

export function verifyLoginto() {
  return request({
    url: '/user/verifyLoginto',
    method: 'post'
  })
}

export function sendLogout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function code() {
  return request({
    url: '/getCode',
  })
}