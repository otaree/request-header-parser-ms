const express = require('express');
const requestIp = require('request-ip');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/whoami', (req, res) => {
    const ipaddress = requestIp.getClientIp(req); 
    const software = req.headers["user-agent"].match(/\(([^)]+)\)/)[1];
    const language = req.headers["accept-language"].split(',')[0];

    res.send({ ipaddress, software, language });
});

app.listen(port, () => {
    console.log(`server up at ${port}`);
});
