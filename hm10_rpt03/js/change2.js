var files2 = [
  "media/p1.png",
  "media/p1.png",
  "media/p1.png",
  "media/p5.png"
];

var imgs = new Array();
for (var i = 0; i < files2.length; i++) {
  imgs[i] = new Image(); // 메모리에 이미지 객체 생성
  imgs[i].src = files2[i]; // 이미지 로딩
}
// 다음 이미지 출력
var next = 1;
function change2(img) {
  img.src = imgs[next].src; // 이미지 변
  next++; // 다음 이미지
  next %= imgs.length; // 개수를 넘으면 처음으로
}

function init2(img) {
  img.src = imgs[next - 1].src; // 이미지 변경
}

