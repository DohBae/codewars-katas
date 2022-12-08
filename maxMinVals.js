const max = function(list) {
  const maxValue = Math.max(...list);

  return maxValue
}

max([4,6,2,1,9,63,-134,566])
max([5])

const min = function(list) {
  const minValue = Math.min(...list)

  return minValue
}

min([-52, 56, 30, 29, -54, 0, -110])
min([42, 54, 65, 87, 0])