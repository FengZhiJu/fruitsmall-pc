import request from "./request"

export function sendMessage(message) {
  let params = new URLSearchParams();
  params.append('message', message)
  return request({
    url: '/message/addMessage',
    method: 'post',
    data: params
  })
}

export function getAllMessage() {
  return request({
    url: '/message/getAllMessage',
    method: 'post'
  })
}