const app = require('./app');
const PORT = process.env.PORT || 3000;

console.log(`Navigate to http://localhost:${PORT}`);

app.listen(PORT);


