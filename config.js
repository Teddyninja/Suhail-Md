const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ninjateddy850@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://dipanbot8:<password>@cluster0.afxzjze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_05_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjU0LFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQm1GbGxDYVQ3Q0czeUdRblExQUZWQzJQVUhibDdpSzlyNlo3QUZKWm02WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTgxMDE1NTgzMzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJCRTA5MTFBNEQyQjY0MzJBOUEwRTRBNDg1NDMxRDdGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE5MTk0MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkN1VHLVR4WFNvaVpsMHAzXzZNZWpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzZTY5YTRkLTg3MGUtNGY2NC1hZTc1LTI5ODU1OGZiZDhiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDk1LFxuICAgICAgMjE4LFxuICAgICAgMTkwLFxuICAgICAgNTIsXG4gICAgICA0NSxcbiAgICAgIDIxNyxcbiAgICAgIDIxNixcbiAgICAgIDgwLFxuICAgICAgMjI4LFxuICAgICAgODgsXG4gICAgICAyNDMsXG4gICAgICAxNzYsXG4gICAgICAyMTgsXG4gICAgICA2MyxcbiAgICAgIDI1LFxuICAgICAgMTk4LFxuICAgICAgMTEzLFxuICAgICAgODUsXG4gICAgICAxMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxNTEsXG4gICAgICAxMDQsXG4gICAgICAyMjYsXG4gICAgICAzNyxcbiAgICAgIDY3LFxuICAgICAgNjksXG4gICAgICA2NixcbiAgICAgIDI4LFxuICAgICAgMjE1LFxuICAgICAgMTc5LFxuICAgICAgMTc4LFxuICAgICAgMTAsXG4gICAgICAxOTYsXG4gICAgICAxNDEsXG4gICAgICA2OCxcbiAgICAgIDE5LFxuICAgICAgNzksXG4gICAgICAxMDksXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFBFWlJNWjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODEwMTU1ODMzNjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJBSkEtRElQQU4tREVCQVwiLFxuICAgIFwibGlkXCI6IFwiMTg4NDExOTYwODg5NDg5OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01iKzZxUUJFTHFYb0xRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWtGNGl1YkIzVGJlczJ0NXFGRzVtN2N0cFJ1dUZzKzBMZk1EKy9BTngxdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPN3VFZjBnYnljV3VrQTFPRE5WbUFTQ0RRMHNMZ2c2RUdIMERBUVVDaFZqTEpMa2FkWlBrNndJZldqS2YycllnMkNEMDJaMmpPR1V4REY1Nk81OUdCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlSmI4V3YyaUE2Y3Jqa2ROOXlnNGozWE1RUmpua0wzR3JyYkpqMTc4amZLeUsvbHlrc2x6S3A0UUNqMmhxSzVIRXFnTFZFL2lyYmRtSFRTZU9QZzdEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgxMDE1NTgzMzY6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTkxOTM1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTW5GXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNbkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3ZFdDaHhBTXY3aDE5cDJGMTVEVnZiVjRnSFZHc285b1p6M2NpOFIxRXowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NTY4NTgyNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDEyMjExMjM1OFwifSIKfQ==" ;


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
