import axios from 'axios'
// import URL from '../../constants'

const LiturgyService = {
  getLiturgyFromDate : (date) => {
    return new Date(date)
  },

  setLiturgy : (liturgy) => {
    return new Date('11/14/1990')
  },

  tryGet : () => {
    const response = axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return response;
  }
}

export default LiturgyService
