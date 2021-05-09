const navOpener = document.querySelector(".nav-opener");

const navLinks = document.querySelectorAll(".navLink");

navOpener.addEventListener("click", () => {
  document.body.classList.toggle("navOpen");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("navOpen");
  });
});

//date
document.getElementById("year").innerHTML = new Date().getFullYear();

//Autocomplete on the search bar

// const listOfKeywords = [
//   "html",
//   "css",
//   "frontend",
//   "backend",
//   "flutter",
//   "android",
//   "iOS",
//   "firebase",
//   "programming",
//   "javaScript",
//   "angular",
//   "bootstrap",
//   "xml",
//   "androidstudio",
//   "csharp",
//   "framework",
//   "library",
//   "asp.net",
//   "sql",
//   "web",
//   "mobile",
//   "database",
//   "service",
//   "technologies",
//   "education",
//   "school",
//   "university",
//   "college",
//   "address",
//   "certificates",
//   "qualification",
//   "skills",
//   "interests",
//   "hobbies",
//   "number",
//   "contact",
//   "email",
//   "socialmedia",
//   "linkedin",
//   "github",
//   "work",
//   "testdrivendevelopment",
//   "oop",
//   "xml",
//   "obejectorientedprogramming",
//   "androidstudio",
// ];

// document.getElementById("search").addEventListener('input', (e) => {});
