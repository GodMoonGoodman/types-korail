import Korail, { SeatType } from '../src/korail'
import secrets from '../secrets.json'

(async () => {

  const k = new Korail(secrets.korailID, secrets.korailPW)
  // const logedIn = await k.login()
  
  const results = await k.searchTrain('서울', '부산', new Date(), SeatType.general)

  console.log(results.map(row => row.toString()))
})()
