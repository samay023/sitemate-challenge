const numberToWordMapping = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "half",
};

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") return "midday";

  const [hours, minutes] = time.split(":").map(Number);

  if (minutes === 0) {
    return `${numberToWordMapping[hours]} o'clock`;
  }

  if (minutes <= 30) {
    return `${numberToWordMapping[minutes]} past ${numberToWordMapping[hours]}`;
  }

  const inverse = 60 - minutes;
  const nextHour = hours + 1;
  return `${numberToWordMapping[inverse]} to ${numberToWordMapping[nextHour]}`;
}

module.exports = { convertTimeToWords };
