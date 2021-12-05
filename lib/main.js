define(function (require) {
    const $ = require('jquery');
    const _ = require('lodash');
    const moment = require('moment');

    const api = require('./api');


    api.getCategories().then(({categories}) => {

        categories.items.forEach(item => {

            // Build out a card for each category:

            const cardImg = document.createElement('img');
            cardImg.classList.add("card-img-top");
            cardImg.src = item.icons[0].url;
            cardImg.style.width = 'auto';

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add("card-title");
            cardTitle.style.color = 'black';
            cardTitle.innerHTML = item.name;

            const cardBody = document.createElement('div');
            cardBody.classList.add("card-body");
            cardBody.appendChild(cardTitle);

            const cardContainer = document.createElement('div');
            cardContainer.appendChild(cardImg);
            cardContainer.appendChild(cardBody);


            const card = document.createElement('div');
            card.classList.add("card");
            card.classList.add("btn");
            card.classList.add("btn-primary");
            card.type = 'button';
            card.style.display = 'flex';
            card.style.justifyContent = 'center';
            card.appendChild(cardContainer);
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#exampleModal');


            // After building cards activate onclick:

            card.onclick = () => {

                document.querySelector('#modalBodySpan').innerHTML = '';

                api.getCategoriesPlaylists(item.id).then(({playlists}) => {


                    document.querySelector('.modal-title').innerHTML = item.name;

                    playlists.items.forEach(item => {


                        const modalBodyPlaylistLink = document.createElement('a');
                        modalBodyPlaylistLink.href = item.external_urls.spotify;
                        modalBodyPlaylistLink.setAttribute('target', '_blank');
                        modalBodyPlaylistLink.innerHTML = item.name;


                        const modalBodyPlaylist = document.createElement('div');
                        modalBodyPlaylist.classList.add('modal-body');
                        modalBodyPlaylist.appendChild(modalBodyPlaylistLink);


                        document.querySelector('#modalBodySpan').append(modalBodyPlaylist);
                    })

                });
            }

            // Scaffold the columns into the app row in index.html:

            const col = document.createElement('div');
            col.classList.add("col-12");
            col.classList.add("col-md-6");
            col.classList.add("col-lg-4");
            col.appendChild(card);
            document.querySelector('#app').append(col);

        })
    });


});
