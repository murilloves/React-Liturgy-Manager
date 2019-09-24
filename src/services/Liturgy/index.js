import axios from 'axios'
import { BASE_URL } from '../../constants'

const LiturgyService = {
  getLiturgyFromDate : (date) => {
    const ddMMyyyy = LiturgyService.getRawFormatDate(date);
    const res = axios.get(`${BASE_URL}liturgy/date?date=${ddMMyyyy}`)
    return res
  },

  setLiturgy : (obj) => {
    obj.date = LiturgyService.getRawFormatDate(obj.date);
    const res = axios.post(
      `${BASE_URL}liturgy/register`,
      obj
    )

    return res
  },

  tryGet : () => {
    const response = axios.get(`${BASE_URL}liturgy/test`)
    return response;
  },

  getRawFormatDate : (date) => {
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let year = date.getFullYear()

    return `${month}-${day}-${year}`
  }
}

export default LiturgyService
