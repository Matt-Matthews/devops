const imaps = require('imap-simple');
require('dotenv').config()

const {EMAIL_SERVER, OUTGOING_EMAIL_PORT,CAM_ALERT_EMAIL_USER,CAM_ALERT_EMAIL_PASSWORD } = process.env;

const readMailConfig = {
    imap: {
        user: CAM_ALERT_EMAIL_USER,
        password: CAM_ALERT_EMAIL_PASSWORD,
        host: EMAIL_SERVER,
        port: Number(OUTGOING_EMAIL_PORT),
        authTimeout: 10000,
        tls: true,
        tlsOptions:{
            rejectUnauthorized: false,
        }
    }
};

console.log(readMailConfig)

async function readMail() {

    let emailList = [];

    try{
        const connection = await imaps.connect(readMailConfig);
        await connection.openBox('INBOX');
        const fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false
        };
        const results = await connection.search(['ALL'], fetchOptions);
        results.forEach(res => {
            const body = res.parts.filter(part=>part.which === 'TEXT')[0].body;
            if(!body.includes('Event type - SMS')) emailList.push(JSON.parse(body));
        });

        return emailList;
    }catch(err){
        console.log(err);
    } 
}

module.exports = {
    readMail,
}