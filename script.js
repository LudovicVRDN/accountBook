/*Créer un programme type cahier de compte incluant les dépenses fixes , rentrées d'argent, et dépenses. Affichant le total des différentes catégories. Chaque opération aura des informations propres (raison de la dépense (ex: loyer..)) son montant et la date du prelevement.Inclure un bouton supprimer / modifier dans chaque liste.

1)Remplir les informatios via un formulaire.
2)Conservez les données du formulaire dans le localStorage.
3)Faire une fonction au click pour l'ajout dans le DOM avec les données correspondantes dans le localStorage des différentes cases de dépenses.
4)Créer une fonction au click sur les boutons des cases pour modifier le contenue de la case ou la supprimer.
5)Calculer les totaux de chaque 'catégorie' et les actualiser en cas de suppression.*/

//Create add eventListener buttonAjouter and show form.

const bttnAjouter = document.querySelectorAll(".ajouter");


bttnAjouter.forEach((bouton, index) => {
    bouton.addEventListener('click', () => {
        popups[index].classList.toggle('open');
    });
});

//Create listenner bouttonAnnuler



//Get form values

const popups = document.querySelectorAll(".popup");

popups.forEach(popup => {
    popup.addEventListener('submit', e => {
        e.preventDefault();
        const formValues = new FormData(popup);
        const nouvelleEntree = {
            titre: formValues.get('motif'),
            date: formValues.get('date-de-debit'),
            montant: formValues.get('montant'),
        };
        const contenuListe = document.createElement('li');
        contenuListe.innerHTML = `<p>${formValues.get('motif')}</p>
        <p class="date">${formValues.get('date-de-debit')}</p>  
        <p>${formValues.get('montant')} Euros</p> 
        <div class="changement">
        <button class="modifier"><i class="fa-solid fa-pen"></i></button>
        <button class="modifier"><i class="fa-solid fa-ban"></i></button> 
        </div>`
        let listeVide = popup.nextElementSibling;
        console.log(listeVide);
        const bttnValider = document.querySelectorAll('.valider')
        bttnAjouter.forEach((bouton,index) =>{
        bouton.addEventListener('click',() =>{
            listeVide.appendChild(contenuListe)
        })
        })
        console.log(listeVide);
    
        console.log(nouvelleEntree);
    });
});

//Create addEventListener on BttnValider and add new <li> 

