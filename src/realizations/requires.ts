import { charts } from './APIv1/tabs'
import { data } from './APIv0/data'

export async function req_APIv1() {
  // return fetch("http://localhost:6006/APIv1/tabs")
  // .then(response => response.json())
  return charts.charts
}

export async function req_APIv0() {
  // return fetch("http://localhost:6006/APIv0/data/1")
  // .then(response => response.json())
  return data
}
