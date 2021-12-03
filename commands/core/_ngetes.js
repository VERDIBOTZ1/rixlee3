const fetch = require("node-fetch")
let util = Ft.util

module.exports = {
name: ["tes"],
type: ["default"],
description: "menampilkan command",
utilisation: "#tes",

  async execute(m) {
let { conn } = data

conn.sendButImg(m.chat, await ( await fetch('https://i.ibb.co/YXsL9Ym/IMG-20211203-WA0010.jpg')).buffer(), `Ismail`, `Kurama`, `Subscribe`, `oke`, m)

  }
}
