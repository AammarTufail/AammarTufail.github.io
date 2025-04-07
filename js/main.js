// This file contains JavaScript code for interactivity and dynamic features on the portfolio website.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Load projects data from JSON file and display on projects.html
    fetch('assets/data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <img src="${project.thumbnail}" alt="${project.title} thumbnail">
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});