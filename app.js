const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav_menu');
const works = document.getElementById('portfolio');
const modal = document.querySelector('.section_modal');
const modalClose = document.querySelector('.modal_close');



const projects = [];

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
                            <li>${work.technologies[0]}</li>
                            <li>${work.technologies[1]}</li>
                            <li>${work.technologies[2]}</li>
                        </ul>
                    </div>
                    <button onClick="popupModal(${work.id})" type="button" class="button_card button"><b>See project</b></button>
                </div>
            </div>

    `;
});

function popupModal(x){
    console.log(projects[x]);
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
                            <ul class="technologies">
                                <li>${projects[x].technologies[0]}</li>
                                <li>${projects[x].technologies[1]}</li>
                                <li>${projects[x].technologies[2]}</li>
                            </ul>
                            <div class="modal_buttons">
                                <button type="button" class="button_modal button"><b>See Live</b> <img src="images/live_icon.png" alt="live icon"></button>
                                <button type="button" class="button_modal button"><b>See source</b><img src="images/git_icon.png" alt="git icon"> </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    `;
}

function closeModal(){
    modal.classList.toggle('show');
    const modalContent = document.querySelector('.modal');
    modalContent.remove();
}
