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
^https?:\/\/student-api\.iyincaishijiao\.com\/ep\/web\/trade\/is_bought url script-response-body https://raw.githubusercontent.com/lj1026203182/vue-shoppingcar/master/junjie.js

[mitm] 
hostname = student-api.iyincaishijiao.com
*
*
*/


var obj = JSON.parse($response.body);
obj.data.is_bought = true;
console.log('11112')

 $done({ body: JSON.stringify(obj) });
