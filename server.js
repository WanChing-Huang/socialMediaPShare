const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/simple', (req, res)=>{
    app.json({test:'successful'});
});

app.listen(
    PORT,
    ()=> console.log(`http://localhost:${PORT}`)
);

