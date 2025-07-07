// buat scroll smoth
document.querySelectorAll(".nav-links a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

// buat contact
if (targetId === "#contact") {
  window.location.href =  "mailto:ifafuady31@gmail.com";
  return;
  }

    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// fade-in efek
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".section, .card, .gallery-grid img").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", function () {
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add("visible");
         }
       });
     }, { threshold: 0.2 });
     document.querySelectorAll(".fade-in").forEach(el => {
       observer.observe(el);
     });
});

    
// buat sosmed
function redirInstagram() {
  window.location.href = "https://www.instagram.com/xyyypnn"
};
function redirTiktok() {
  window.location.href = "https://www.tiktok.com/@x_winns"
};

// buat inspek
document.oncontextmenu = function () {
            alert("mau ngapain lu jing");
            return false;
}

// buat text ketik 
var aText = [
   "HELLO I'M IRFAN MUBAROK",
   "I'M A WEB DEVELOPER",
   "WELCOME TO MY WEBSITE"
 ];
 var iIndex = 0;
 var iTextPos = 0;
 var isDeleting = false;
 var iSpeed = 100;
 var iPause = 1000; // jeda ketik
 function typewriter() {
   var destination = document.getElementById("typedtext");
   var fullText = aText[iIndex];
   if (isDeleting) {
     iTextPos--;
   } else {
     iTextPos++;
   }
   destination.innerHTML = fullText.substring(0, iTextPos);
   if (!isDeleting && iTextPos === fullText.length) {
     isDeleting = true;
     setTimeout(typewriter, iPause);
   } else if (isDeleting && iTextPos === 0) {
     isDeleting = false;
     iIndex = (iIndex + 1) % aText.length;
     setTimeout(typewriter, 300);
   } else {
     setTimeout(typewriter, isDeleting ? 50 : iSpeed);
   } 
 }
 
 typewriter();