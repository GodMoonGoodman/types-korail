import Korail, { SeatType } from '../src/korail'
import secrets from '../secrets.json'

(async () => {

  const k = new Korail(secrets.korailID, secrets.korailPW)
  const logedIn = await k.login()
  if (logedIn) {
    const results = await k.searchTrain('평내호평', '용산', new Date(), SeatType.general)
    k.reserve(results[9])
  }
  
})()
