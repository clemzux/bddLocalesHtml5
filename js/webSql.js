var db;
if(window.openDatabase){
    db = openDatabase('ma_base', '1.0', 'database', 2000000, function(db){
        db.changeVersion('', '1.0', function (t) {
            t.executeSql('CREATE TABLE table1 (id, name)');
        }, error);
    });


}

$("#button").click(function () {
    alert(db.version);
})