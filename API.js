var ASTRO_ITEMS = {
    "astroItems": [
        {
            "URL": "http://www.nasa.gov/sites/default/files/images/430453main_crabmosaic_hst_big_full.jpg",
            "title": "Crab Nebula",
            "description": ""
        },
        {
            "URL":"https://brianasaussy.com/wp-content/uploads/2016/08/jupiter-image.jpg",
            "title":"Jupiter",
            "description":"" 
        },
        {
            "URL": "http://mstecker.com/images/astronomy/AstroimageIndex/solarsystem/s-anri810nph400hb3a_ni-1b.jpg",
            "title": "Hale-Bopp Comet",
            "description": ""
        },
        {
            "URL": "http://spaceweather.com/eclipses/28aug07/James-W.-Young1.jpg",
            "title": "Lunar Eclipse",
            "description": ""
        },
        {
            "URL": "http://www.sun.org/uploads/images/Moon_substituded_by_neptune.jpg",
            "title": "Neptune",
            "description": ""
        },
        {
            "URL": "http://www.nasa.gov/sites/default/files/thumbnails/image/pia20016.jpg",
            "title": "Titan",
            "description": ""
        },
        {
            "URL": "https://fairfaxparks.files.wordpress.com/2013/01/milky-way-derek-rowley-derekscope.jpg",
            "title": "Milky Way",
            "description": ""
        },
        {
            "URL":"http://www.sun.org/uploads/images/Virgocluster.jpg" ,
            "title": "Virgo Cluster",
            "description": ""
        },
        {
            "URL": "https://cdn.geekwire.com/wp-content/uploads/2015/02/Black_Hole_Milkyway.jpg",
            "title": "Black Hole",
            "description": ""
        },
        {
            "URL":"https://i.kinja-img.com/gawker-media/image/upload/t_original/lrbz9ecw6u86z643c0oe.jpg",
            "title": "Star Collision",
            "description": ""
        }
    ]
};

function getRecentStatusUpdates(callbackFn) {
    setTimeout(function(){ callbackFn(ASRTO_ITEMS)}, 100);
}

function displayStatusUpdates(data) {
    for (index in data.astroItems) {
       $('body').append(
        '<p>' + data.astroItems[index].text + '</p>');
    }
}

function getAndDisplayStatusUpdates() {
    getRecentStatusUpdates(displayStatusUpdates);
}

$(function() {
    getAndDisplayStatusUpdates();
})