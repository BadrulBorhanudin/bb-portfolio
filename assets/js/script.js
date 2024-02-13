$('.navbar-nav a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

const projects = [
    { name: "Password Generator", image: "./assets/images/weekly-challenges-1.png", description: "Weekly Challenge - Password Generator", demoLink: "https://badrulborhanudin.github.io/password-generator/", repoLink: "https://github.com/badrulborhanudin/password-generator" },
    { name: "Coding Quiz App", image: "./assets/images/weekly-challenges-2.png", description: "Weekly Challenge - Coding Quiz App", demoLink: "https://badrulborhanudin.github.io/coding-quiz-app/", repoLink: "https://github.com/BadrulBorhanudin/coding-quiz-app" },
    { name: "Work Day Scheduler", image: "./assets/images/weekly-challenges-3.png", description: "Weekly Challenge - Work Day Scheduler", demoLink: "https://badrulborhanudin.github.io/work-day-scheduler/", repoLink: "https://github.com/badrulborhanudin/work-day-scheduler" },
    { name: "Weather Dashboard", image: "./assets/images/weekly-challenges-4.png", description: "Weekly Challenge - Weather Dashboard", demoLink: "https://badrulborhanudin.github.io/weather-dashboard/", repoLink: "https://github.com/BadrulBorhanudin/weather-dashboard" },
    { name: "As The Crow Drives", image: "./assets/images/group-project-1.png", description: "Group Project - #1", demoLink: "https://BadrulBorhanudin.github.io/AsTheCrowDrives", repoLink: "https://github.com/BadrulBorhanudin/AsTheCrowDrives" },
    // To Do: Add more projects
  ];

  function generateAccordion() {
    const accordionContainer = document.getElementById("projectAccordion");

    projects.forEach((project, index) => {
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");

        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="project${index}Heading">
                <button class="accordion-button text-light type="button" data-bs-toggle="collapse" data-bs-target="#project${index}Collapse" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="project${index}Collapse">
                    ${project.name}
                </button>
            </h2>
            <div id="project${index}Collapse" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="project${index}Heading" data-bs-parent="#projectAccordion">
                <div class="accordion-body bg-dark text-light">
                    <h5>${project.description}</h5>
                    <img src="${project.image}" class="d-block mx-auto my-3 project-image img-fluid" alt="${project.name}" data-bs-toggle="modal" data-bs-target="#imageModal${index}">
                </div>
            </div>

        `;

        accordionContainer.appendChild(accordionItem);
    });
}

function generateModals() {
const modalContainer = document.querySelector(".modal-container");

projects.forEach((project, index) => {
    const modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.id = `imageModal${index}`;
    modal.tabIndex = -1;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", `imageModal${index}Label`);
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
    <!-- Modal content for ${project.name} -->
    <div class="modal-dialog" role="document">
        <div class="modal-content bg-dark text-light">
        <div class="modal-header">
            <h5 class="modal-title" id="imageModal${index}Label">${project.name}</h5>
            <button type="button" class="close btn btn-warning" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <img src="${project.image}" class="img-fluid" alt="${project.name}">
        </div>
        <div class="modal-footer">
            <a href="${project.demoLink}" target="_blank" class="btn btn-warning">Live Demo</a>
            <a href="${project.repoLink}" target="_blank" class="btn btn-warning">GitHub Repo</a>
        </div>
        </div>
    </div>
    `;

    modalContainer.appendChild(modal);
});
}

generateAccordion();
generateModals();
