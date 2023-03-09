const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const CHATGPT = require('./chatgpt');
const MODELS = require('.//Models/CONVERSATION')
const mongoose = require('mongoose');


  //Trigger de whatsapp
const flowChatGPT = addKeyword('ia')
    .addAnswer('En que te puedo ayudar?',{capture:true}, async (ctx, {flowDynamic}) => {
        var messagew = ctx.body;
        var phone = ctx.from; 
        const Phone = phone;
        const Messagew = messagew;
        const Group = {
          Phone,

          Messagew
        };

        console.log("Telefono" + Phone);
        console.log("Texto" + Messagew) ;
        module.exports= Group;
        
       await CHATGPT.runCompletion(messagew).then(result => {
        // console.log (phone);
        // console.log (messagew);
        // console.log (ctx);
        // console.log (result);
        
        return flowDynamic(result);  
      });   
      
    });

   
    const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowChatGPT])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb();
  
}
main();

