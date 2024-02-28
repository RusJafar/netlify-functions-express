exports.handler = async (event, context) => {
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