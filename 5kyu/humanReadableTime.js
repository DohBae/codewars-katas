/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
  // How many seconds are in a minute- 60
  // How many seconds are in an hour- 3600
  // If seconds are less than 0 or greater than 359999 then answer is null
  // Divide 'seconds' by 3600 to get the hour. Make sure there is no decimals
  // Subtract the number of seconds in the hour from the total seconds to find the leftover seconds. Make sure there is no decimals
  // Divide seconds by 60 to get number of minutes
  // Whatever is left will be the number of seconds

  if (seconds < 0 || seconds > 359999) {
    console.log(null)
    return null
  }

  if (seconds === 0) {
    console.log('00:00:00')
    return '00:00:00'
  }

  // Calculate the number of hours. Add 0 to the first digit in case hour is less than 10 to maintian two digit format.
  let hours = Math.floor(seconds / 3600)
  seconds = seconds - (hours * 3600)
  if (hours < 10) {
    hours = '0' + hours
  }
  // console.log(hours)
  
  // Calculate the number of Minutes. Add 0 to the first digit in case minutes are less than 10 to maintian two digit format.
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - (minutes * 60)
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  // console.log(minutes)

  // Add 0 to the first digit in case seconds are less than 10 to maintian two digit format.
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  // console.log(seconds)

  console.log(`${hours}:${minutes}:${seconds}`)
  return `${hours}:${minutes}:${seconds}`;
}



humanReadable(0) //00:00:00
humanReadable(59) //00:00:59
humanReadable(60) //00:01:00
humanReadable(90) //00:01:30
humanReadable(45296) //12:34:56
humanReadable(86399) //23:59:59