
// fichier javascript pour la bdd offline webStorage par clé valeur

function Entry() {
    this.nom = "";
    this.prenom = "";
    this.civilite = "";
    this.rueVoie = "";
    this.codePostal = "";
    this.ville = "";
    this.pays = "";
    this.numTel = "";
}

$(document).ready(function() {

    $("#persistWebStorage").click(function () {

        persistEntry();
    });

    $("#affichageButton").click(function () {

        printEntry();
    });

    $("#delEntry").click(function () {

        clearItem($("#key").val());
    });

    $("#delBDD").click(function () {

        clearStorage();
    });
});

function printEntry() {

    var key = $("#key").val();
    console.log(key)
    var result = get(key);

    var resultEntry = new Entry();

    resultEntry = JSON.parse(result);

    $("#nom").text(($("#nom").text() + resultEntry.nom));
    $("#prenom").text(($("#prenom").text() + resultEntry.prenom));
    $("#civilite").text(($("#civilite").text() + resultEntry.civilite));
    $("#rueVoie").text(($("#rueVoie").text() + resultEntry.rueVoie));
    $("#codePostal").text(($("#codePostal").text() + resultEntry.codePostal));
    $("#ville").text(($("#ville").text() + resultEntry.ville));
    $("#pays").text(($("#pays").text() + resultEntry.pays));
    $("#numTel").text(($("#numTel").text() + resultEntry.numTel));
}

function persistEntry() {

    var key = $("#mail").val();

    var entry = new Entry();

    entry.nom = $("#nom").val();
    entry.prenom = $("#prenom").val();
    entry.civilite = $("#civilite").val();
    entry.rueVoie = $("#rueVoie").val();
    entry.codePostal = $("#codePostal").val();
    entry.ville = $("#ville").val();
    entry.pays = $("#pays").val();
    entry.numTel = $("#numTel").val();

    put(key, JSON.stringify(entry));
}

function put(key, data) {

    localStorage.setItem(key, data);
}

function get(key) {

    return localStorage.getItem(key);
}

function clearItem(key) {

    localStorage.removeItem(key);
}

function clearStorage() {

    localStorage.clear();
}