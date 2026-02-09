const db = require('../db/queries');

async function getMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", { messages: messages })
}

async function addMessage(req, res) {
    const username = req.body.name;
    const text = req.body.message;
    await db.addMessage(username, text);
    res.redirect("/");
}

function getForm(req, res) {
    res.render("form");
}

module.exports = {
    getMessages,
    addMessage,
    getForm
}