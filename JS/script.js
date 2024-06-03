document.getElementById('navbar-toggle').addEventListener('click', function() {
    var menu = document.getElementById('navbar-menu');
    var toggle = document.getElementById('navbar-toggle');
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        toggle.innerHTML = '&#10007;'; 
    } else {
        toggle.innerHTML = '&#9776;';
    }
});

window.addEventListener('click', function(event) {
    var menu = document.getElementById('navbar-menu');
    var toggle = document.getElementById('navbar-toggle');
    if (event.target !== toggle && !toggle.contains(event.target) && event.target !== menu && !menu.contains(event.target)) {
        menu.classList.remove('active');
        toggle.innerHTML = '&#9776;';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink');

    const projectData = {
        project1: {
            image: './asset/image/project1.png',
            title: 'Google Homepage',
            description: 'Google Homepage Clone.',
            link: '#'
        },
        project2: {
            image: './asset/image/project2.png',
            title: 'Portfolio Website',
            description: 'A Portfolio Website theme.',
            link: '#'
        },
        project3: {
            image: './asset/image/project3.png',
            title: 'Government website',
            description: 'A Government website theme.',
            link: '#'
        }
    };

    const project = projectData[projectId];

    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLink.href = project.link;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Come Back 😒";
})
window.addEventListener("focus", () =>{
    document.title = docTitle;
})

// Function to open the FAQ popup
function openPopup() {
    var popup = document.getElementById("faq-popup");
    popup.style.display = "block";
}

// Function to close the FAQ popup
function closePopup() {
    var popup = document.getElementById("faq-popup");
    popup.style.display = "none";
}

// Event listener to open the FAQ popup when clicking on the #faq link
document.getElementById("faq-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    openPopup();
});
