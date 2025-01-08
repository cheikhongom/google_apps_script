// Début Script 
function archiveOldReadEmailsWithSpecificLabels() {
    // Liste des libellés ciblés
    var labels = ["Job", "Administration", "Achats"];
    
    // Obtenir la date limite (emails reçus il y a plus d'une semaine)
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // On soustrait 7 jours

    // Parcourt chaque libellé de la liste
    for (var j = 0; j < labels.length; j++) {
        var labelName = labels[j];
        
        // Recherche des emails lus dans la boîte de réception avec le libellé spécifié, reçus avant la date limite
        var threads = GmailApp.search(
            'is:read label:' + labelName + ' label:inbox before:' + formatDateForGmail(oneWeekAgo)
        );
        
        // Parcourt chaque conversation trouvée et archive
        for (var i = 0; i < threads.length; i++) {
            threads[i].moveToArchive(); // Archive le mail tout en conservant les libellés
        }
    }
}

// Fonction pour formater la date au format compatible avec Gmail (AAAA/MM/JJ)
function formatDateForGmail(date) {
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2); // Mois avec un zéro devant si nécessaire
    var day = ('0' + date.getDate()).slice(-2); // Jour avec un zéro devant si nécessaire
    return year + '/' + month + '/' + day;
}

///Fin du script ./…

