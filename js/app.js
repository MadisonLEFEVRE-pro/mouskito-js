var regexTel = /^[0-9]+$/;
var regexMail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

//Vérification du numéro de téléphone
$('#tel').keyup(function(){
	if(!regexTel.test($('#tel').val()))
		$('#error').html("<p style=\"color:red\"> Vous ne devez saisir que des chiffres</p>");
	else 
		$('#error').html("");
});


function verification() {
	//Vérification du nom
	if ($('#nom').val() == "") {
		alert("Le nom est obligatoire");
		$('#nom').focus();
		$('#nom').css("backgroundColor","#fcc8c2");
		return false;
	}
	else $('#nom').css("backgroundColor","white");

	//Vérification du prénom
	if ($('#prenom').val() == "") {
		alert("Le prénom est obligatoire");
		$('#prenom').focus();
		$('#prenom').css("backgroundColor","#fcc8c2");
		return false;
	}
	else $('#prenom').css("backgroundColor","white");

	//Vérification de l'adresse email
	if (!regexMail.test($('#email').val())) {
		alert("Adresse email non valide");
		$('#email').focus();
		$('#email').css("backgroundColor","#fcc8c2");
		return false;
	}
	else $('#email').css("backgroundColor","white");

}