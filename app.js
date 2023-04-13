const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav_menu');
const works = document.getElementById('portfolio');
const modal = document.querySelector('.section_modal');
const form = document.getElementById('contact_form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const msgError = document.getElementById('msgErrorEmail');

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
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
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
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Ruby'],
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
    technologies: ['HTML', 'CSS', 'JavaScript'],
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
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

function setFormData() {
  const userData = localStorage.getItem('userData');
  if (userData !== null) {
    const userDataObj = JSON.parse(userData);
    name.value = userDataObj.name;
    email.value = userDataObj.email;
    message.value = userDataObj.message;
  }
}

setFormData();

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

projects.forEach((work) => {
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
                        <ul class="technologies list_technologies_${work.id}">
                        </ul>
                    </div>
                    <button onClick="popupModal(${work.id})" type="button" class="button_card button"><b>See project</b></button>
                </div>
            </div>

   `;
  work.technologies.forEach((technology) => {
    document.querySelector(`.list_technologies_${work.id}`).innerHTML += `<li>${technology}</li>`;
  });
});

function popupModal(x) {
  modal.classList.toggle('show');

  modal.innerHTML += `
                <div class="modal">
                    <div class="modal_content">
                        <div class="header_modal">
                            <h2 class="title_modal">${projects[x].title}</h2>
                            <img class="modal_close" onClick="closeModal()" src="images/close_icon.png" alt="close">
                        </div>
                        <div class="subtitle_card">
                            <h6 class="first_subtitle_card">${projects[x].subtitle1}</h6>
                            <img class="point_icon" src="images/point_icon.png" alt="point">
                            <h6 class="second_subtitle_card">${projects[x].subtitle2}</h6>
                            <img class="point_icon" src="images/point_icon.png" alt="point">
                            <h6 class="second_subtitle_card">${projects[x].year}</h6>
                        </div>
                        <div class="content_image_modal">
                            <img class="image_modal" src="${projects[x].image}" alt="snapshot tonic">
                        </div>
                        <div class="modal_footer">
                        <p class="paragraph_card paragraph_modal">
                            ${projects[x].paragraph}
                        </p>
                        <div class="right_modal">
                            <ul class="technologies technologies_modal">
                            </ul>
                            <hr class="modal_line">
                            <div class="modal_buttons">
                                <button type="button" class="button_modal button">See Live<img src="images/live_icon.png" alt="live icon"></button>
                                <button type="button" class="button_modal button">See source<img src="images/git_icon.png" alt="git icon"> </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    `;
  projects[x].technologies.forEach((technology) => {
    document.querySelector('.technologies_modal').innerHTML += `<li>${technology}</li>`;
  });
}

function closeModal() {
  modal.classList.toggle('show');
  const modalContent = document.querySelector('.modal');
  modalContent.remove();
}

popupModal(0);
closeModal();

const LOWER_CASE_EMAIL = /[A-Z]/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (email.value.match(LOWER_CASE_EMAIL) != null) {
    msgError.innerText = 'Please enter only lowercase characteres in the email field.';
  } else {
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('userData', JSON.stringify(data));

    form.submit();
  }
});
