// Imported styles
import "./css/normalize.css";
import "./css/styles.css";

// Imported scripts
import { Project } from "./scripts/projectClass";
import * as dom from "./scripts/domUtility";

// Imported media
import openInNewIcon from "./media/images/open-in-new.svg";
import projectImgPlaceholder from "./media/images/screenshot_placeholder.JPG";

// Add projects to the project array
const projectArray = [
    new Project("Project Name 1", "Short description of the project. Just a couple sentences will do.", projectImgPlaceholder),
    new Project("Project Name 2", "Short description of the project. Just a couple sentences will do.", projectImgPlaceholder),
    new Project("Project Name 3", "Short description of the project. Just a couple sentences will do.", projectImgPlaceholder),
    new Project("Project Name 4", "Short description of the project. Just a couple sentences will do.", projectImgPlaceholder),
    new Project("Project Name 5", "Short description of the project. Just a couple sentences will do.", projectImgPlaceholder),
    new Project("Project Name 6", "Short description of the project. Just a couple sentences will do.", projectImgPlaceholder),
];

function createProjectElements(arr) {
    arr.forEach(project => {
        // Create the project-container div element
        const projectContainer = dom.newElement("div", null, null, ["project-container"]);

        // Append the screenshot img
        projectContainer.appendChild(dom.newImg(project.img, `Screenshot of ${project.name}`));

        // Create the project-info div element
        const projectInfo = dom.newElement("div", null, null, ["project-info"]);

        // Create the project-header
        const projectHeader = dom.newElement("div", null, null, ["project-header"]);
        projectHeader.appendChild(dom.newElement("h2", project.name));

        // Create the navigation div
        const projectNav = dom.newElement("div", null, null, ["project-nav"]);

        // Create the hyperlink img to the github source code of the project
        const sourceLink = dom.newHyperlink(project.sourceCode);
        sourceLink.appendChild(dom.newImg(
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", "Github logo", null, ["link-img"]
        ));

        // Create the hyperlink img to the live project
        const liveLink = dom.newHyperlink(project.live);
        liveLink.appendChild(dom.newImg(openInNewIcon, "Open project in new tab icon", null, ["link-img"]));

        // Append the links to the project-nav element
        projectNav.appendChild(sourceLink);
        projectNav.appendChild(liveLink);

        // Append the project-nav to the project-header
        projectHeader.appendChild(projectNav);

        // Append the project-header to project-info
        projectInfo.appendChild(projectHeader);

        // Append the project description to project-info
        projectInfo.appendChild(dom.newElement("p", project.description));

        // Append project-info to project-container
        projectContainer.appendChild(projectInfo);

        // Append project-container to the projects element
        document.querySelector(".projects").appendChild(projectContainer);
    });
}


createProjectElements(projectArray);

