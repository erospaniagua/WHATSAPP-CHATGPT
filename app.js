// const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

// const QRPortalWeb = require('@bot-whatsapp/portal')
// const BaileysProvider = require('@bot-whatsapp/provider/baileys')
// const MockAdapter = require('@bot-whatsapp/database/mock')
// const CHATGPT = require('./chatgpt')
// const mongoose = require('mongoose');
// const CONVERSATION = require('./Models/CONVERSATION')

// const user = 'DatabaseDev';
// const password = 'g64LUM84grjSchJ9';
// const dbname = 'Whatapp_BOT';
// const uri = `mongodb+srv://${user}:${password}@cluster0.glhkzhq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// mongoose.connect(uri,
//   {useNewUrlParser: true ,useUnifiedTopology: true}
// )

// .then(() => console.log('base de datos conectada'))
//   .catch(e => console.log(e));

//   console.log (CONVERSATION);

// const flowChatGPT = addKeyword('ia')
//     .addAnswer('En que te puedo ayudar?',{capture:true}, async (ctx, {flowDynamic}) => {
//         var messagew = ctx.body;
//         var phone = ctx.from;
//       await CHATGPT.runCompletion(messagew).then(result => {
//         console.log (phone);
//         console.log (messagew);
//         console.log (ctx);
//         console.log (result);
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



const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const CHATGPT = require('./chatgpt')
const mongoose = require('mongoose');
const { CONVERSATION } = require('./Models/CONVERSATION')

const user = 'DatabaseDev';
const password = 'g64LUM84grjSchJ9';
const dbname = 'Whatapp_BOT';
const uri = `mongodb+srv://${user}:${password}@cluster0.glhkzhq.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,
  {useNewUrlParser: true ,useUnifiedTopology: true}
)

.then(() => console.log('base de datos conectada'))
  .catch(e => console.log(e));

  console.log(CONVERSATION);

const flowChatGPT = addKeyword('ia')
    .addAnswer('En que te puedo ayudar?',{capture:true}, async (ctx, {flowDynamic}) => {
        var message = ctx.body;
        
      await CHATGPT.runCompletion(message).then(result => {
        // console.log (message);
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

