$('.navbar-nav a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

const projects = [
    {
        name: "Password Generator",
        image: "./assets/images/weekly-challenges-1.png",
        description: "Weekly Challenge - Password Generator",
        summary: "A random password generator tailored to the criteria selected by users.",
        demoLink: "https://badrulborhanudin.github.io/password-generator/",
        repoLink: "https://github.com/badrulborhanudin/password-generator"
    },
    {
        name: "Coding Quiz App",
        image: "./assets/images/weekly-challenges-2.png",
        description: "Weekly Challenge - Coding Quiz App",
        summary: "A coding quiz app built to assess my proficiency in JavaScript.",
        demoLink: "https://badrulborhanudin.github.io/coding-quiz-app/",
        repoLink: "https://github.com/BadrulBorhanudin/coding-quiz-app"
    },
    {
        name: "Work Day Scheduler",
        image: "./assets/images/weekly-challenges-3.png",
        description: "Weekly Challenge - Work Day Scheduler",
        summary: "A workday scheduler app, built specifically to test my knowledge in utilising local storage in JavaScript.",
        demoLink: "https://badrulborhanudin.github.io/work-day-scheduler/",
        repoLink: "https://github.com/badrulborhanudin/work-day-scheduler"
    },
    {
        name: "Weather Dashboard",
        image: "./assets/images/weekly-challenges-4.png",
        description: "Weekly Challenge - Weather Dashboard",
        summary: "A weather dashboard presents an intriguing challenge, allowing me to test my ability in fetching server-side APIs.",
        demoLink: "https://badrulborhanudin.github.io/weather-dashboard/",
        repoLink: "https://github.com/BadrulBorhanudin/weather-dashboard"
    },
    {
        name: "Route Optimisation Tool",
        image: "./assets/images/group-project-1.png",
        description: "Group Project - #1",
        summary: "As The Crow Drive is the first group project involves building a fully functional website that utilises at least two APIs and a CSS framework other than Bootstrap. This project is developed using the Bulma CSS Framework, GraphHopper API, Leaflet API, and GeoApify API.",
        demoLink: "https://BadrulBorhanudin.github.io/AsTheCrowDrives",
        repoLink: "https://github.com/BadrulBorhanudin/AsTheCrowDrives"
    },
    // To Do: Add more projects
  ];

  function generateAccordion() {
    const accordionContainer = $("#projectAccordion");

    projects.forEach((project, index) => {
        const accordionItem = $("<div>").addClass("accordion-item");

        accordionItem.html(`
            <h2 class="accordion-header" id="project${index}Heading">
                <button class="accordion-button text-light" type="button" data-bs-toggle="collapse" data-bs-target="#project${index}Collapse" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="project${index}Collapse">
                    ${project.name}
                </button>
            </h2>
            <div id="project${index}Collapse" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="project${index}Heading" data-bs-parent="#projectAccordion">
                <div class="accordion-body bg-dark text-light">
                    <h5>${project.description}</h5>
                    <p>${project.summary}</p>
                    <img src="${project.image}" class="d-block mx-auto my-3 project-image img-fluid" alt="${project.name}" data-bs-toggle="modal" data-bs-target="#imageModal${index}">
                </div>
            </div>
        `);

        accordionContainer.append(accordionItem);
    });
}

function generateModals() {
    const modalContainer = $(".modal-container");

    projects.forEach((project, index) => {
        const modal = $("<div>").addClass("modal fade")
            .attr({
                id: `imageModal${index}`,
                tabindex: -1,
                role: "dialog",
                "aria-labelledby": `imageModal${index}Label`,
                "aria-hidden": "true"
            });

        modal.html(`
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
        `);

        modalContainer.append(modal);
    });
}

generateAccordion();
generateModals();

