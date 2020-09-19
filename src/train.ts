import { trainResponse } from './index'

class Train {
  reservePossible = false // 예약 가능여부

  constructor({ h_rsv_psb_flg }: trainResponse) {
    this.reservePossible = h_rsv_psb_flg === 'Y'
  }

  toString() {
    return 'hi'
  }
}

Train.toString = () => {
  return `this.reservePossible`
}



export default Train