/**
 * ============================================================
 *  WCC HOMESCHOOL CONFERENCE — 2026 CONFIGURATION
 *  ============================================================
 *  This is the ONLY file you need to edit each year.
 *  Update the values below, save the file, and the entire
 *  website will reflect your changes automatically.
 *
 *  HOW TO UPDATE FOR A NEW YEAR:
 *  1. Copy the entire /2026/ folder and rename it /2027/
 *  2. Open /2027/config.js (this file)
 *  3. Update the values below
 *  4. Done! The website updates itself.
 * ============================================================
 */

const CONFERENCE = {

  // ── BASIC INFO ──────────────────────────────────────────
  year: "2026",
  title: "West Coast Christian Homeschool Conference",
  titleChinese: "美西基督徒在家教育大會",
  theme: "Rooted in Truth, Raising the Next Generation",
  themeChinese: "植根真理，培育下一代",
  tagline: "培養敬虔後裔 · Raising Up Godly Children",

  // ── DATES & TIMES ───────────────────────────────────────
  dates: {
    checkin: "July 2, 2026 (Thursday) · 8:30 AM – 9:30 AM",
    conference: "July 2–3, 2026",
    dailyHours: "9:30 AM – 5:30 PM each day",
  },

  // ── LOCATION ────────────────────────────────────────────
  location: {
    name: "Crosspoint Church",
    address: "380 Montague Expressway, Milpitas, CA 95035",
    mapsUrl: "https://maps.app.goo.gl/dzhLpazj5SxUm4Ss8",
  },

  // ── REGISTRATION ────────────────────────────────────────
  registerUrl: "https://www.zeffy.com/en-US/ticketing/2026-west-coast-christian-homeschool-conference",
  posterUrl: "/assets/flyer_2026.jpg",
  videoUrl: "https://youtu.be/YWwPbrD9R8Q",

  // ── CONTACT ─────────────────────────────────────────────
  email: "info@wcchomeschool.org",
  phone: "(408) 526-1312",

  // ── SESSIONS ────────────────────────────────────────────
  // Add, remove, or rename sessions here
  sessions: [
    { icon: "🌱", en: "How to Start Homeschooling", zh: "如何開始在家教育" },
    { icon: "📖", en: "Bible Memorization", zh: "背誦聖經" },
    { icon: "👁️", en: "Catching the Vision", zh: "在家教育的異象" },
    { icon: "🏛️", en: "Building Godly Heritage", zh: "建立屬靈傳承" },
    { icon: "🎓", en: "From High School to College", zh: "從高中到大學" },
    { icon: "✡️", en: "Raising Kids the Jewish Way", zh: "猶太式教養" },
    { icon: "💑", en: "Marriage & Parenting", zh: "夫妻與親子" },
    { icon: "🛡️", en: "Defending Our Belief", zh: "捍衛我們的信仰" },
    { icon: "🎉", en: "Homeschool Is Fun", zh: "在家教育真好玩" },
    { icon: "🏪", en: "Family & Vendor Exhibits", zh: "家庭及機構展示區" },
  ],

  // ── SPEAKERS ────────────────────────────────────────────
  // Add or remove speaker objects here
  speakers: [
    {
      name: "Pastor Joe Sun 孫慈俠",
      role: "Senior Pastor, Ark Baptist Church",
      photo: "/assets/images/speakers/sun.png",
      bioEn: "Pastor Joe Sun is the senior pastor at Ark Baptist Church. He was previously a software developer in Silicon Valley for 17 years and received his Master of Divinity while working. In 2007, he started pastoring at Ark. Pastor Joe has been married for 33 years and is blessed with 3 daughters and 2 sons. He has homeschooled for 25 years and is often invited to share about family and homeschool-related topics at different places.",
      bioZh: "孫慈俠牧師，方舟浸信教會會牧，曾在矽谷從事軟件開發工作17年，其間攻讀神學，獲道學碩士學位，2007年蒙召辭去工作，全職牧會至今。孫牧師夫婦結縭33載，育有三女二男，從事在家教育25年。",
    },
    {
      name: "Pastor Amos Yang",
      role: "Lead Pastor, New Life Community Church",
      photo: "/assets/images/speakers/yang.png",
      bioEn: "Amos was born in Taiwan, grew up in Illinois, and became a believer during his early teenage years. He completed his Masters of Divinity at The Masters Seminary and his Doctor of Ministry at Talbot School of Theology. Amos serves as New Life's Lead Pastor while also working as an anesthesiologist. His ministry passions include comprehensive discipleship and training Christians to think biblically.",
      bioZh: "Amos出生於台灣，在伊利諾州長大，十幾歲時就信了主。完成了神學院的神學碩士學位，並在Talbot神學院完成了教牧學博士學位。不僅擔任新生命教會的主任牧師，同時也是一位麻醉師。",
    },
    {
      name: "Denise Boiko",
      role: "Author & Homeschool Educator",
      photo: "/assets/images/speakers/boiko.png",
      bioEn: "With a BS in biology and a lifelong interest in writing, Denise Boiko became a full-time homeschool mom to her two children, who went on to attend Stanford University and USC. Since 2006, she has taught writing, biology, and literature. Her book, Homeschooled and Headed for College, walks parents and students through the path to college admissions.",
      bioZh: "Denise Boiko 擁有生物學學士學位，成為兩個孩子的全職在家教育媽媽，孩子分別進入史丹佛大學和南加大。著有《Homeschooled and Headed for College》，引導家長和學生跨越大學入學之路。",
    },
    {
      name: "Jeff Liu 劉展華",
      role: "Minister, Ark Baptist Church",
      photo: "/assets/images/speakers/liu.png",
      bioEn: "Brother Jeff Liu was born in Taiwan and holds two master's degrees in business administration and computer science from University of Wisconsin-Madison. He worked in the high-tech industry for over a decade. He was called to full-time ministry in 2015 and currently serves in preaching and teaching at Ark Baptist Church.",
      bioZh: "劉展華弟兄生於台灣，美國企管與電腦雙碩士，曾任高科技公司十餘年。2015年蒙召全時間事奉，現於方舟浸信教會從事講道與教導事奉。",
    },
    {
      name: "Pastor Neil Mammen",
      role: "Founder, No Blind Faith",
      photo: "/assets/images/speakers/mammen.png",
      bioEn: "Neil Mammen, founder of No Blind Faith, is a passionate apologist dedicated to equipping believers with a rational, scientific, historical, and logical defense of their faith. An ordained pastor and dynamic communicator, he is the author of Jesus Is Involved in Politics and Who Is Agent X? His mission is to ensure kids do not abandon their faith in college.",
      bioZh: "Neil Mammen牧師是 No Blind Faith 的創辦人，致力於用理性、科學、歷史和邏輯等方式裝備信徒。著有《Jesus Is Involved in Politics》、《Who Is Agent X?》。",
    },
    {
      name: "Pastor Brad Brown & Anastasia Brown",
      role: "Senior Pastor & National Bible Bee Champion",
      photo: "/assets/images/speakers/brown.png",
      bioEn: "Brad Brown has a variety of ministerial experience and serves as senior pastor. He and his wife Yulia have four children. Anastasia Brown is an alumna and former Junior division winner of the National Bible Bee Competition, in which she competed for eleven years. She is passionate about Scripture memorization and recitation.",
      bioZh: "Brad Brown牧師曾在各個不同年齡層中擔任牧師。Anastasia Brown曾參加過11年全國聖經蜜蜂賽並獲得少年組冠軍，熱衷於聖經背誦。",
    },
  ],

  // ── PAST YEARS ──────────────────────────────────────────
  // Add each past year here so the archive nav builds automatically
  pastYears: [
    { year: "2025", url: "/2025/" },
  ],

};
