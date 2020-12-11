const morgan = require('morgan');
const express = require('express');
const port = 3000;
const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('./public'));
// console.log(app);
app.get('/', (req, res) => {
    res.status(200).json({ 'message': "Hello world" });
});

app.listen(port, () => {
    console.log(`Server is listening in port http://localhost:${port}`);
})