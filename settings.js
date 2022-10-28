//═══════════════════════════════════════════════════════//
//                    💞 SHAHEEN OFFICIAL 💞
//                              
//             
//       PAKISTANI 𝔹𝕖𝕤𝕥  𝕎𝕙𝕒𝕥𝕤𝕒𝕡𝕡 𝔹𝕆𝕋...
//
//════════════════════════════//


const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'TnFQSndzZzI=', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.owner = ['923337470194'] //your owner number
global.premium = ['923337470194'] //your Owner number in menu msg
global.ownernomer = '923337470194' //your owner number info

global.ownername = 'SHAHEEN OFFICIAL' //your owner name
global.botname = '💞 SHAHEEN OFFICIAL 💞' //your bot name    // SHAHEEN OFFICIAL... https://youtu.be/OSvvf9ESl38Settings.js ( 💞 SHAHEEN OFFICIAL 💞 ) 923337470194...
global.footer = '💞 SHAHEEN OFFICIAL 💞' 

global.ig = 'https://github.com/ishansandeepa757' //Github Account!
global.region = 'Sri Lanka'
global.sc = 'https://github.com/ishansandeepa757'
global.myweb = 'https://youtu.be/OSvvf9ESl38' //your chanal link
global.packname = '💞 SHAHEEN OFFICIAL 💞'

global.alivemsgimage = 'https://wallpaperaccess.com/full/3008776.jpg' // SHAHEEN OFFICIAL Alive massege 923337470194 image 923337470194 Link SHAHEEN OFFICIAL...

global.chatbotpre = "true"

global.author = '𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺:- SHAHEEN OFFICIAL'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']                          // 👈 SHAHEEN OFFICIAL \\ 
global.sp = '⭔'

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE .....👇
	
	
    success: 'SHAHEEN OFFICIAL ✅',
    admin: 'SHAHEEN OFFICIAL...!',
    botAdmin: 'SHAHEEN OFFICIAL... !',
    owner: '923337470194!',
    group: 'Groups SHAHEEN OFFICIAL...!',
    private: 'Private Chat SHAHEEN OFFICIAL...!',
    bot: 'SHAHEEN OFFICIAL...',
    wait: 'SHAHEEN OFFICIAL Wait ⏳ ...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
	
	
	
	
	 // SHAHEEN OFFICIAL .....👇 \\
	
	
	
}
    global.limitawal = {        
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./Queen_Ashiya_Media/Ashiya.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
