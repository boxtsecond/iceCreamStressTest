var orderArr = [220171117000146,220171117000147,220171117000148,220171117000149,220171117000150,220171117000155,220171117000161,220171117000151,220171117000152,220171117000153,220171117000154,220171117000156,220171117000157,220171117000158,220171117000159,220171117000160,120171117000169,
120171117000171,120171117000173,220171120000207,220171120000208,220171120000209,220171120000212,220171120000218,220171120000220,220171120000221];

var createOrderParamsArr = [
{"goods_sn": "OTMxMzU4MjMzNDY4MjExMjAw","goods_count": 10,"is_digital": 1}, 
{"goods_sn": "OTMxMzU5MTE1Mzg3NzM2MDY0","goods_count": 2,"is_digital": 0}, 
{"goods_sn": "OTMxMzYwMjU2OTE3OTAxMzEy","goods_count": 5,"is_digital": 0},
{"goods_sn": "OTMxMzYwNTI0MzA4OTc1NjE2","goods_count": 4,"is_digital": 0},
{"goods_sn": "OTMxMzYwNzUyNzYwMTMxNTg0","goods_count": 3,"is_digital": 0},
{"goods_sn": "OTMxMzYxMTg3MjQ4MDgyOTQ0","goods_count": 2,"is_digital": 0}];

