require("dotenv").config()

const tmi = require('tmi.js');
const keepAlive = require("./server");

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.TWITCH_BOT_NAME,
    password: process.env.TWITCH_TOKEN,
  },
  channels: [ process.env.TWITCH_CHANNEL_NAME1, process.env.TWITCH_CHANNEL_NAME2, process.env.TWITCH_CHANNEL_NAME3, process.env.TWITCH_CHANNEL_NAME4,process.env.TWITCH_CHANNEL_NAME5 ]
});

const translate = require('translate');

async function translateString(str, translateTo) {
  translate.engine = "google";
  translate.from = "tr"
  const translated_string = await translate(str, translateTo);
  console.log(translated_string);
  return translated_string;
}

client.connect();
let peopleCount = 0;
let sum = 0;
let avg = 0;
let letter = 180;
let control = false;
let aySayaci = 0;
let i = 0;
//let control2 = true;
let people = {};
//let kisiler = {};
//let kontrol = false;

//let languages = ["az", "en", "de", "fr", "es"];
//let random = 0;

let erovizyon = {
  '1': 'Bence yok, varsa da ben bulamadım',
  '2': 'https://www.instagram.com/javinehylton/',
  '3': 'https://www.instagram.com/chiara_siracusa/',
  '4': 'https://www.instagram.com/luminitaanghel/',
  '5': 'https://www.instagram.com/wigwam.official/',
  '6': 'Gülseren diye biriyle katılırsan tabi instası falan da olmaz. Gülseren kim ulan!!',
  '7': 'https://www.instagram.com/zdobsizdubofficial/?hl=tr',
  '8': 'https://www.instagram.com/ledinacelo/',
  '9': 'https://www.instagram.com/konstantinoschristoforou/',
  '10': 'https://www.instagram.com/sonde.sol/',
  '11': 'https://www.instagram.com/shirimaimon1/',
  '12': 'Bence yok, varsa da ben bulamadım',
  '13': 'https://www.instagram.com/sveistrupdk/?hl=tr',
  '14': 'https://www.instagram.com/martinstenmarck/',
  '15': 'Bence yok, varsa da ben bulamadım',
  '16': 'Bence yok, varsa da ben bulamadım',
  '17': 'Bence yok, varsa da ben bulamadım',
  '18': 'https://www.instagram.com/boris_novkovic/',
  '19': 'https://www.instagram.com/helenapaparizouofficial/',
  '20': 'https://www.instagram.com/nataliapodolskaya/',
  '21': 'https://www.instagram.com/feminnem_official/',
  '22': 'https://www.instagram.com/thisisvanillaninja/',
  '23': 'Bence yok, varsa da ben bulamadım',
  '24': 'Bence yok, varsa da ben bulamadım'
}


