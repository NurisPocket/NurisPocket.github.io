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
            categories: ['webdev']
        },
        
        {
            image: 'assets/images/lookwearfashion.jpg',
            link: 'https://github.com/NurisPocket/lookwearfashion',
            title: 'LookWearFashion',
            technologies: ['Java'],['Django'],['React'],['Html5'],['Css3'],
            description: "자기 취향에 따라 계절에 맞게 옷을 자동적으로 코디 및 추천해주는 서비스",
            categories: ['webdev']
        } 
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