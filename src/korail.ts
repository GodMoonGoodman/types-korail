import Axios from 'axios'
import { trainResponse } from './index'
import { KORAIL_SEARCH_SCHEDULE, KORAIL_LOGIN, DEFAULT_USER_AGENT, KORAIL_TICKETRESERVATION } from './url'
import FormData from 'form-data'
import { date2string } from './helper/dateParser'
import Train from './train'
export { default as SeatType } from './seatType'

class Korail {
  korailID: String
  korailPW: String
  autoLogin: Boolean

  cookies = []
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

  
    const { data, headers } = await Axios.request({
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
      this.cookies = headers['set-cookie']
      this._key = data.Key
      this.logedIn = true
    }

    return this.logedIn
  }

  async searchTrain(departure: string, arrival: string, date: Date, seatType: string = '015') {


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
      txtSeatAttCd_4: seatType, // 일반석
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
      console.log(data.trn_infos.trn_info)
      return data.trn_infos.trn_info.map(train => new Train(train))
    }

    return []

  }

  async reserve(train: Train) {
    const params = {
      Device: this._device,
      Key: this._key,
      Version: this._version,
      txtGdNo: '',
      txtJobId: '1101',
      txtTotPsgCnt: 1,
      txtSeatAttCd1: '000',
      txtSeatAttCd2: '000',
      txtSeatAttCd3: '000',
      txtSeatAttCd4: '015',
      txtSeatAttCd5: '000',
      hidFreeFlg: 'N',
      txtStndFlg: 'N',
      txtMenuId: '11',
      txtSrcarCnt: '0',
      txtJrnyCnt: '1',


      // 이하 여정정보1
      txtJrnySqno1: '001',
      txtJrnyTpCd1: '11',
      txtDptDt1: train.dep_date,
      txtDptRsStnCd1: train.dep_code,
      txtDptTm1: train.dep_time,
      txtArvRsStnCd1: train.arr_code,
      txtTrnNo1: train.train_no,
      txtRunDt1: train.run_date,
      txtTrnClsfCd1: train.train_type,
      txtPsrmClCd1: '1', // 일반석 온리
      txtTrnGpCd1: train.train_group,
      txtChgFlg1: '',

      txtPsgTpCd1: '1',
      txtDiscKndCd1: '000',
      txtCompaCnt1: '1',
      txtCardCode_1: '',
      txtCardNo_1: '',
      txtCardPw_1: ''

      // 이하 txtTotPsgCnt 만큼 반복
      // # 'txtPsgTpCd1'    : '1',   #손님 종류 (어른, 어린이)
      // # 'txtDiscKndCd1'  : '000', #할인 타입 (경로, 동반유아, 군장병 등..)
      // # 'txtCompaCnt1'   : '1',   #인원수
      // # 'txtCardCode_1'  : '',
      // # 'txtCardNo_1'    : '',
      // # 'txtCardPw_1'    : '',
    }

    const { data } = await Axios.request({
      method: 'get',
      url: KORAIL_TICKETRESERVATION,
      headers: {
        'Content-Type': 'application/json', 
        'User-Agent': DEFAULT_USER_AGENT,
        'cookie': this.cookies[0]
      },
      params
    })
    console.log(data)
  }

}


export default Korail