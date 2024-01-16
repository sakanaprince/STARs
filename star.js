window.addEventListener('DOMContentLoaded', ()=> {

//葉っぱ生成の関数、でも今回は星って話だね
const container = document.querySelector('.effect');

const createStar =(starClass, minSizeVal, maxSizeVal) =>{
    const starEl = document.createElement('span'); 
    //うまくいかなかった最大の原因は6行目starClassが読み取られなかったこと。真下のカッコが間違えていた。()ではなく{}だったのに...
    starEl.className = `star ${starClass}`;    //やばいぞ「'」「`」のミスがあった,valのvを大文字にし忘れてた　真上starEl間違い
    const minSize = minSizeVal;
    const maxSize = maxSizeVal;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    starEl.style.width =`${size}px`;
    starEl.style.height = `${size}px`;
    //下のやつは星のX軸方向の発生位置をランダムに指定するにょ。
    starEl.style.left = Math.random() * 100 + '%';
  container.appendChild(starEl);
  
    //完成した星の要素をコンテナに追加する
    //あの〜ですね...星が消えるという動作が作動していなかったのは真上のコメントアウトがちゃんと出来てなかったからなんですよぉ...はい...
    

    setTimeout(() =>{
        starEl.remove();
    }, 3000);//cssのアニメーション実行時間を気にするこいつはただ、星を消すだけのやつ
}



 // 星を生成する間隔をミリ秒で指定する
  // createStarの引数には、'クラス名', '最小サイズ', '最大サイズ'を渡す
setInterval(createStar.bind(this, 'star-1', 100, 200),150);
setInterval(createStar.bind(this, 'star-2', 60, 100),200);
setInterval(createStar.bind(this, 'star-3', 80, 100),200);
});