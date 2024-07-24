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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918972264107";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_22_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTk3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOTk15OTZubUJROFliVVcxM01QZi9sUUZPTnlvV3FQcFE0bUF1MnBRMjJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjcjk2OFdZX1RfbVM3cUZFQktUellRXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjNDBjZjhjLTZkMTYtNDVjOC1hYjE4LTE1ODRkY2M1NDU3MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAyMjAsXG4gICAgICAxNTgsXG4gICAgICAxMTksXG4gICAgICA4MSxcbiAgICAgIDE4NCxcbiAgICAgIDE2NyxcbiAgICAgIDIyOCxcbiAgICAgIDE1OCxcbiAgICAgIDE5MixcbiAgICAgIDIyOSxcbiAgICAgIDUwLFxuICAgICAgMTA5LFxuICAgICAgMTA0LFxuICAgICAgMjQ3LFxuICAgICAgMjIwLFxuICAgICAgMTE2LFxuICAgICAgOTIsXG4gICAgICA3MSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMTgsXG4gICAgICAxMjEsXG4gICAgICAxOTgsXG4gICAgICAyLFxuICAgICAgMjA3LFxuICAgICAgMTI1LFxuICAgICAgMTQ4LFxuICAgICAgNDgsXG4gICAgICAxMzEsXG4gICAgICAxNjAsXG4gICAgICAyMjcsXG4gICAgICAyMzgsXG4gICAgICAyNCxcbiAgICAgIDkxLFxuICAgICAgNTgsXG4gICAgICA5MCxcbiAgICAgIDEzNCxcbiAgICAgIDExOCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhZOTJXVzNIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg5NzIyNjQxMDc6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIwODEzMzI4NDM3NDc3OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEg4bVIwUWhKK0N0UVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjT3JXTGdZOC9JSGlwMEszb2xKdnlYWFhLcm1tK0V1WnRzMzgyNlJxd3lFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInEraGFDZWYzWWxUdTBoTUUrRmlmMFd2TEZwbUZJZ2tjVXNndkQ5WWVwdXFpVlJMRDdSc1d5dkxPUWhleWYzOGZTaWdhdDRqT0hUY3Bkall5ZURZdURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJyeEpRVUVWL2tvdkpobitsMUF4TitMSUR0c3YrVU5OVDM5S0s4SEtFRGpCdVl2QVBQeUVQME56Ti92T3FxS2JuM0FCdlR3aEY1Y0pGMEZKQUk2aWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODk3MjI2NDEwNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzk4NTM2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "✨",
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
