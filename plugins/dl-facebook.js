
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args[0] && m.quoted && m.quoted.text) {
  args[0] = m.quoted.text;
}
if (!args[0] && !m.quoted) throw `💢 Please give me a valid Facebook video Url \n📌 Example:\n*${usedPrefix + command}* https://www.facebook.com/...`
    m.react(rwait)
   try {
    let result = await fg.fbdl(args[0]);
    let tex = `
┌─⊷ *⚪LOVER-BOY-MD FB⚪*
▢ *Title:* ${result.title}
└───────────`;
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', tex, m);
    m.react(done);
  } catch (error) {
 	m.reply('Sorry I Can't Find Anything☹️ ')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.diamond = false

export default handler
