// Array Value

let arraylist = [];

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

// make a copy and alert for this copy btn

let copycnt = 0;

function copycntfunc(id) {
  let copybtn = document.getElementById(id);
  copybtn.addEventListener("click", function () {
    copycnt++;
    document.getElementById("make-a-copy").innerText = copycnt;

    let card = copybtn.parentNode.parentNode;

    let numberall = card.getElementsByClassName("number")[0].innerText;

    let tempinput = document.createElement("input");
    tempinput.value = numberall;
    document.body.appendChild(tempinput);
    tempinput.select();
    document.execCommand("copy");
    document.body.removeChild(tempinput);

    alert("Number " + numberall + " Copied");
  });
}

// card all copy

copycntfunc("copy-card-1");
copycntfunc("copy-card-2");
copycntfunc("copy-card-3");
copycntfunc("copy-card-4");
copycntfunc("copy-card-5");
copycntfunc("copy-card-6");
copycntfunc("copy-card-7");
copycntfunc("copy-card-8");
copycntfunc("copy-card-9");

// Call Btn and alert and remove coin for each call

// id="call-card-1"
// classname = call-card-all
// id = make-a-call

function callfunc(id) {
  let callbtn = document.getElementById(id);

  callbtn.addEventListener("click", function () {
    let value = parseInt(document.getElementById("make-a-call").innerText);

    if (value < 20) {
      alert("Your Balance is Low. Please Insert 20 Coin");
    } else {
      let remaingvalue = value - 20;
      document.getElementById("make-a-call").innerText = remaingvalue;

      let cardall = callbtn.parentNode.parentNode;

      let cardallcallnum =
        cardall.getElementsByClassName("number")[0].innerText;
      let cardallcalvalue =
        cardall.getElementsByClassName("text-format")[0].innerText;

      alert("Calling " + cardallcalvalue + " " + cardallcallnum + "...");

      const data = {
        name: cardallcalvalue,
        number: cardallcallnum,
        time: new Date().toLocaleTimeString(),
      };

      arraylist.push(data);
      historyfunc(data);
    }
  });
}

callfunc("call-card-1");
callfunc("call-card-2");
callfunc("call-card-3");
callfunc("call-card-4");
callfunc("call-card-5");
callfunc("call-card-6");
callfunc("call-card-7");
callfunc("call-card-8");
callfunc("call-card-9");

// history section

// history section
function historyfunc(data) {
  const historysection = document.getElementById("transaction-container");

  const div = document.createElement("div");
  div.innerHTML = `
                  <div
                id="history-item"
                class="flex justify-between gap-5 p-3 w-full bg-[#fafafa] mt-5 rounded-2xl items-center"
              >
                <div id="card-value" class="">
                  <h1 class="font-bold text-2xl mb-3 text-black">${data.name}</h1>
                  <p class="font-normal text-lg text-[#5c5c5c]">${data.number}</p>
                </div>
                <div>
                  <h6 class="font-semibold text-lg text-[#111111]">${data.time}</h6>
                </div>
              </div>
    `;

  historysection.appendChild(div);
}

// Clear Button

const clearbutton = document
  .getElementById("clear-btn")
  .addEventListener("click", function () {
    arraylist = [];
    document.getElementById("transaction-container").innerHTML = "";
  });
