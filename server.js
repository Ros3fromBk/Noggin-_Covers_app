// DEPENDENCIES

const app = require('./app')


 // CONFIGURATION

// const PORT = 3004
require('dotenv').config();
const { PORT } = process.env;


// LISTEN

app.listen(PORT, () => {
    console.log("Lisitening on Port,", PORT)
    // console.log(`Lisitening on Port,${PORT}`)
});