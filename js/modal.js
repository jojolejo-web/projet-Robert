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

                dialog.querySelector('#modalImg1').src = modalData.img1;
                dialog.querySelector('#modalImg2').src = modalData.img2;
                dialog.querySelector('#modalImg3').src = modalData.img3;

                dialog.querySelector('#modalLieu1').textContent = modalData.lieu1;
                dialog.querySelector('#modalLieu2').textContent = modalData.lieu2;
                dialog.querySelector('#modalLieu3').textContent = modalData.lieu3;

                dialog.querySelector("#modalText1").textContent = modalData.text1;
                dialog.querySelector("#modalText2").textContent = modalData.text2;
                dialog.querySelector("#modalText3").textContent = modalData.text3;
               
                dialog.showModal(); 
            }
        });
    });
});