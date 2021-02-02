// Progress Bar Starts 
document.addEventListener(
    "scroll",
    function() {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) - document.documentElement.clientHeight;
      scrollPercent = scrollTop / scrollBottom * 100 + "%";
      document
        .getElementById("_progress")
        .style.setProperty("--scroll", scrollPercent);
    },
    { passive: true }
  );

// Progress Bar Ends 

// Step 3 - Instilize the plugin by #id selector
// VANTA.NET({
//   el: "#vantajs",
  /* more options (Uncomment) */
//   mouseControls: false,
//   touchControls: false,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   color: 0x0,
//   backgroundColor: 0xdfdfff,
//   points: 12.00,
//   maxDistance: 23.00,
//   spacing: 20.00
// });

// var fullName = document.getElementById("full-name");
// let email = document.getElementById("email-id");
// let subject = document.getElementById("subject");
// let writeToMe = document.getElementById("write");

// let btn = document.getElementsByClassName("submit-btn");

// document.getElementById("myBtn").addEventListener("click", function () {
//   if (fullName.value == "") {
//     // document.getElementById("name-error").innerHTML = "*NAME REQUIRED";
//     alert("Name must be filled out!!");
//     return false;
//   }
//   if (email.value == "") {
//     // document.getElementById("email-error").innerHTML = "*EMAIL REQUIRED";
//     alert("Email must be filled out!!");
//     return false;
//   }
//   if (subject.value == "") {
//     // document.getElementById("subject-error").innerHTML = "*SUBJECT REQUIRED";
//     alert("Subject must be filled out!!");
//     return false;
//   }
// });
// function clear() {
//   document.getElementById("name-error").innerHTML = "";
//   document.getElementById("email-error").innerHTML = "";
//   document.getElementById("subject-error").innerHTML = "";
// }
// setInterval(() => {
//   clear();
// }, 6000);
