import express from 'express';
const app = express()

app.get('/', (req, res) => {
    res.send("Hello World. Hello Api ...");
});

app.listen(5000, () => {
    console.log(`Server started on 5000`);
});