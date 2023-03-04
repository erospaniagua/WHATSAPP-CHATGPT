const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const CHATGPT = require('./chatgpt')

const flowChatGPT = addKeyword('ia')
    .addAnswer('Preguntame lo que quieras',{capture:true}, async (ctx, {flowDynamic}) => {
        var message = ctx.body;
      await CHATGPT.runCompletion(message).then(result => {
        console.log (message);
        return flowDynamic(result)

      });      
    })


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowChatGPT])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()

// const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

// const QRPortalWeb = require('@bot-whatsapp/portal')
// const BaileysProvider = require('@bot-whatsapp/provider/baileys')
// const MockAdapter = require('@bot-whatsapp/database/mock')
// const CHATGPT = require('./chatgpt')

// const flowChatGPT = addKeyword('ia')
//     .addAnswer('Preguntame lo que quieras',{capture:true}, async (ctx, {flowDynamic}) => {
//         var message = ctx.body;
//       await CHATGPT.runCompletion(message).then(result => {
//         console.log (message);
//         return flowDynamic(result)
//       });      
//     })


// const main = async () => {
//     const adapterDB = new MockAdapter()
//     const adapterFlow = createFlow([flowChatGPT])
//     const adapterProvider = createProvider(BaileysProvider)

//     createBot({
//         flow: adapterFlow,
//         provider: adapterProvider,
//         database: adapterDB,
//     })

//     QRPortalWeb()
// }

// main()