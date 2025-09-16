const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("handles 2 0 clock correctly", () => {
    const timeInWords = convertTimeToWords("2:00");
    expect(timeInWords).toBe("two o'clock");
  });

  it("handles three past two", () => {
    const timeInWords = convertTimeToWords("2:03");
    expect(timeInWords).toBe("three past two");
  });

  it("handles quarter past two", () => {
    const timeInWords = convertTimeToWords("2:15");
    expect(timeInWords).toBe("quarter past two");
  });

  it("handles half past two", () => {
    const timeInWords = convertTimeToWords("2:30");
    expect(timeInWords).toBe("half past two");
  });

  it("handles twenty seven to three", () => {
    const timeInWords = convertTimeToWords("2:33");
    expect(timeInWords).toBe("twenty seven to three");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });
});
