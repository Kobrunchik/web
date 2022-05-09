const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('article.sqlite', options);

export default db;
