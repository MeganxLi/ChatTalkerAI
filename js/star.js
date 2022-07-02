var star = [
   {
      img: "user01.jpg",
      comment:
         "原來聊天機器人可以這麼有人性！團隊有完整的行銷計畫提供數位整合，讓我們公司的產品用更活潑的方式讓使用者認識。",
      company: "清心寡慾設計公司",
      title: "Lina 執行長",
      star: 5,
   },
   {
      img: "user02.jpg",
      comment: "團隊很積極的協助行銷追蹤，針對機器人進行優化，讓我們一個月內提高10000個追蹤者，客戶體驗回饋很正面！",
      company: "subwhat 行銷公司",
      title: "Zoe 活動長",
      star: 4,
   },
   {
      img: "user03.jpg",
      comment: "經營了好久的IG，一直無法提升粉絲數，和團隊合作後，才知道可以用聊天機器人玩這麼豐富的行銷活動！太讚拉～",
      company: "油土伯",
      title: "HowBig",
      star: 5,
   },
   {
      img: "user04.jpg",
      comment: "團隊很積極的協助行銷追蹤，針對機器人進行優化，讓我們一個月內提高10000個追蹤者，客戶體驗回饋很正面！",
      company: "subwhat 行銷公司",
      title: "Zoe 活動長",
      star: 4,
   },
   {
      img: "user05.jpg",
      comment: "經營了好久的IG，一直無法提升粉絲數，和團隊合作後，才知道可以用聊天機器人玩這麼豐富的行銷活動！太讚拉～",
      company: "油土伯",
      title: "HowBig",
      star: 3,
   },
];

var comment_list = document.querySelector(".comment-lsit");
var comment_card_width;
var mover_number;

//Calculate comment width size
function calcCommentWidth() {
   var comment_width = Number(comment_list.offsetWidth);
   switch (true) {
      case comment_width < 480:
         comment_card_width = comment_width;
         mover_number = -comment_card_width;
         break;
      case comment_width < 924:
         comment_card_width = comment_width / 2;
         mover_number = -comment_card_width;
         break;

      default:
         comment_card_width = comment_width / 3;
         mover_number = -comment_card_width;
         break;
   }

   var comment_str = "";
   for (var i = 0; i < star.length + 2; i++) {
      var x;
      if (i >= star.length) {
         x = i - star.length;
      } else {
         x = i;
      }
      var comment =
         " <li id='slide-" +
         x +
         "'> \
        <div class='comment-card' style='width:" +
         comment_card_width +
         "px'>\
            <img src='./img/" +
         star[x].img +
         "'/>\
            <div class='comment-content'>\
                <p>" +
         star[x].comment +
         "</p>\
                <h5>" +
         star[x].company +
         "</h5>\
                <div class='comment-score'>\
                    <span class='comment-score-name'>" +
         star[x].title +
         "</span>\
                    <span class='comment-score-star star-" +
         star[x].star +
         "'></span>\
                </div>\
            </div>\
        </div>\
    </li>";

      comment_str += comment;
   }

   comment_list.innerHTML = comment_str;
}

//click comment slick dots
var dots_list = document.querySelector(".slick-dots");
var dots_str = "";
for (var i = 0; i < star.length; i++) {
   var comment = " <li class='dots-check " + (i === 0 && "dots-active") + "' data-index='" + i + "'></li>";

   dots_str += comment;
}
dots_list.innerHTML = dots_str;

function moveTranslateX(target) {
   Array.from(dots_list.children).forEach((item) => item.classList.remove("dots-active"));
   var translateX = Number(target.getAttribute("data-index")) * mover_number;
   comment_list.style.transform = "translateX(" + translateX + "px)";
   target.classList.add("dots-active");
}

dots_list.addEventListener("click", (e) => {
   if (e.target.nodeName === "LI") {
      moveTranslateX(e.target);
   }
});

//page load
window.onload = function () {
   calcCommentWidth();
};

//screen width change
window.addEventListener("resize", (e) => {
   calcCommentWidth();
});

//3s move
function actionMove() {
   var dots_active = document.querySelector(".dots-active");
   var nextIndex = dots_active.nextElementSibling;

   //reached the last child, back first
   if (nextIndex === null) {
      nextIndex = document.querySelector(".dots-check:first-child");
   }
   moveTranslateX(nextIndex);
}
setInterval("actionMove()", "3000");
