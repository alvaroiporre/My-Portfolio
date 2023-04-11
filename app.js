const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav_menu');
const works = document.getElementById('portfolio');

const projects = [
    {
        id: 0,
        type: 1,
        title: 'Tonic',
        image: 'images/tonic_snapshot.png',
        subtitle1: 'CANOPY',
        subtitle2: 'Back End Dev',
        year: '2015',
        paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {   
        id: 1,
        type: 2,
        title: 'Multi-Post Stories',
        image: 'images/multi_posrt_snapshot.png',
        subtitle1: 'CANOPY',
        subtitle2: 'Back End Dev',
        year: '2015',
        paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {   
        id: 2,
        type: 1,
        title: 'Tonic',
        image: 'images/tonic2_snapshot.png',
        subtitle1: 'CANOPY',
        subtitle2: 'Back End Dev',
        year: '2015',
        paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 3,
        type: 2,
        title: 'Tonic',
        image: 'images/multi_post_stories_snapshot.png',
        subtitle1: 'CANOPY',
        subtitle2: 'Back End Dev',
        year: '2015',
        paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },

]

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

projects.map((work) => {
    works.innerHTML += `
    <div class="section-${work.type} main_section">
                <div class="content_image_card">
                    <img class="image_card" src="${work.image}" alt="snapshot tonic">
                </div>
                <div class="content_card">
                    <h2 class="title_card">${work.title}</h2>
                    <div class="subtitle_card">
                        <h6 class="first_subtitle_card">${work.subtitle1}</h6>
                        <img class="point_icon" src="images/point_icon.png" alt="point">
                        <h6 class="second_subtitle_card">${work.subtitle2}</h6>
                        <img class="point_icon" src="images/point_icon.png" alt="point">
                        <h6 class="second_subtitle_card">${work.year}</h6>
                    </div>
                    <p class="paragraph_card">
                        ${work.paragraph}
                    </p>
                    <div>
                        <ul class="technologies">
                            ${work.technologies.map(technology => {
                                works.innerHTML += '<li>' + technology + '</li>';    
                            })}
                        </ul>
                    </div>
                    <button id="${work.id}" type="button" class="button_card button"><b>See project</b></button>
                </div>
            </div>

    `
});



