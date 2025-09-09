// Heart Count

let heartcnt = 0;

let navbarheart = document.getElementById("heart-cnt-innerText");

let hearticon = document.getElementsByClassName("i-heart-cnt");

function heartclick() {
  heartcnt++;
  navbarheart.innerText = heartcnt;
}

for (let i = 0; i < hearticon.length; i++) {
  hearticon[i].addEventListener("click", heartclick);
}
