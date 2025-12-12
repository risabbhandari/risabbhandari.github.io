/*
  Main JavaScript for Risab Bhandari's portfolio.
  Handles rendering of projects, search and filter interactions, and updates year.
*/

(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const listEl = document.getElementById("projectList");
  const searchEl = document.getElementById("search");
  const filterEl = document.getElementById("techFilter");
  const resetEl = document.getElementById("reset");
  const emptyEl = document.getElementById("emptyState");

  if (!listEl || !searchEl || !filterEl || !resetEl || !emptyEl) return;

  const allTech = Array.from(new Set(projects.flatMap((p) => p.tech.map((t) => t.trim()))))
    .sort((a, b) => a.localeCompare(b));

  allTech.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    filterEl.appendChild(opt);
  });

  function render(list) {
    listEl.innerHTML = "";
    if (!list.length) {
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;

    list.forEach((p) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const titleEl = document.createElement("h3");
      titleEl.className = "project-title";
      const aEl = document.createElement("a");
      aEl.href = p.pageUrl;
      aEl.textContent = p.title;
      titleEl.appendChild(aEl);

      const subtitleEl = document.createElement("p");
      subtitleEl.className = "project-subtitle";
      subtitleEl.textContent = p.subtitle;

      const badgesEl = document.createElement("div");
      badgesEl.className = "badges";
      p.tech.slice(0, 6).forEach((t) => {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = t;
        badgesEl.appendChild(badge);
      });

      const highlightsEl = document.createElement("ul");
      highlightsEl.className = "project-highlights";
      p.highlights.slice(0, 3).forEach((h) => {
        const li = document.createElement("li");
        li.textContent = h;
        highlightsEl.appendChild(li);
      });

      const linksEl = document.createElement("div");
      linksEl.className = "project-links";

      const caseLink = document.createElement("a");
      caseLink.href = p.links.caseStudy;
      caseLink.textContent = "Case Study →";
      linksEl.appendChild(caseLink);

      if (p.links.github && p.links.github !== "#") {
        const gh = document.createElement("a");
        gh.href = p.links.github;
        gh.target = "_blank";
        gh.rel = "noopener";
        gh.textContent = "GitHub";
        linksEl.appendChild(gh);
      }

      if (p.links.demo && p.links.demo !== "#") {
        const demo = document.createElement("a");
        demo.href = p.links.demo;
        demo.target = "_blank";
        demo.rel = "noopener";
        demo.textContent = "Demo";
        linksEl.appendChild(demo);
      }

      card.appendChild(titleEl);
      card.appendChild(subtitleEl);
      card.appendChild(badgesEl);
      card.appendChild(highlightsEl);
      card.appendChild(linksEl);

      listEl.appendChild(card);
    });
  }

  function apply() {
    const query = searchEl.value.trim().toLowerCase();
    const tech = filterEl.value;

    const filtered = projects.filter((p) => {
      const matchesTech = tech === "all" || p.tech.includes(tech);
      const searchable = [p.title, p.subtitle, p.tech.join(" "), p.highlights.join(" ")].join(" ").toLowerCase();
      const matchesQuery = !query || searchable.includes(query);
      return matchesTech && matchesQuery;
    });

    render(filtered);
  }

  searchEl.addEventListener("input", apply);
  filterEl.addEventListener("change", apply);

  resetEl.addEventListener("click", () => {
    searchEl.value = "";
    filterEl.value = "all";
    apply();
  });

  render(projects);
})();

// Theme toggle via RB
const rbToggle = document.getElementById("rb-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Toggle theme on click
rbToggle?.addEventListener("click", () => {
  const current =
    document.documentElement.getAttribute("data-theme") || "dark";

  const next = current === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

