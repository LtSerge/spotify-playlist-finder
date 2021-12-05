    define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQBScZ0wrN9h34jiwSpbq6tkDHcSN7z55zrjLC8_6RwhPHKU8zqrIsTjmz6wPh5otD9eJegGnWEkXYR55GbHR6OvZxMeYAOLpS73KGhK41EQ41yWAxtbiL-VsR2xy07EZYrcY2JqyPQRDcLlQgyXAOosPL4tIJ8';

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
