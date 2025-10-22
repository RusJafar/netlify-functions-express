const logSendler = async (message) => {
    const timeout =  2000;
    await setTimeout(() => {
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: `Timeout ${timeout}`,
                error: null
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
            }
        }
    }, 2000);
    
}

export default logSendler;