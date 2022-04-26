const express = require('express')
const app = express()
const path = require('path')
const {spawn, ChildProcess} = require('child_process')
const http = require("http")
const WebSocket = require("ws")
const server = http.createServer(app);
const wss = new WebSocket.Server({server});

const CronJob = require('cron').CronJob;

const VIEWS_DIR = "views"
const PUBLIC_DIR = "public"
const PORT = 3000
const SCRIPT_PATH = path.join(__dirname, 'scripts/script.py')

const job = new CronJob('0 */5 * * * *', function() {
  const child = runScript("foo", "bar")
  console.log("Script Started");
  const d = new Date();
	console.log('Every 5 Minutes', d)
  child.stdout.on('data', (data) => {
    from_python = data.toString("utf8");
    from_python = from_python.replace(/\n/g, " ").replace(/\\n/g, " "); 
    console.log(from_python);
  });
  child.stderr.on('data', (data) => {
    console.log(`error:\n${data}`);
  });
  child.on('close', () => {
    console.log("Script Ended");
  });
	;
})

app.set('views', path.join(__dirname, VIEWS_DIR));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, PUBLIC_DIR)))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/run-sync', function (req, res) {
  const scriptProcess = runScript("foobar")
  res.set('Content-Type', 'text/plain');
  scriptProcess.stdout.pipe(res)
  scriptProcess.stderr.pipe(res)
})

/**
 * @param param {String}
 * @return {ChildProcess}
 */
function runScript(param) {
  /*
  python -u script.py --foo bar
  */
  return spawn('python', [
    "-u", SCRIPT_PATH,
    "--foo", param,
  ]);
}

/**
 * @param id {String}
 * @param ws {WebSocket}
 */
function runScriptInWebsocket(id, ws) {
  console.log("Script Started");
  const child = runScript("foobar")
  child.stdout.on('data', (data) => {
    if (ws.readyState === 1) {
      ws.send(`${data}`);
    }
  });
  child.stderr.on('data', (data) => {
    if (ws.readyState === 1) {
      ws.send(`error:\n${data}`);
    }
  });
  child.on('close', () => {
    console.log("Script Ended");
  });
}

// Init websocket communication
//////////////////////////////////////////////////////////////////////
let id = 1
wss.on('connection', (ws) => {
  const thisId = id++;

  ws.on('message', (message) => {
    // ws.send(`${message}`);
    if ("run" === message) {
      runScriptInWebsocket(thisId, ws)
    }
  });
  ws.send('');
});

// Start the cron job
//////////////////////////////////////////////////////////////////////
job.start();

// Start server
//////////////////////////////////////////////////////////////////////

server.listen(PORT, () => {
  console.log('\n');
  console.log('+--------------------------')
  console.log(' PID %d', process.pid)
  console.log(' Listening on port', PORT)
  console.log('+--------------------------')
})