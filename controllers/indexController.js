const express = require("express")
const DB = require("../database")

module.exports = async (req, res) => {

    // ต่อไปแสดงข้อมูล
    let sql = "SELECT * FROM users"
    await DB.execute(sql, async (err, data) => {
        await pageData(data)
    })

    async function pageData(data) {
        res.render('index', {
            data: data
        })
    }

    // สามารถฝากข้อมูลผ่านทาง function ได้นะครับ ถ้าไม่อยาก ใส่ res render ใน function db
    
}