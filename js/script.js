// // preloader function starts here
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 15000);
});
// // preloader function ends here

// the nav-bar toggle function
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-list");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// toggle function ends here

// typing effect start here
const textArray = [
  "I'm Bright Adeyemo",
  "I'm a Frontend Developer",
  "I love building the web",
];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;

let textIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 1000);
});

// typing effect end here

// progression bar
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fills = document.querySelectorAll(".skill-fill");
        fills.forEach((fill) => {
          const percent = fill.getAttribute("data-percent");
          fill.style.width = percent;
        });
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.4,
  }
);
const skillSection = document.querySelector(".the-skill");
observer.observe(skillSection);

// window.addEventListener("DOMContentLoaded", () => {
//   const fills = document.querySelectorAll(".skill-fill");
//   fills.forEach((fill) => {
//     const percent = fill.getAttribute("data-percent");
//     setTimeout(() => {
//       fill.style.width = percent;
//     }, 300);
//   });
// });

// portfolio section javascript

function showOverlay(selectedItem) {
  // this remove active from all items
  document.querySelectorAll(".project-one").forEach((item) => {
    item.classList.remove("active");
  });

  // add active to the clicked item
  selectedItem.classList.add("active");
}

// hide overlays
document.addEventListener("click", function (e) {
  if (!e.target.closest(".project-one")) {
    document.querySelectorAll(".project-one").forEach((item) => {
      item.classList.remove("active");
    });
  }
});
// porfolio section end here

// blog-section start here
function showOverlay(selectedItem) {
  // this remove active from all items
  document.querySelectorAll(".blog-one").forEach((item) => {
    item.classList.remove("active");
  });

  // add active to the clicked item
  selectedItem.classList.add("active");
}

// hide overlays
document.addEventListener("click", function (e) {
  if (!e.target.closest(".blog-one")) {
    document.querySelectorAll(".blog-one").forEach((item) => {
      item.classList.remove("active");
    });
  }
});
// blog-section end here

//portfolio-section filter functionality
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-one");

  projects.forEach((project) => {
    const projectCategory = project.getAttribute("data-category");

    if (category === "all" || projectCategory === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  // Optional: update active class on nav
  const navLinks = document.querySelectorAll(".project-navbar a");
  navLinks.forEach((link) => link.classList.remove("active"));
  document.querySelector(`[data-filter="${category}"]`).classList.add("active");
}

// copyright date functionality
document.addEventListener("DOMContentLoaded", () => {
  const copyRightYear = new Date().getFullYear();
  document.getElementById("copyright-date").textContent = copyRightYear;
});
