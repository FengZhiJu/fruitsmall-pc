import request from "./request"

export function getHomeShowData() {
  return request({
    url: '/home'
  })
}