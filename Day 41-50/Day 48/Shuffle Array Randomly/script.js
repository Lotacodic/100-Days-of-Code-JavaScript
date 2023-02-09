let originalArrRef = document.getElementById("original-arr");
let shuffledArrRef = document.getElementById("shuffled-arr");

let randomize = (arr) => {
  let shuffledArr = [...arr];
  let index = shuffledArr.length;
  let indexRandom;
  while (index != 0) {
    indexRandom = Math.floor(Math.random() * index);
    index -= 1;
    [shuffledArr[index], shuffledArr[indexRandom]] = [
      shuffledArr[indexRandom],
      shuffledArr[index],
    ];
  }
  originalArrRef.innerHTML = `<span>Original Array:</span> ${arr}`;
  shuffledArrRef.innerHTML = `<span>Shuffled Array:</span> ${shuffledArr}`;
  return shuffledArr;
};
let arr = [1, 56, 7, 28, 89, 90, 23, 66];
randomize(arr);
console.log(arr);
console.log(randomize(arr));