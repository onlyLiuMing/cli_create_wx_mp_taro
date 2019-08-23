
const program = require('commander');
import applyCommand from './commands';
import { VERSION } from './config/index';
import actionMap from './config/actionMap';

// interfaces
import { } from './interface';

program.version(VERSION);

// set program command
Object.entries(actionMap).forEach(kv => {
  const ACTION_NAME = kv[0];
  const ACTION_VALUE = kv[1];
  program
    .command(`${ACTION_NAME} ${ACTION_VALUE.params ? "<" + ACTION_VALUE.params + ">" : ''}`)
    .description(ACTION_VALUE.description);
})

// program action
program.action((actionName: string, ...args:any[]) => {
  // 调用指定命令
  applyCommand(actionName,...args);
})

// start program
program.parse(process.argv)