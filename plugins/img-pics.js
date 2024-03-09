import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `pic   ${usedPrefix}${command} The Beauty Of Karachi `;

    
  }
  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  const match = text.match(/(\d+)/);
  const numberOfImages = match ? parseInt(match[3]) : 3;

  try {
    m.react("🌟");
    m.reply(imgs)

    const images = [];

    for (let i = 0; i < numberOfImages; i++) {
      const endpoint = `https://api.guruapi.tech/api/googleimage?text=${encodeURIComponent(text)}`;
      const response = await fetch(endpoint);


      if (response.ok) {
        const imageBuffer = await response.buffer();
        images.push(imageBuffer);
      } else {
        throw '*Not Found !*';
      }
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    
    let cap = '*✨LOVER-BOY-MD✨*';

    for (let i = 0; i < images.length; i++) {
      await conn.sendFile(m.chat, images[i], `image_${i + 1}.png`, cap, m);
      m.react("✅")


    }
  } catch {
    throw '*SorryI can't find Anything*';
    m.react("❌")
  }
};

handler.help = ['image'];
handler.tags = ['downloader'];
handler.command = ['img', 'gimage', 'image', 'pic', 'photo', 'picture'];

export default handler;
