//add nav class and to top animate
var bodyClass = document.querySelector("nav.nav");
var to_top = document.getElementById("to-top");
window.addEventListener("scroll", function () {
   var st = this.scrollY;
   if (0 < st) {
      bodyClass.classList.add("hideUp");
      to_top.style.display = "block";
      to_top.style.transition = "opacity 5s";
      to_top.animate({ opacity: 1 }, 500);
   } else {
      bodyClass.classList.remove("hideUp");
      to_top.animate({ opacity: [1, 0] }, 300);
      window.setTimeout(function () {
         to_top.style.display = "none";
      }, 500);
   }
});

//footer current year
document.getElementById("current_date").innerHTML = new Date().getFullYear();

//pricing program
var programs = ["10000", "15000", "20000", "25000", ">25000"];
var program_list = document.querySelector(".program-list");
var program_str = "";
for (var i = 0; i < programs.length; i++) {
   var radio_checked = i === 0 ? "checked" : "";
   var content =
      "<li> <input type='radio' id='program_" +
      i +
      "' name='program' value='" +
      programs[i] +
      "' " +
      radio_checked +
      ">\
   <label class='program-price' for='program_" +
      i +
      "'>" +
      programs[i] +
      "位</li>";

   program_str += content;
}
program_list.innerHTML = program_str;

program_list.addEventListener(
   "click",
   function (e) {
      var num = e.target.value;
      if (num === undefined) return;

      var index = programs.indexOf(num) + 1;
      var baseTWD = 600 * index;
      var standardTWD = 1600 * index;

      document.getElementById("base_people").innerHTML = num;
      document.getElementById("base_TWD").innerHTML = baseTWD;
      document.getElementById("standard_people").innerHTML = num;
      document.getElementById("standard_TWD").innerHTML = standardTWD;
   },
   true
);

//qa list radio
var tempRadio = null;
function checkRadio(checkedRadio) {
   if (tempRadio == checkedRadio) {
      checkedRadio.checked = false;
      tempRadio = null;
   } else {
      tempRadio = checkedRadio;
   }
}

//check to top
function animateToTop(e) {
   e.preventDefault();
   var scrollToTop = window.setInterval(function () {
      var pos = window.pageYOffset;
      if (pos > 0) {
         window.scrollTo(0, pos - 20);
      } else {
         window.clearInterval(scrollToTop);
      }
   }, 16);
}
