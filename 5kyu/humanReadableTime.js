/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
 
  if (seconds < 0 || seconds > 359999) {
    return null;
  };

  if (seconds === 0) {
    return '00:00:00';
  };

  // Calculate the number of hours. Add 0 to the first digit in case hour is less than 10 to maintian two digit format.
  let hours = Math.floor(seconds / 3600);
  seconds = seconds - (hours * 3600);
  if (hours < 10) {
    hours = '0' + hours;
  };
  
  // Calculate the number of Minutes. Add 0 to the first digit in case minutes are less than 10 to maintian two digit format.
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - (minutes * 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  };

  // Add 0 to the first digit in case seconds are less than 10 to maintian two digit format.
  if (seconds < 10) {
    seconds = '0' + seconds;
  };

  return `${hours}:${minutes}:${seconds}`;
};



humanReadable(0) //00:00:00
humanReadable(59) //00:00:59
humanReadable(60) //00:01:00
humanReadable(90) //00:01:30
humanReadable(45296) //12:34:56
humanReadable(86399) //23:59:59