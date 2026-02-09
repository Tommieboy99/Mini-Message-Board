const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    username VARCHAR(100) NOT NULL, 
    text VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES ('Tom', 'This Is The First Message In The Database');
`;

const connectionString = process.argv[2];
async function main() {
    console.log("seeding...");
    console.log(connectionString);
    const client = new Client({
        connectionString,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();