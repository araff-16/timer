const alarms = process.argv.splice(2);

for (let time of alarms) {
  time = Number(time);
  if (time > 0 && Number.isInteger(time)) {
    setTimeout(() => {
      console.log('beep', time);
    }, 1000 * time);
  }
}
