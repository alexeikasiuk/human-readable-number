module.exports = function toReadable(number) {
    let result = "";
    let dict = {
        0: "zero",
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
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }
    let arr = number.toString().split("").reverse();

    for (let i = arr.length - 1; i >= 0; i--) {
        switch (i) {
            case 2: {
                result += dict[arr[i]] + " hundred";
                break;
            }
            case 1: {
                if (arr[i] == 0) continue;
                if (arr[i] == 1) {
                    let key = Number(arr[i] + "" + arr[i - 1]);
                    return result += result.length > 0 ? " " + dict[key] : dict[key];
                } else {
                    result += result.length > 0 ? " " + dict[arr[i] + 0] : dict[arr[i] + 0];
                }
                break;
            }
            case 0: {
                if (arr[i] == 0 && result.length > 0) return result;
                result += result.length > 0 ? " " + dict[arr[i]] : dict[arr[i]];
            }
        }
    }
    return result;
}