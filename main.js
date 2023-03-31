$(function () {
  for (let i = 0; i < 20; i++) {
    $("body").append(
      ` <div class="star1" style="top:${parseInt(
        Math.random() * 1000
      )}px;left:${parseInt(Math.random() * 100)}%;"></div>`
    );
  }

  for (let i = 0; i < 20; i++) {

  $("body").append(
    ` <div class="star2" style="top:${parseInt(
      Math.random() * 1000
    )}px;left:${parseInt(Math.random() * 100)}%;"></div>`
  );}



  for (let i = 0; i < 100; i++) {

    $("body").append(
      ` <div class="star3" style="top:${parseInt(
        Math.random() * 1000
      )}px;left:${parseInt(Math.random() * 100)}%;"></div>`
    );}
});
