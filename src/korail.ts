import Axios, { AxiosInstance } from 'axios'
import { LoginPayload } from './index'
import { KORAIL_MOBILE, KORAIL_LOGIN, DEFAULT_USER_AGENT } from './url'
import FormData from 'form-data'

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

  async login() {
    const { korailID, korailPW } = this

    var payload = new FormData();
    payload.append('Device', 'AD');
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
}


export default Korail