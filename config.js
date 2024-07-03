const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ninjateddy850@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918101558336";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_55_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA3LFxuICAgICAgICAyOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA0MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcwLFxuICAgICAgICA1MixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2LFxuICAgICAgICA3MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICA3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA1LFxuICAgICAgICAyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImQ4SlFPL0VRVjVObHJ2VXRSZTNjejUxTVBDYjRJMkZ1U2l6dFhZMlNqQUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MTAxNTU4MzM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNzI0MTc4NjE3RkNGMTRBQkU1NUNDMTg3NUY1RTlBRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwMDA1MTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgxMDE1NTgzMzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUxM0MwQkFFNzQzNThENEY5RTJDMjk0Mzc0MzhGMTUzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDAwMDUxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqbHhHeGRuSlF5bXEzaWVuQUtRZURBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0ZjhjNjM5LWMyNmEtNDU5OS1hMDBjLWUzNmY0NWQ5ZjdiM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAxNjgsXG4gICAgICAxNTAsXG4gICAgICA2MixcbiAgICAgIDI0MyxcbiAgICAgIDEyNixcbiAgICAgIDM1LFxuICAgICAgMTc3LFxuICAgICAgMTM1LFxuICAgICAgMjExLFxuICAgICAgMjAxLFxuICAgICAgNjYsXG4gICAgICAxOTcsXG4gICAgICAyMDAsXG4gICAgICA2NyxcbiAgICAgIDI0MCxcbiAgICAgIDEzMixcbiAgICAgIDE4NyxcbiAgICAgIDY4LFxuICAgICAgMjUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDk2LFxuICAgICAgMjE2LFxuICAgICAgMjIxLFxuICAgICAgODMsXG4gICAgICAxNjUsXG4gICAgICA3OCxcbiAgICAgIDEyMCxcbiAgICAgIDE0NyxcbiAgICAgIDgxLFxuICAgICAgMTE4LFxuICAgICAgNzEsXG4gICAgICA1MixcbiAgICAgIDYzLFxuICAgICAgMTg0LFxuICAgICAgMjAzLFxuICAgICAgMTc2LFxuICAgICAgMTc5LFxuICAgICAgNzEsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0c2REMxWFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODEwMTU1ODMzNjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRldmlsXCIsXG4gICAgXCJsaWRcIjogXCIxODg0MTE5NjA4ODk0ODk6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVArNnFRQkVQbS9sTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpa0Y0aXViQjNUYmVzMnQ1cUZHNW03Y3RwUnV1RnMrMExmTUQrL0FOeDF3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjA5U0ZZY1JCNWtBcFNKeFhHMmFBMmVPY3IvczNPaWlsL2FFZmxETWg4OTlRcldNWEJTRmJ0SkhXQzkrSVhFbFk2c2xlbUpHUkpMTXFDN05BVGIrbENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRLRzB5WVJFeVg2T3MxTXBxaVdvRXBxNWtkOFpGSktraVZablorOTg1ajZueUxVaEQ0c2VXQjFCNE02Q0JTY3E2U3hZSU9xRXhlUkQ4OVdSMlB0TURRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODEwMTU1ODMzNjozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMDA1MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNbkVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1uRS5qc29uIjogIntcImtleURhdGFcIjpcInlNdFMyK2hxQmZjUUE4RHl3RU9DTzY2T0ViS0pOVjV5UjNsMEs5WUZkcGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzQ1Njg1ODI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMDA1MDk4OTRcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TEDDY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
