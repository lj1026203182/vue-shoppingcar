/*
 *
 *
脚本功能：鱿鱼视频解锁会员
软件版本：1.1.1
下载地址：https://shrtm.nu/yysp
脚本作者：Hausd0rff
更新时间：2022-01-04
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 鱿鱼视频解锁会员
^https?:\/\/student-api\.iyincaishijiao\.com\/ep\/web\/trade\/is_bought* url script-response-body https://raw.githubusercontent.com/lj1026203182/vue-shoppingcar/master/junjie.js
[mitm] 

hostname = *.iyincaishijiao*
*
*
*/


var objc = JSON.parse($response.body);
console.log('objc123231: ', $response.body);
//objc.data.is_bought = true;
$notify(objc)

$done({
    body : JSON.stringify(objc)
});