//UAT
var testUATOrderParamsArr = [
//实物商品
{"goods_sn": "946558064985772032","goods_count": 1,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "946558064985772032","goods_count": 2,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "946558064985772032","goods_count": 3,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "946558064985772032","goods_count": 4,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
//实物商品，订单地址不存在
{"goods_sn": "946558064985772032","goods_count": 1,"orderType": "goods"},
//实物商品，订单地址格式错误
{"goods_sn": "946558064985772032","goods_count": 1,"orderType": "goods","address":"11,bac,北京市 | 北京市 | 东城区,111111111111"},
//虚拟商品不需要虚拟卡
{"goods_sn": "948116105367523328","goods_count": 1,"orderType": "goods"},
{"goods_sn": "948116105367523328","goods_count": 2,"orderType": "goods"},
{"goods_sn": "948116105367523328","goods_count": 3,"orderType": "goods"},
{"goods_sn": "948116105367523328","goods_count": 4,"orderType": "goods"},
//虚拟商品需要虚拟卡
{"goods_sn": "951713314075971584","goods_count": 1,"orderType": "goods"},
//购买数量超过限制
{"goods_sn": "951713314075971584","goods_count": 2,"orderType": "goods"},
{"goods_sn": "951713314075971584","goods_count": 3,"orderType": "goods"},
//goods_sn 不存在
{"goods_sn": "941191144866451111","goods_count": 1,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "941191144866451111","goods_count": 2,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
//系统订单
{"goods_sn": "000001","goods_count": 1,"orderType": "system"},
{"goods_sn": "000051","goods_count": 1,"orderType": "system"},
{"goods_sn": "000050","goods_count": 1,"orderType": "system"},
{"goods_sn": "000002","goods_count": 1,"orderType": "system"},
{"goods_sn": "000003","goods_count": 1,"orderType": "system"},
{"goods_sn": "000004","goods_count": 1,"orderType": "system"},
{"goods_sn": "003000","goods_count": 1,"orderType": "system"},
{"goods_sn": "003001","goods_count": 1,"orderType": "system"},
{"goods_sn": "003002","goods_count": 1,"orderType": "system"},
//充值订单，未支付状态
{"goods_sn": "001000","goods_count": 1,"orderType": "recharge"},
{"goods_sn": "001001","goods_count": 1,"orderType": "recharge"},
{"goods_sn": "001002","goods_count": 1,"orderType": "recharge"},
{"goods_sn": "001003","goods_count": 1,"orderType": "recharge"},
{"goods_sn": "001004","goods_count": 1,"orderType": "recharge"},
{"goods_sn": "001005","goods_count": 1,"orderType": "recharge"}
];	

//187
var testOrderParamsArr = [
//实物商品
{"goods_sn": "958541945632854016","goods_count": 1,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "958541945632854016","goods_count": 2,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "958541945632854016","goods_count": 3,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "958541945632854016","goods_count": 4,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "958541945632854016","goods_count": 1,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "958541945632854016","goods_count": 2,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "958541945632854016","goods_count": 3,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
{"goods_sn": "958541945632854016","goods_count": 4,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
// //实物商品，订单地址不存在
// {"goods_sn": "946558064985772034","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938499223558","goods_count": 1,"orderType": "goods"},
// //实物商品，订单地址格式错误
// {"goods_sn": "946558064985772034","goods_count": 1,"orderType": "goods","address":"11,bac,北京市 | 北京市 | 东城区,111111111111"},
// {"goods_sn": "951718938499223558","goods_count": 1,"orderType": "goods","address":"11,bac,北京市 | 北京市 | 东城区,111111111111"},
//虚拟商品不需要虚拟卡
// {"goods_sn": "946636727097888770","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "946636727097888770","goods_count": 2,"orderType": "goods"},
// {"goods_sn": "946636727097888770","goods_count": 3,"orderType": "goods"},
// {"goods_sn": "946636727097888770","goods_count": 4,"orderType": "goods"},
//虚拟商品需要虚拟卡
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 1,"orderType": "goods"},
//购买数量超过限制
// {"goods_sn": "951718938488888888","goods_count": 2,"orderType": "goods"},
// {"goods_sn": "951718938488888888","goods_count": 3,"orderType": "goods"},
//goods_sn 不存在
// {"goods_sn": "941191144866451111","goods_count": 1,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
// {"goods_sn": "941191144866451111","goods_count": 2,"orderType": "goods","address":"11,1111,北京市 | 北京市 | 东城区,111111111111"},
//系统订单
// {"goods_sn": "000001","goods_count": 1,"orderType": "system"},
// {"goods_sn": "000051","goods_count": 1,"orderType": "system"},
// {"goods_sn": "000050","goods_count": 1,"orderType": "system"},
// {"goods_sn": "000002","goods_count": 1,"orderType": "system"},
// {"goods_sn": "000003","goods_count": 1,"orderType": "system"},
// {"goods_sn": "000004","goods_count": 1,"orderType": "system"},
// {"goods_sn": "003000","goods_count": 1,"orderType": "system"},
// {"goods_sn": "003001","goods_count": 1,"orderType": "system"},
// {"goods_sn": "003002","goods_count": 1,"orderType": "system"},
// //充值订单，未支付状态
// {"goods_sn": "001000","goods_count": 1,"orderType": "recharge"},
// {"goods_sn": "001001","goods_count": 1,"orderType": "recharge"},
// {"goods_sn": "001002","goods_count": 1,"orderType": "recharge"},
// {"goods_sn": "001003","goods_count": 1,"orderType": "recharge"},
// {"goods_sn": "001004","goods_count": 1,"orderType": "recharge"},
// {"goods_sn": "001005","goods_count": 1,"orderType": "recharge"}
];	

// const tokenArr = require('./stagToken.js').tokenArr;
const tokenArr = require('./token_.js').tokenArr;
var uid = 2077500;
// var uid = 2080000;
var successOrder = 0;

function getOneOrder(requestParams, context, ee, next){
	console.log('start get for get order');
	let orderNo = orderArr[getRandom(orderArr.length)].toString();
	requestParams.url = `/Orders/${orderNo}`;
	// console.log(requestParams)
	return next();
}

function getOrderList(requestParams, context, ee, next) {
	console.log('start post for get order list');
	requestParams.body = {"sort": -1};
	requestParams.json = true;
	// console.log(requestParams)
	return next();
}

function createOrder(requestParams, context, ee, next) {
	console.log('start post for create new order');
	let body = createOrderParamsArr[getRandom(createOrderParamsArr.length)];
	requestParams.body = body;
	requestParams.json = true;
	// console.log(requestParams)
	return next();
}

function testCreateUnified(requestParams, context, ee, next){
	console.log('start post for test unified order');
	let body = testOrderParamsArr[getRandom(testOrderParamsArr.length)];
	// let body = testOrderParamsArr[0];
	// let body = testOrderParamsArr[9];
	// let token = tokenArr[s];
	requestParams.body = body;
	requestParams.body.usekue = true;
	requestParams.body._uid = uid;
	requestParams.json = true;
	uid++;
	// uid--;
	// console.log(requestParams)
	return next();
}


function logResBody(requestParams, response, context, ee, next) {
	console.log(response.body);
 	// if(response.body.code != 2000 && (orderTypeof response == 'string' && JSON.parse(response.body).code != 2000)) console.log(response.body);
 	// else console.log('success  ', successOrder++);
 	if(response.body.code == 2000) console.log('success  Num:', ++successOrder);
    return next(); // MUST be called for the scenario to continue
}

function getRandom(len) {
	return Math.floor(Math.random()*len);
}

module.exports = {
	getOneOrder: getOneOrder,
	getOrderList: getOrderList,
	createOrder: createOrder,
	testCreateUnified: testCreateUnified,
	logResBody: logResBody,
}