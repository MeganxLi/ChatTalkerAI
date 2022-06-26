//add nav class
var bodyClass = document.querySelector("nav.nav").classList,
   lastScrollY = 0;
window.addEventListener("scroll", function () {
   var st = this.scrollY;
   // 判斷是向上捲動，而且捲軸超過 200px
   if (st < lastScrollY) {
      bodyClass.remove("hideUp");
   } else {
      bodyClass.add("hideUp");
   }
   lastScrollY = st;
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

document.getElementById("submit").onclick = function () {
   var radio = document.querySelector("input[type=radio][name=language]:checked");
   radio.checked = false;
};
