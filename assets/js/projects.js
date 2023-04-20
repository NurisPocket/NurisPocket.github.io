$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/yacht.jpg',
            link: 'https://github.com/NurisPocket/YachtGame',
            title: 'Yacht Dice Game',
            technologies: ['Java'],
            description: "자바만을 사용하여 만든 주사위 게임 야추",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://github.com/abhn/Wall-E',
            title: 'Wall-E',
            technologies: ['Semantic UI', 'Jekyll'],
            description: "A modern Jekyll theme with grid frontpage, beautiful typography, mobile responsive, made with Semantic UI.",
            categories: ['featured', 'webdev']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/abhn/Social-Share-Counts',
            title: 'Social Share Count',
            demo: false,
            technologies: ['Python'],
            description: "Ever wondered how many times a URL has been shared on popular social networks?",
            categories: ['native']
        },
        {
            image: 'assets/images/elementary.png',
            link: 'https://github.com/abhn/Elementary',
            title: 'Elementary',
            demo: 'https://elementary-jekyll.github.io/',
            technologies: ['Jekyll', 'CSS3'],
            description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
            categories: ['webdev']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}