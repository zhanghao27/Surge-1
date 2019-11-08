var obj = JSON.parse($response.body);

obj.user.vipEndTime = 1761826805;

obj.user.viplimit = 3;

$done({body: JSON.stringify(obj)});
