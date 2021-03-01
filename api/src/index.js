const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(cors({
    optionsSuccessStatus: 200
}));
app.use(router);

app.listen(port, () => {
    console.log(`Listening at ${port}`);
})