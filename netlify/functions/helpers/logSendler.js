const logSendler = async (message) => {
    const msg = `KNX_log: ${message}`;
    await fetch(`https://api.telegram.org/bot5787873665:AAE2duy-dHpJjzJFv3EPYi2n6aE2CkmnS5s/sendMessage?chat_id=-1001816393133&text=${msg}`);
}

export default logSendler;