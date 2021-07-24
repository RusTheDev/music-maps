function onSuccess(position) {
    console.log(position);
    initMap(position.coords.latitude, position.coords.longitude, );
}

function onError(error) {
    alert('code: ' + erroe.code + '\n' + "message: " + error.message);
}
navigator.geolocation.getCurrentPosition(onSuccess, onError);

function initMap(LAT, LON) {

    var mymap = L.map('mapid').setView([43.645842850608005, -79.4632553286091], 16);

    //var mymap = L.map('mapid').setView([LAT, LON], 16);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFya2pzYiIsImEiOiJjazNvbGxlbmEwMmZ3M2hxdGczODQxejJ0In0.werRPyGHB7BLTNdKcgq-gA'
    }).addTo(mymap);
    var circle = L.circle([43.641916556021215, -79.46571773968732], {
        color: '',
        fillColor: '#FEEE51',
        fillOpacity: 0.5,
        radius: 100,
        maxWidth: 800
    }).addTo(mymap);
    circle.bindPopup('<iframe width="500" height="auto" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1099295554&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/music-for-life-playlists" title="Music" target="_blank" style="color: #cccccc; text-decoration: none;">Music</a> · <a href="https://soundcloud.com/music-for-life-playlists/sets/zen" title="Zen" target="_blank" style="color: #22038F; text-decoration: none;">Zen</a></div>', {
        maxWidth: 600,
        maxHight: 600
    });

    var circle = L.circle([43.64540244489624, -79.46564657978782], {
        color: '',
        fillColor: '#FEEE51',
        fillOpacity: 0.5,
        radius: 150
    }).addTo(mymap);
    circle.bindPopup('<iframe width="500" height="auto" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/285335796&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/jayotx" title="jayotx" target="_blank" style="color: #cccccc; text-decoration: none;">jayotx</a> · <a href="https://soundcloud.com/jayotx/sets/latino-music" title="Latino Music" target="_blank" style="color: #22038F; text-decoration: none;">Latino Music</a></div>', {
        maxWidth: 600,
        maxHight: 600
    });

    var circle = L.circle([43.65252958428304, -79.46601869313], {
        color: '',
        fillColor: '#FEEE51',
        fillOpacity: 0.5,
        radius: 125
    }).addTo(mymap);
    circle.bindPopup('<iframe width="500" height="auto" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/508191342&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/pu4azgr1clct" title="WHYWHO" target="_blank" style="color: #cccccc; text-decoration: none;">WHYWHO</a> · <a href="https://soundcloud.com/pu4azgr1clct/sets/hiphop-music" title="hiphop music" target="_blank" style="color: #22038F; text-decoration: none;">hiphop music</a></div>', {
        maxWidth: 600,
        maxHight: 600
    });

    var circle = L.circle([43.64944815837934, -79.46626059136517], {
        color: '',
        fillColor: '#FEEE51',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(mymap);
    circle.bindPopup('<iframe width="500" height="auto" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/168664924&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/headstashmusic" title="Headstash Music" target="_blank" style="color: #cccccc; text-decoration: none;">Headstash Music</a> · <a href="https://soundcloud.com/headstashmusic/sets/folktronica-electropop-indieelectronica" title="Indie Pop &amp; Electro Pop - Playlists" target="_blank" style="color: #22038F; text-decoration: none;">Indie Pop &amp; Electro Pop - Playlists</a></div>', {
        maxWidth: 600,
        maxHight: 600
    });

    var circle = L.circle([43.64211274530588, -79.46071808365504], {
        color: '',
        fillColor: '#FEEE51',
        fillOpacity: 0.5,
        radius: 200
    }).addTo(mymap);
    circle.bindPopup('<iframe width="500" height="auto" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/276677561&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/kyle-manocchio" title="Kyle Manocchio" target="_blank" style="color: #cccccc; text-decoration: none;">Kyle Manocchio</a> · <a href="https://soundcloud.com/kyle-manocchio/sets/rock-music" title="Rock Music" target="_blank" style="color: #22038F; text-decoration: none;">Rock Music</a></div>', {
        maxWidth: 600,
        maxHight: 600
    });

    var circle = L.circle([43.64688185500423, -79.4602182171722], {
        color: '',
        fillColor: '#FEEE51',
        fillOpacity: 0.5,
        radius: 185
    }).addTo(mymap);
    circle.bindPopup('<iframe width="500" height="auto" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/58181471&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/philipniven" title="philipniven" target="_blank" style="color: #cccccc; text-decoration: none;">philipniven</a> · <a href="https://soundcloud.com/philipniven/sets/classic-music" title="Classic Music" target="_blank" style="color: #22038F; text-decoration: none;">Classic Music</a></div>', {
        maxWidth: 600,
        maxHight: 600
    });


}
