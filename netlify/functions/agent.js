const logSendler = async (message) => {
    const msg = `KNX_log: ${message}`;
    await fetch(`https://api.telegram.org/bot5787873665:AAE2duy-dHpJjzJFv3EPYi2n6aE2CkmnS5s/sendMessage?chat_id=-1001816393133&text=${msg}`);
}

exports.handler = async (event, context, callback) => {
    if(event.path.includes()) {

    }
    if (event.httpMethod === 'POST') {
        const level = event.queryStringParameters['level'];
        await logSendler(event.path + `${level? `?level=${JSON.stringify(level)}`: ''}`);
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
    if (event.httpMethod === 'GET') {
        const level = event.queryStringParameters['level'];
        await logSendler(event.path + `${level? `?level=${JSON.stringify(level)}`: ''}`);
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

    return {
        statusCode: 404,
        body: JSON.stringify({
            data: null,
            error: "Path not exist"
        }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
        }
    }
}
