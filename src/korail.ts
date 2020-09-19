import Axios, { AxiosInstance } from 'axios'
import { LoginPayload, trainResponse } from './index'
import { KORAIL_SEARCH_SCHEDULE, KORAIL_LOGIN, DEFAULT_USER_AGENT } from './url'
import FormData from 'form-data'
import { date2string } from './helper/dateParser'
import Train from './train'

class Korail {
  korailID: String
  korailPW: String
  autoLogin: Boolean
  
  logedIn =  false

  _device = 'AD'
  _version = '190617001'
  _key = 'korail1234567890'

  constructor(korailID: String, korailPW: String, autoLogin: Boolean = false) {
    this.korailID = korailID
    this.korailPW = korailPW
    
    this.autoLogin = autoLogin

    if (autoLogin) {
      this.login()
    }
  }

  async login(): Promise<Boolean> {
    const { korailID, korailPW } = this

    var payload = new FormData();
    payload.append('Device', this._device);
    payload.append('Version', '150718001');
    payload.append('txtInputFlg', '2');
    payload.append('txtMemberNo', korailID);
    payload.append('txtPwd', korailPW);

  
    const { data } = await Axios.request({
      method: 'post',
      url: KORAIL_LOGIN,
      headers: {
        'Content-Type': 'application/json', 
        'User-Agent': DEFAULT_USER_AGENT,
        ...payload.getHeaders()
      },
      data : payload
    })

    if (data.strResult === 'SUCC' && 'strMbCrdNo' in data) {
      this.logedIn = true
    }

    return this.logedIn
  }

  async searchTrain(departure: string, arrival: string, date: Date) {


    const params = {
      Device: this._device,
      radJobId: 1,
      selGoTrain: '109',
      txtCardPsgCnt: 0,
      txtGdNo: '',
      txtGoAbrdDt: date2string(date),
      txtGoHour: '000000',
      txtGoEnd: arrival,
      txtGoStart: departure,
      txtJobDv: '',
      txtMenuId: 11,
      txtPsgFlg_1: 1, // 어른,
      txtPsgFlg_2: 0, // 어린이,
      txtPsgFlg_3: 0, // 경로
      txtPsgFlg_4: 0, // 장애인1
      txtPsgFlg_5: 0, // 장애인2
      txtSeatAttCd_2: '000',
      txtSeatAttCd_3: '000',
      txtSeatAttCd_4: '015',
      txtTrnGpCd: '109',
      Version: this._version
    }

    interface response {
      data: {
        strResult: string,
        trn_infos: {
          trn_info: Array<trainResponse>
        }
      }
    }

    const { data }: response = await Axios.request({
      method: 'get',
      url: KORAIL_SEARCH_SCHEDULE,
      headers: {
        'Content-Type': 'application/json', 
        'User-Agent': DEFAULT_USER_AGENT
      },
      params
    })

    if (data['strResult'] === 'SUCC') {

      return data.trn_infos.trn_info.map(train => new Train(train))
    }

    return []

  }

  async reserve(train: Train) {

  }
}


export default Korail