fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('tagline').textContent = data.tagline;
        document.getElementById('bio').textContent = data.bio;

        // Skills
        const skillsContainer = document.getElementById('skills');
        data.skills.forEach(skill => {
            const span = document.createElement('span');
            span.textContent = skill;
            skillsContainer.appendChild(span);
        });

        // Projects
        const projectList = document.getElementById('project-list');
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.classList.add('project-card');
            div.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectList.appendChild(div);
        });

        // Contact
        document.getElementById('email').textContent = data.email;
        document.getElementById('email').href = `mailto:${data.email}`;
        document.getElementById('linkedin').href = data.linkedin;

        // Footer year
        document.getElementById('year').textContent = new Date().getFullYear();
    });

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
