var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('Device', 'AD');
data.append('Version', '150718001');
data.append('txtInputFlg', '2');
data.append('txtMemberNo', '1270056717');
data.append('txtPwd', '4fkdgksek@');

var config = {
  method: 'post',
  url: 'https://smart.letskorail.com:443/classes/com.korail.mobile.login.Login',
  headers: { 
    'Content-Type': 'application/json', 
    'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 5.1.1; Nexus 4 Build/LMY48T)', 
    'Cookie': 'JSESSIONID=C3gtfvPUh8VL8yfTMGwf4Z6z6dq5ER1Bn1BN1gy15YUY8p0JV9bD41MyuIGM5o3F; WMONID=GppymwnYsLO', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
