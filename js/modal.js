document.addEventListener('DOMContentLoaded', () => {
    // Au lieu d'un seul bouton, sélectionne tous les boutons
    const buttons = document.querySelectorAll('[command="show-modal"]');
    const dialog = document.getElementById('dialog');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Récupère la région depuis le data-attribute
            const region = button.closest('.card').getAttribute('data-region');
            
            // Trouve les données correspondantes
            const modalData = modalAct.find(m => m.id === region);
            
            if (modalData) {
                // Remplir la modal avec les données
                dialog.querySelector('#modalTitle').textContent = modalData.title;
                dialog.querySelector('#modalTexte').textContent = modalData.texte;
                // etc...
                
                dialog.showModal(); // Ouvre la modal
            }
        });
    });
});