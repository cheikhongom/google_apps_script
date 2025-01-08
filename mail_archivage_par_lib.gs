//--------------Script sans dates
function archiveReadEmailsWithMultipleLabels() {
    // Liste des libellés à cibler
    var labels = ["Job", "Administration", "Achats"];
    
    // Parcourt chaque libellé et archive les emails correspondants
    for (var j = 0; j < labels.length; j++) {
        var labelName = labels[j];
        var threads = GmailApp.search('is:read label:' + labelName + ' label:inbox');
        for (var i = 0; i < threads.length; i++) {
            threads[i].moveToArchive();
        }
    }
}