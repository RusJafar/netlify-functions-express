exports.handler = async (event, context, callback) => {
    if (event.httpMethod === 'GET' && event.path === '/preset/951/on') {
        await fetch("https://api.telegram.org/bot5787873665:AAE2duy-dHpJjzJFv3EPYi2n6aE2CkmnS5s/sendMessage?chat_id=-1001816393133&text=light/preset/951/on");
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: null,
                error: null
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            }
        }
    }
    if (event.httpMethod === 'GET' && event.path === '/preset/951/off') {
        await fetch("https://api.telegram.org/bot5787873665:AAE2duy-dHpJjzJFv3EPYi2n6aE2CkmnS5s/sendMessage?chat_id=-1001816393133&text=light/preset/951/off");
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: null,
                error: null
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            }
        }
    }

}