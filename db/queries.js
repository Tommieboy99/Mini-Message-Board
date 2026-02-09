const pool = require("./pool");

async function getMessages() {
    const { messages } = await pool.query("SELECT * FROM messages")
    return messages
}

async function addMessage(username, text) {
    await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text])
}

module.exports = {
    getMessages,
    addMessage,
}