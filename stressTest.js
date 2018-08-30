const tokenArr = require('./token.js').tokenArr;

function randomString(len) {
　　len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUu,I1。；.]-'; 
　　var maxPos = chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

function getTokenInfo(requestParams, context, ee, next){
	console.log('start post for get token');
	requestParams.body = {
		"appid": "591d94b5-dfa9-4216-a597-c22464bdd309",
  		"appsecret": "98fe6629-1e25-408b-9db4-8cca1a8d02d3"
	};
	requestParams.json = true;
	// console.log(requestParams)
	return next();
}

function getStarTokenInfo(requestParams, context, ee, next){
	console.log('start post for get star token');
	requestParams.body = {
		"appid": "50a5bc5d-7174-4d6e-b814-31939636a478",
  		"appsecret": "7cca8405-a4e1-460b-92c8-1316b28ae184"
	};
	requestParams.json = true;
	// console.log(requestParams)
	return next();
}

 function logResBody(requestParams, response, context, ee, next) {
 	if(response.body.code != 2000 && (typeof response == 'string' && JSON.parse(response.body).code != 2000)) console.log(response.body);
 	else console.log('success');
    return next(); // MUST be called for the scenario to continue
}

function fastlogin(requestParams, context, ee, next){
	console.log('start fast login');
	// console.log(requestParams);
	// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBpZCI6IjU5MWQ5NGI1LWRmYTktNDIxNi1hNTk3LWMyMjQ2NGJkZDMwOSIsImV4cCI6MTUxMDI5ODI5Mn0.90i_u1OaxlCVoGlLDPSiEuoLbp5ODy9dN8JbU1vLOSQ';
	// let token = requestParams.json.token;
	// requestParams.headers.token = token;
	requestParams.body = {
  		"phonetype": "xiaomi6",
  		"phonemodel": 2,
  		"itucode": "86",
  		"phone": "12345678901",
  		"register": "1a0018970a9270acf76",
  		"registertype": 1,
  		"code": "0000"
  	};
  	requestParams.json = true;
	// console.log(requestParams)
	return next();
}

function starLogin(requestParams, context, ee, next){
	console.log('start star login');
	requestParams.body = {
		"username": "aaaa",
  		"password": "e10adc3949ba59abbe56e057f20f883e"
	}
	requestParams.json = true;
	// console.log(requestParams)
	return next();
}

function getHeadlines(requestParams, context, ee, next){
	console.log('start get headlines');
	// console.log(requestParams);
	// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBpZCI6IjU5MWQ5NGI1LWRmYTktNDIxNi1hNTk3LWMyMjQ2NGJkZDMwOSIsImV4cCI6MTUxMDI5ODI5Mn0.90i_u1OaxlCVoGlLDPSiEuoLbp5ODy9dN8JbU1vLOSQ';
	// let token = requestParams.json.token;
	// requestParams.headers.token = token;
	requestParams.headers.start = 0;
	requestParams.headers.stop = 6;
	// requestParams.body = JSON.stringify({
 //  		"start": 0,
 //  		"stop": 6
 //  	});
  	// requestParams.json = true;
	// console.log(requestParams)
	return next();
}

function publishHeadlines(requestParams, context, ee, next){
	console.log('start publish headlines');
	let text = randomString(Math.random()*30);
	requestParams.body = {
  		"channelId": 1,
 		"datatype": 1,
  		"link": [
    		{
      		"dtype": 4,
      		"url": "-1",
      		"thumbnail": "-1",
      		"musiclength": "00:00"
    	}],
  		"text": text,
  		"driver": 1,
  		"ataillist": [0]
};
  	requestParams.json = true;
  	return next();
}

function fanComments(requestParams, context, ee, next){
	console.log('start fans comments');
	let text = randomString(Math.random()*30);
	requestParams.body = {
  		"channelId": 1,
  		"headlineId": 1,
  		"driver": 1,
  		"datatype": 1,
  		"text": text,
  		"link": [{
    		"dtype": 4,
    		"url": "-1",
    		"thumbnail": "-1",
    		"musiclength": "00:00"
  		}],
  		"replyCommentId": -1,
  		"firstCommentId": -1,
  		"replyUserId": -1,
  		"safe": 0
	};
  	requestParams.json = true;
  	return next();
}

function fanReply(requestParams, context, ee, next){
	console.log('start fans reply');
	let text = randomString(Math.random()*30);
	requestParams.body = {
  		"channelId": 1,
  		"headlineId": 1,
  		"driver": 1,
  		"datatype": 1,
  		"text": text,
  		"link": [{
    		"dtype": 4,
    		"url": "-1",
    		"thumbnail": "-1",
    		"musiclength": "00:00"
  		}],
  		"replyCommentId": 1,
  		"firstCommentId": 1,
  		"replyUserId": 1000,
  		"safe": 0
	};
  	requestParams.json = true;
  	return next();
}

module.exports = {
	getTokenInfo: getTokenInfo,
	getStarTokenInfo: getStarTokenInfo,
	logResBody: logResBody,
	fastlogin: fastlogin,
	getHeadlines: getHeadlines,
	publishHeadlines: publishHeadlines,
	fanComments: fanComments,
	fanReply: fanReply
}