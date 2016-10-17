const express = require('express');
const app = express();
const spawn = require('child_process').spawn;

app.post('/', function (req, res) {
  res.send('Post');

  const update = spawn('./update.sh');

  update.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  update.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  update.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
});

app.listen(3000);
