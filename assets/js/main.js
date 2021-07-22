var imgArray = [
  'assets/images/yfu.png',
  'assets/images/yfu2.png',
  'assets/images/yfu3.png',
  'assets/images/yfu4.png',
  'assets/images/yfu5.png',
  'assets/images/yfu6.png',
];

var curIndex = 0;
var waifu = document.getElementById('yfu');

function timeout() {
  if (curIndex >= 0 && curIndex <= 5) {
    waifu.src = imgArray[curIndex];
    curIndex++;
  } else {
    curIndex = 0;
  }

  setTimeout(timeout, 5000);
}

timeout();
