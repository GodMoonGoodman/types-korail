import Korail from '../src/korail'
import secrets from '../secrets.json'

(async () => {

  const k = new Korail(secrets.korailID, secrets.korailPW)
  const logedIn = await k.login()
  
  const results = await k.searchTrain('용산', '부산', new Date('2020-09-23'))

  k.reserve(results[0])
})()
