
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after selecting a navigation link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Project category filter and search
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const projectSearch = document.getElementById("projectSearch");
const noResults = document.getElementById("noResults");

let activeFilter = "all";

function filterProjects() {
  const searchTerm = projectSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const category = card.dataset.category;
    const text = card.textContent.toLowerCase();

    const matchesCategory =
      activeFilter === "all" || category === activeFilter;

    const matchesSearch = text.includes(searchTerm);
    const shouldShow = matchesCategory && matchesSearch;

    card.hidden = !shouldShow;

    if (shouldShow) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    filterProjects();
  });
});

projectSearch.addEventListener("input", filterProjects);

// Display the current year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form demo: preview a message locally
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("visitorName").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();

  if (!name || !message) {
    formMessage.textContent = "Please fill in both fields.";
    return;
  }

  formMessage.textContent =
    `Preview ready for ${name}: ${message}`;

  // This demo does not send or save the message.
});
