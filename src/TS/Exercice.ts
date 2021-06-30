const numbersUnsquared = [1, 2, 3, 4, 5];
const numbersPow = (arr: number[]) => {

  return arr.map((a) => Math.pow(a, 2));
}

const squaredNumbers = numbersPow(numbersUnsquared);

const numbers = [1, -4, 12, 0, -3, 29, -150];

const sumPositiveNumbers = (arr: number[]) => {
  const reducer = (acc: number, curr: number) => {
    if (curr >= 0) {
      return acc + curr
    }
    return acc;
  }

  return arr.reduce(reducer, 0)
}



const sumOfAllPositiveNumbers = sumPositiveNumbers(numbers);

const sentence = "Victor Nazim Raph Tanaya Max";

const firstLetters = (str: string) => {

  const newArray = str.split(' ');
    let newStr = '';
    for (let i = 0; i < newArray.length; i++) {
      newStr = newStr + newArray[i].charAt(0);

    }

    return newStr;
};

// Expected output "VNRTM"
const initials = firstLetters(sentence);

export { squaredNumbers, sumOfAllPositiveNumbers, initials };
