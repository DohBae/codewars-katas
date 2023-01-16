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
  // Subtract the number of seconds in the hour from the total seconds to find the leftover seconds
  // Divide seconds by 60 to get number of minutes
  // Whatever is left will be the number of seconds
}

// humanReadable(0) //00:00:00
humanReadable(59) //00:00:59
// humanReadable(60) //00:01:00
// humanReadable(90) //00:01:30
// humanReadable(45296) //12:34:56
// humanReadable(86399) //23:59:59