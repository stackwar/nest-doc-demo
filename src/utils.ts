import { exec } from 'child_process';

export const execCmd = async (cmdStr) => {
  return new Promise((resolve) => {
    exec(cmdStr, (err) => {
      if (err) {
        console.log('error: ', err);
        process.exit();
      } else {
        resolve(1);
      }
    });
  });
};
