const stdin = process.stdin;
const stdout = process.stdout;
// don't worry about these next two lines of setup work.

stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdout.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
stdout.write("Please enter a number between 1 & 9: ");
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  

  if (key === '\u0003') {
    
    stdout.write("\nThanks for using me, ciao!");
    process.exit();
  }

  if (key === 'b') {
    console.log('\nbeep');
    stdout.write("Please enter a number between 1 & 9: ");
  } else if (key > 0 && !isNaN(Number(key)) && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      stdout.write('\nbeep');
      console.log(' ', key);
      stdout.write("\nPlease enter a number between 1 & 9: ");
    }, 1000 * key);
  } else {
    stdout.write("\nINCORRECT Please enter a number between 1 & 9: ");
  }
});





/*
const prompt = require('prompt-sync')();

while (true){

  const value = prompt('input value from 1 to 9:');

    time = Number(value);
    if (time > 0 && Number.isInteger(time) && time <= 9) {
      setTimeout(() => {
        console.log('beep', time);
      }, 1000 * time);
    }
  };
*/



