
exports.handler = async (event, context, callback) => {
    if (event.httpMethod === 'POST') {
        await fetch(`https://api.telegram.org/bot5787873665:AAE2duy-dHpJjzJFv3EPYi2n6aE2CkmnS5s/sendMessage?chat_id=-1001816393133&text=${event.path}`);
        const level = event.queryStringParameters['level'] && null;
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