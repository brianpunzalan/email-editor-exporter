const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const fs = require('fs')

const buildPath = path.join(__dirname, '../', 'build')

app.use(express.static(buildPath));
app.use(bodyParser.json());

app.post('/template/save', function (req, res) {
    setTimeout(() => {
        try {
            const data = JSON.stringify(req.body.design);
            const filePath = path.resolve(__dirname, './results', './template.json');
            fs.writeFileSync(filePath, data, function (err) {
                if (err) throw err;
                console.log('Template JSON File is created successfully.');
            })
            res.download(filePath);
        } catch (e) {
            console.log(e.message)
            res.sendStatus(500)
        }
    }, 5000)
});

app.post('/export', function (req, res) {
    try {
        const filePath = path.resolve(__dirname, './results', './exported.htm');
        fs.writeFileSync(filePath, req.body.html, function (err) {
            if (err) throw err;
            console.log('Exported HTML file is created successfully.');
        })
        res.download(filePath);
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
});

app.get('/', function (req, res) {
  res.sendFile(path.join(buildPath, '/index.html'));
});

app.listen(process.env.PORT || 8080);