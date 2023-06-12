const express = require("express")
const DB = require("../database")

module.exports = async (req, res) => {
    const { nameValue, msgValue } = req.body

    let sql = "INSERT INTO users (name, msg) VALUES (?, ?)"
    await DB.execute(sql, [nameValue, msgValue], async (err, result) => {
        if (result) {
            console.log("Successfully inserted data!")
            return res.redirect("/")
        } else {
            await console.log('Failed inserted data!')
            return res.redirect("/")
        }
    })
}