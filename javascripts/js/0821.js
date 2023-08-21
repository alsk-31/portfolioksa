let food = ["햄버거", "돈까스", "칼국수", "김치찌개", "순찌"];
let i = Math.floor(Math.random() * food.length);
//i를 정수로 반환하고 , 0,1,2,3,4<필요한정슈>
console.log(i);
document.write(food[i]);
let bg = ["red", "blue", "green", "pink", "yellow"];
let j = Math.floor(Math.random() * food.length);
//0,1,2,3,4
document.querySelector("body").style.backgroundColor = bg[j];
let n = Math.floor(Math.random() * 6);
//0,1,2,3,4,5
document.querySelector("body").style.backgroundImage =
  "url(images/photo" + (n + 1) + ".jpg)";
// images 앞에 ../ 안넣어도 됨
//1,2,3,4,5,6
