
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `✳️ Give me a Google Drive link`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
≡ *Google Drive DL*

▢ *Number:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *type:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('Error: Sorry I can't find anything') 
  }
}
handler.help = ['gdrive']
handler.tags = ['downloader']
handler.command = ['gdrive']
handler.credit = false
handler.premium = false

export default handler
