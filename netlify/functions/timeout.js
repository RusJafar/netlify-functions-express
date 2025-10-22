exports.handler = async (event, context, callback) => {
   
    let delay = event.queryStringParameters['delay'];
    // await logSendler(event.path + `${level? `?level=${JSON.stringify(level)}`: ''}`);

    if(!delay) {
        delay = 2000;
    }

    await setTimeout(() => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: `Timeout ${delay}`,
                error: null
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            }
        }
    }, delay);
    
}