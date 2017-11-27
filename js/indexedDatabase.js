function Entry() {
    this.nom = "";
    this.prenom = "";
    this.mail = "";
    this.civilite = "";
    this.rueVoie = "";
    this.codePostal = "";
    this.ville = "";
    this.pays = "";
    this.numTel = "";
}

$(document).ready(function() {

    $("#persistIndexDB").click(function () {

        // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
        // var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
// Open (or create) the database
        var open = indexedDB.open("CarnetAdresses", 1);

// Create the schema
        open.onupgradeneeded = function() {
            var db = open.result;
            var store = db.createObjectStore("Entry", {keyPath: "mail"});
            var index = store.createIndex("MailIndex", ["mail.last", "mail.first"]);
        };

        open.onsuccess = function() {
            // Start a new transaction
            var db = open.result;
            var tx = db.transaction("Entry", "readwrite");
            var store = tx.objectStore("Entry");
            var index = store.index("MailIndex");

            // Add some data
            store.put({nom:$("#nom").val(),
                prenom:$("#prenom").val(),
                mail:$("#mail").val(),
                civilite:$("#civilite").val(),
                rueVoie:$("#rueVoie").val(),
                codePostal:$("#codePostal").val(),
                ville:$("#ville").val(),
                pays:$("#pays").val(),
                numTel:$("#numTel").val()
            });

            // Query the data
            // var getJohn = store.get(12345);
            // var getBob = index.get(["Smith", "Bob"]);
            //
            // getJohn.onsuccess = function() {
            //     console.log(getJohn.result.name.first);  // => "John"
            // };
            //
            // getBob.onsuccess = function() {
            //     console.log(getBob.result.name.first);   // => "Bob"
            // };
            //
            // // Close the db when the transaction is done
            // tx.oncomplete = function() {
            //     db.close();
            // };
        }
    });
});
