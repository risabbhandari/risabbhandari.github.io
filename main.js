const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const li = document.createElement("li");
  const link = document.createElement("a");

  link.href = project.url;
  link.textContent = project.title;

  li.appendChild(link);
  projectList.appendChild(li);
});
