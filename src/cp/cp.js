import {fork} from 'child_process';

const spawnChildProcess = async (args) => {
  const argsToSend = args ? [...args] : [];
  const childProcess = fork('files/script.js', argsToSend);
    
  childProcess.on('message', data => process.stdout.write(data));
  childProcess.on('error', () => process.exit());
  process.stdin.on('data', data => childProcess.send(data.toString()));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
