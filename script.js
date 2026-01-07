/*Créer un programme type cahier de compte incluant les dépenses fixes , rentrées d'argent, et dépenses. Affichant le total des différentes catégories. Chaque opération aura des informations propres (raison de la dépense (ex: loyer..)) son montant et la date du prelevement.Inclure un bouton supprimer / modifier dans chaque liste.

1)Remplir les informatios via un formulaire.
2)Conservez les données du formulaire dans le localStorage.
3)Faire une fonction au click pour l'ajout dans le DOM avec les données correspondantes dans le localStorage des différentes cases de dépenses.
4)Créer une fonction au click sur les boutons des cases pour modifier le contenue de la case ou la supprimer.
5)Calculer les totaux de chaque 'catégorie' et les actualiser en cas de suppression.*/

//Create add eventListener buttonAjouter and show form.

const bttnAjouter = document.querySelectorAll(".ajouter");

bttnAjouter.forEach((bouton,index) => {
    bouton.addEventListener('click', () => {
        popups[index].classList.toggle('open');
    });
});

//Get form values

const popups = document.querySelectorAll(".popup");

popups.forEach(popup => {
    popup.addEventListener('submit', e => {
        e.preventDefault();

        const formValues = new FormData(popup);

        const nouvelleEntree = {
            titre: formValues.get('motif'),
            date: formValues.get('date'),
            montant: formValues.get('montant'),
        };

        console.log(nouvelleEntree);
    });
});

//Create addEventListener on BttnValider and add new <li> 

const bttnValider = document.querySelectorAll('.valider')
const contenuListe = document.createElement('li');
contenuListe.innerHTML = `<p>Loyer</p>
 <p class="date">05/06/2024</p>  
 <p>360 Euros</p> 
 <div class="changement">
 <button class="modifier"><i class="fa-solid fa-pen"></i></button>
 <button class="modifier"><i class="fa-solid fa-ban"></i></button> 
 </div>`