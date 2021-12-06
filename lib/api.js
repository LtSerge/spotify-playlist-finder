    define(function(require) {
    const $ = require('jquery');


    let AUTH_TOKEN = prompt("Please enter your Spotify OAuth Token (find here): \n" + "https://developer.spotify.com/console/get-browse-categories/", "");

    const BASE_URL = 'https://api.spotify.com/v1';

    return {
        getCategories: function() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + '/browse/categories',
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + AUTH_TOKEN
                    },
                    success: (data, status) => {
                        console.log('getCategories: ', data);
                        resolve(data);
                    },
                    error: err => {
                        if(err.status === 401) {
                            alert('Spotify Auth Token is Invalid')
                        } else {
                            reject(err);
                        }
                    }
                })
            })

        },
        getCategoriesPlaylists: function(category_id) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + '/browse/categories/' + category_id + '/playlists',
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + AUTH_TOKEN
                    },
                    success: (data, status) => {
                        console.log('getCategoriesPlaylists: ', data);
                        resolve(data);
                    },
                    error: err => {
                        if(err.status === 401) {
                            alert('Spotify Auth Token is Invalid')
                        } else {
                            reject(err);
                        }
                    }
                })
            })

        }
    }

})