client.on('message', async (channel, tags, message, self) => {
  //let k = 0;
  //let genelKontrol = true;

  // Ignore echoed messages.
  if (self) return;
  console.log(tags);

  if (message.toLowerCase() === '!hello') {
    client.say(channel, `@${tags.username}, hoş geldin.`);
  }

  /*if (message.toLowerCase() === '!hepyeak') {
    client.say(channel, `İSTEK DEĞİL İHTİYAÇ!!! ACİLLL!`);
  }*/

  if (message.toLowerCase() === 'rezillink') {
    client.say(channel, `hakkarim.net`);
  }

  if (channel === "#yankullah") {
    if (message.toLowerCase() === '!uzun') {
      client.say(channel, `yankulErkan yankulErkan yankulBas`);
    }

    if (message.toLowerCase() === '!dahauzun') {
      client.say(channel, `yankulErkan yankulErkan yankulErkan yankulErkan yankulBas`);
    }

    if (message.toLowerCase() === '!dahadahauzun') {
      client.say(channel, `yankulErkan yankulErkan yankulErkan yankulErkan yankulErkan   yankulErkan yankulBas`);
    }
    if (message.toLowerCase() === '!kalorifer') {
      client.say(channel, `YANSIN!!`);
    }

    if (message.toLowerCase() === '!koltuk') {
      client.say(channel, `ALINSIN!!`);
    }

    if (message.toLowerCase() === '!imamhatipler') {
      client.say(channel, `KAPATILSIN!!`);
    }

    /*if (message.split(" ")[0] === "!erovizyon") {
      let number = message.split(" ")[1];
      let intNum = Number(number)
      let insta = erovizyon[number];
      if ((intNum > 0) && (intNum < 25)) {
        client.say(channel, `${insta}`);
      }
      else {
        client.say(channel, `Böyle bir yarışmacı yeak. Sen çok yanlış basmışsın.`);
      }
    }*/
  }

  if (message.toLowerCase() === "!duyur") {
    console.log("Work")
    client.action(channel, `DENEME`)
  }

  if (message.toLowerCase() === '!holter') {
    let buyuk = Math.floor(Math.random() * (200 - 120) + 1) + 120
    let kucuk = Math.floor(Math.random() * (70 - 40) + 1) + 40
    let kalp = Math.floor(Math.random() * (175 - 85) + 1) + 85

    client.say(channel, `${buyuk}/${kucuk}-${kalp}`);
  }

  if (message.toLowerCase() === "!özkanal") {
    client.say(channel, `twitch.tv/ipkkeee`);
  }

  if (message.toLowerCase() === "zülfikar") {
    client.say(channel, `Z1 Z2 Z3`);
  }

  if (message === ':)') {
    console.log("çalıştı")
    let random = Math.random()
    console.log("Random sayı: ", random);
    if (random <= 0.14) {
      client.say(channel, `:) `)
    }
  }



  if (message === 'sa' || message === 'sa beler' || message === 'selam') {
    console.log("çalıştı")
    let random = Math.random()
    console.log("Random sayı: ", random);
    if (random <= 0.14) {
      client.say(channel, `aleyküm merhaba`)
    }
  }

  if (tags.username === "aschultzi") {
    while (i < message.split(" ").length) {
      if (message.split(" ")[i].toLowerCase() === "ay") {
        aySayaci++
        if (aySayaci === 2) {
          client.say(channel, `AY AY AY AY AY @${tags.username} hoş geldin balım`);
          //console.log("aySayaci: ", aySayaci)
        }
      }
      i++;
    }
    i = 0
    aySayaci = 0
  }


  /*if (channel === "#newscooltv") {
    while (k < message.split(" ").length) {
      if (genelKontrol === true) {
        if ((message.split(" ")[k].toLowerCase() === "genel") || (message.split(" ")[k].toLowerCase() === "genellikle") || (message.split(" ")[k].toLowerCase() === "genelde") || (message.split(" ")[k].toLowerCase() === "geneli")) {
          console.log("Eşitlik Sağlandı")
          client.say(channel, "Naniii");
          genelKontrol = false;
        }
      }
      k++
    }
  }*/

  if (channel != "#kinkajou_t" || message != "!kaçakgelinler") {
    if (message.length >= letter) {
      // "translate to azerbaijan"
      //random = Math.floor(Math.random() * (5 - 1 + 1) ) + 1;
      //console.log("Random: "+ random);
      client.say(channel, `${await translateString(message, "az")}`);
    }
  }
  

  if (tags.badges != null) {
    if (message.split(" ")[0] == "!changelimit" && (tags.mod === true || tags.badges.broadcaster === "1")) {
      letter = message.split(" ")[1];
      console.log("New Limit: " + letter);
    }
  }

  // Oylama hesabı

  function isFloat(x) { return !!(x % 1); }



  if ((isFloat(Number(message)) === true || Number.isInteger(Number(message))) && control === true) {
    if (parseFloat(message) <= 10 && parseFloat(message) > 0) {
      people[tags.username] = message;
    }
  }


  if (message === "!oy") {
    control = true;
    console.log(control);
    sum = 0;
  }

  if (message === "!sonuc") {
    control = false;
    console.log(control);

    for (i = 0; i < Object.keys(people).length; i++) {
      sum += parseFloat(Object.values(people)[i]);
    }

    kisi = Object.keys(people).length;

    console.log(Object.keys(people).length + " tane kişinin toplamı: " + sum + "'dır. Ortalamaları: " + (sum / kisi) + "'dir.");


    while (Object.keys(people).length > 0) {
      delete people[Object.keys(people)[(Object.keys(people).length) - 1]];
    }
  }
  //console.log(people);

  if (tags.badges != null) {
    if (message.toLowerCase() === "!vote" && (tags.mod === true || tags.badges.broadcaster === "1")) {
      console.log("vote")
      client.action(channel, `Oylama başlıyor...`);
      control = true;
      //console.log(control);
      sum = 0;

      while (Object.keys(people).length > 0) {
        delete people[Object.keys(people)[(Object.keys(people).length) - 1]];
      }
    }
  }

  if (tags.badges != null) {

    if (message.toLowerCase() === "!result" && (tags.mod === true || tags.badges.broadcaster === "1")) {

      control = false;
      console.log(control);

      // Toplama
      for (i = 0; i < Object.keys(people).length; i++) {
        sum += parseFloat(Object.values(people)[i]);
      }

      peopleCount = Object.keys(people).length;
      avg = sum / peopleCount;

      console.log(Object.keys(people).length + " tane kişinin toplamı: " + sum + "'dır. Ortalamaları: " + avg + "'dir.");
      client.action(channel, `Ortalama: ${avg.toFixed(1)}`);
    }
  }
  console.log(people);


  /* if (`${tags['custom-reward-id']}` == '847be94b-280b-47e9-8665-7712f6c53278') {
     if (message[0] === "@") {
       client.timeout(channel, `@${message.split("@")[1]}`, 30);
       client.say(channel, `${message} yaşın kadar bekle bakalım.`);
     }
     else {
       client.say(channel, `@${message} yaşın kadar bekle bakalım.`);
       client.timeout(channel, `@${message}`, 30);
     }
   }*/
});

keepAlive()
