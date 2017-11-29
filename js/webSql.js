

$(document).ready(function() {





if(window.openDatabase){
    db = openDatabase('mon_carnet', '1.0', 'database', 2000000);

    function displayResults( tx, results ){

        if(results.rows.length == 0) {
            alert("No records found");
            return false;
        }

        var row = "";
        for(var i=0; i<results.rows.length; i++) {
            row += results.rows.item(i).rules + "<br/>";
        }
        //document.body.innerHTML = row
        alert(row);
    }

    function onError(e){
        alert("Error 404");
    }

    function onSuccessExecuteSql( tx, results ){
        alert('Execute SQL completed');
    }

    function onReadyTransaction( ){
        alert( 'Transaction completed' );
    }

    db.transaction(
        function(tx){
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS personne (id INTEGER PRIMARY KEY AUTOINCREMENT, nom TEXT, prenom TEXT, mail TEXT, civ  TEXT, rueVoie TEXT, codePostal INTEGER, ville TEXT, pays TEXT, numTel INTEGER)",
                [],
                onSuccessExecuteSql,
                onError
            )
        },
        onError,
        onReadyTransaction
    );

};
    
    $("#persistWebSql").click(function () {
        alert("Clic");
        nom = $("#nom").val();
        prenom = $("#prenom").val();
        mail = $("#mail").val();
        civilite = $('input[name=civilite]:checked').val();
        rueVoie = $("#rueVoie").val();
        codePostal = $("#codePostal").val();
        ville = $("#ville").val();
        pays= $("#pays").val();
        numTel = $("#numTel").val();

        db.transaction(
            function(tx){
                tx.executeSql(
                    " INSERT INTO personne (nom, prenom, mail, civ,rueVoie, codePostal, ville, pays, numTel) VALUES (?,?,?,?,?,?,?,?,?)",
                    [nom,prenom,mail,civilite, rueVoie,codePostal,ville,pays,numTel],// ,codePostal,ville,pays,numTel],
                    onSuccessExecuteSql,
                    onError
                )
            },
            onError,
            onReadyTransaction
        );
    })

/*
    $("#montrer").click(function(){

        db.transaction(
            function(tx){
                tx.executeSql( "SELECT * FROM personne",
                    [],
                    displayResults,
                    onError )
            },
            onError,
            onReadyTransaction
        )
    });
*/
})