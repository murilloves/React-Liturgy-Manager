import axios from 'axios'
import { BASE_URL } from '../../constants'

const SaintsService = {
  getSaintsFromDate : (date) => {
    const ddMMyyyy = SaintsService.getRawFormatDate(date);
    const res = axios.get(`${BASE_URL}saints/date?date=${ddMMyyyy}`)
    return res
  },

  setSaints : (obj) => {
    obj.date = SaintsService.getRawFormatDate(obj.date);
    const res = axios.post(
      `${BASE_URL}saints/register`,
      obj
    )

    return res
  },

  deleteSaints : (_id) => {
    const res = axios.delete(
      `${BASE_URL}saints/${_id}`,
    )
    return res
  },

  tryGet : () => {
    const response = axios.get(`${BASE_URL}saints/test`)
    return response;
  },

  getRawFormatDate : (date) => {
    date = new Date(date)

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
    let year = date.getFullYear()

    return `${month}-${day}-${year}`
  }
}

export default SaintsService
