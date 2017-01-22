// const moment = require('moment');  unused

function whatIsTheTime(timeInMirror){
  let mirrorTime = timeInMirror.split(":");
  let mirrorHours = parseInt(mirrorTime[0]);
  let mirrorMinutes = parseInt(mirrorTime[1]);
  let realMinutes, realHours;

  realMinutes = mirrorMinutes === 0 ? 0 : 60 - mirrorMinutes;

  realHours = mirrorMinutes > 0 ? 11 - mirrorHours : 12 - mirrorHours;
  realHours = realHours === 0 ? 12 : realHours === -1 ? 11 : realHours;

  let stringMinutes = realMinutes.toString();
  let stringHours = realHours.toString();

  if(realMinutes < 10) {
    stringMinutes = "0" + stringMinutes;
  }
  if(realHours < 10) {
    stringHours = "0" + stringHours;
  }
  //console.log(stringHours + ":" + stringMinutes);
  return stringHours + ":" + stringMinutes;
}

module.exports = whatIsTheTime;

// a basic test
// whatIsTheTime('01:30');  //  '10:30'
// whatIsTheTime('07:35');  //  '04:25'
// whatIsTheTime('11:35');  //  '12:25'
// whatIsTheTime('11:59');  //  '12:01'
// whatIsTheTime('12:00');  //  '12:00'
// whatIsTheTime('12:30');  //  '11:30'
