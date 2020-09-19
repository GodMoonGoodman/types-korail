import Korail from '../src/korail'

(async () => {

  const k = new Korail('<코레일아이디>', '<코레일비밀번호>')
  const logedIn = await k.login()
  
  console.log(logedIn)
})()


