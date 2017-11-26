
// fichier javascript pour la bdd offline webStorage par clé valeur

$(document).ready(function() {

    $("#valider").click(function () {

        var dataTab = [];
        var key = $("#mail").val();

        dataTab.push($("#nom").val());
        dataTab.push($("#prenom").val());
        dataTab.push($("input[type='radio']:checked").val());
        dataTab.push($("#rueVoie").val());
        dataTab.push($("#codePostal").val());
        dataTab.push($("#ville").val());
        dataTab.push($("#pays").val());
        dataTab.push($("#numTel").val());

        console.log(key);

        put(key, dataTab);
    })
});

function put(key, data) {

    localStorage.setItem(key, data);
}

function get(key) {

    return localStorage.getItem(key);
}