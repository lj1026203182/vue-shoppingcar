var objc = JSON.parse($response.body);
console.log('objc: ', $response.body);
objc.data.is_bought = true;
$notify(objc.data)

$done({
    body : JSON.stringify(objc)
});
