const logSendler = require("./helpers/logSendler");
exports.handler = async (event, context, callback) => {
    if (event.httpMethod === 'POST' && event.path.match(/\/agent\/light\/preset\/(.*?)\/on/)) {
        await logSendler(event.path);
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
    if (event.httpMethod === 'POST' && event.path.match(/\/agent\/light\/preset\/(.*?)\/off/)) {
        await logSendler(event.path);
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