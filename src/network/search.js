import request from "./request"

export function getSearchData(belong) {
  return request({
    url: '/search/' + belong
  })
}

export function getSearchEntry(entry) {
  return request({
    url: '/search/filter/' + entry
  })
}