const doDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

exports.handler = async (event, context, callback) => {
   
    let delay = event.queryStringParameters['delay'];
    // await logSendler(event.path + `${level? `?level=${JSON.stringify(level)}`: ''}`);

    if(!delay) {
        delay = 2000;
    }

    await doDelay(delay)

   
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
    
}