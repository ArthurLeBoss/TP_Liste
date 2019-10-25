$(document).ready(function() {
        
    $("#ajouter").click(function() {
        var liste_element = $("#newtodo").val();
        $.ajax({

            url : 'http://localhost:8080/ajouter',
            type : 'POST',
            data : {value : liste_element},
            dataType : 'json',
            success : function(resultat, statut){
            //    var element = $("#newtodo").val(resultat.test);
            //    $("#element_liste").append(liste_element);
            
            },
     
            error : function(resultat, statut, erreur){
              alert("erreur");
            },
     
            complete : function(resultat, statut){
                
            }
     
         });
    });

    
    
 });