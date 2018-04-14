import axios from 'axios'
export default {
  getData () {
    return axios.get('http://localhost:8080/frequency?freq=23&pf=44')
  }
}
