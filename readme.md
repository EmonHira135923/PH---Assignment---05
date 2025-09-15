## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and query8tor / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

--------------------------- Ans.to the.Q.No --> 01 -------------------------------------

1. getElementById 3 Difference Point ---->

i. getElementById দিয়ে একটি মাত্র HTML Element ধরা যায় ।

ii. getElementById এটি সবসময় ইউনিক থাকে ।

iii. getElementById Example :

document.getElementById("My-id");

2. getElementsByClassName 3 Difference Point ---->

i. getElementsByClassName দিয়ে একাধিক HTML Element ধরা যায় ।

ii. getElementsByClassName এটি ইউনিক নয়,এটি HTML COLLECTION Return করে ।

iii. getElementsByClassName Example :

document.getElementsByClassName("my-classname");

3. querySelector 3 Difference Point ---->

i. querySelector CSS Selector এর মতো কাজ করে ।

ii. querySelector প্রথম যেটা মিলে যাবে সেই element রিটার্ন করে ।

iii. querySelector Example :

document.querySelector("my-selector");

---------------------------- Ans.to the.Q.No - 02 ---------------------------------

2.

1. নতুন Element তৈরি করা ।

2 . নতুন কনটেন্ট বা আ্যট্রিবিউট সেট করা ।

3. DOM এ যোগ করতে হবে ।

4. New Create Element Example :

   <div id="container"></div>

   <script>
     let newdiv = document.createElement("p");
     newdiv.textContent = "IT's new Element";
     document.getElementById("container").appendChild(newdiv);
   </script>

   ---------------------------- Ans.to the.Q.No - 03 ---------------------------------

Event Bubbling হলো যখন কোনো Child Element এ ইভেন্ট ট্রিগার করা হয়,তখন ইভেন্টটা ক্রমান্বয়ে Parent,GrandParent,Documentation এ যায় ।

Event Bubbling Example :

    <div id="parent">
      <div id="child">
        <button>Click Me</button>
      </div>
    </div>

    <script>
      // Child Clicked
      document.getElementById("child").addEventListener("click", function () {
        console.log("Button Clicked");
      });

      //   Parent Clicked
      document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent Div Clicked");
      });
    </script>

    ---------------------------- Ans.to the.Q.No - 04 ---------------------------------

Event Delegation হলো – অনেকগুলো child element-এর ইভেন্ট আলাদা আলাদা না দিয়ে, তাদের parent element-এ একবার ইভেন্ট হ্যান্ডলার বসানো, আর ইভেন্ট বুদবুদের মাধ্যমে কোন child-এ ক্লিক হয়েছে সেটা parent থেকে হ্যান্ডল করা।

Event Delegation Example :

    <ul id="menu">
      <li>name-1</li>
      <li>name-2</li>
      <li>name-3</li>
      <li>name-4</li>
    </ul>

    <script>
      document.getElementById("menu").addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
          console.log("You Clicked", e.target.textContent);
        }
      });
    </script>

---------------------------- Ans.to the.Q.No - 05 ---------------------------------

\*\*\*\*PreventDefault() 3 Difference ---->

i. এটি <form> tag er <href=""> পেজ রিলোড বা নেভিগেট হওয়ার কাজ থেমে যায় ।

ii . <form> tag er Submit Button কে ডিফল্ট সাবমিট থেমে যায় ।

iii. PreventDefault() Example :

<form id="form" action="">
<button>Click Me</button>
</form>

    <script>
      document.getElementById("form").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Button Clicked");
      });
    </script>

\*\*\* stopPropagation() 3 Difference ----->

i. এই মেথডটা Child Event থেকে ইভেন্টটা Parent Element এ যেতে দেয় না ।

ii. এটি Event Bubbling থেমে যায় ।

iii. stopPropagation() Example :

    <div id="parent">
      <div id="child">
        <button>Click Me</button>
      </div>
    </div>

    <script>
      document.getElementById("child").addEventListener("click", function (e) {
        e.stopPropagation();
        console.log("child");
      });

      document.getElementById("parent").addEventListener("click", function (e) {
        console.log("Parent");
      });
    </script>
