$.ajax({
    url: 'https://api.kawalcorona.com/meninggal/',
    type: 'post',
    success: (data) => {
        $('#global-die').html('<center><h1>' + data.value + ' Orang' + '</h1></center>');
    },
});
$.ajax({
    url: 'https://api.kawalcorona.com/positif/',
    type: 'post',
    success: (data) => {
        $('#global-positive').html('<center><h1>' + data.value + ' Orang' + '</h1></center>');
    },
});
$.ajax({
    url: 'https://api.kawalcorona.com/sembuh/',
    type: 'post',
    success: (data) => {
        $('#global-health').html('<center><h1>' + data.value + ' Orang' + '</h1></center>');
    },
});
$.ajax({
    url: 'https://api.kawalcorona.com/',
    type: 'post',
    success: (data) => {
        for (let i = 0; i < data.length; i++) {
            $('#global_table').append(`<tbody><tr><td>${data[i].attributes.Country_Region}</td><td><span class='badge badge-warning' data-toggle='tooltip' data-placement='top' title='Positif'><i class=' fas fa-plus-square'></i></span> ${data[i].attributes.Confirmed} </td><td><span class='badge badge-success' data-toggle='tooltip' data-placement='top' title='Sembuh'><i class='fas fa-check-square'></i></span> ${data[i].attributes.Recovered}</td><td><span class='badge badge-info' data-toggle='tooltip' data-placement='top' title='Meninggal'><i class='fas fa-ambulance'></i></span> ${data[i].attributes.Deaths}</td></tr></tbody>`);
        }
    },
});
$.ajax({
    url: 'https://api.kawalcorona.com/indonesia/',
    type: 'post',
    success: (data) => {
        $('#indo-deaths').html('<center><h1>' + data[0].meninggal + ' Orang' + '</h1></center>');
        $('#indo-positive').html('<center><h1>' + data[0].positif + ' Orang' + '</h1></center>');
        $('#indo-health').html('<center><h1>' + data[0].sembuh + ' Orang' + '</h1></center>');
    },
});
$.ajax({
    url: 'https://api.kawalcorona.com/indonesia/provinsi/',
    type: 'post',
    success: (data) => {
        for (let i = 0; i < data.length; i++) {
            $('#indonesia_table').append("<tbody><tr><td>" + data[i].attributes.Provinsi + "</td><td><span class='badge badge-warning' data-toggle='tooltip' data-placement='top' title='Positif'><i class=' fas fa-plus-square'></i></span> " + data[i].attributes.Kasus_Posi + " </td><td><span class='badge badge-success' data-toggle='tooltip' data-placement='top' title='Sembuh'><i class='fas fa-check-square'></i></span> " + data[i].attributes.Kasus_Semb + "</td><td><span class='badge badge-info' data-toggle='tooltip' data-placement='top' title='Meninggal'><i class='fas fa-ambulance'></i></span> " + data[i].attributes.Kasus_Meni + "</td></tr></tbody>");
        }
    },
});
$(function () {
    AOS.init({
        duration: 1000,
        easing: "ease-in-out-back"
    });
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').then(function (registration) {
            // Registration was successful
            // console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            // console.log('ServiceWorker registration failed: ', err);
        });
    });
}