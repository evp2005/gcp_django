window.addEventListener('load',()=>{
    // Agente ia
    const contentChatAgenteIA= document.getElementsByClassName('contentChatAgenteIA')[0];
    const buttonAgenteIA= document.getElementsByClassName('buttonAgenteIA')[0];

    buttonAgenteIA.addEventListener('click',()=>{
        if (contentChatAgenteIA.style.display === 'none'|| contentChatAgenteIA.style.display === '') {
            contentChatAgenteIA.style.display = 'block';
        }else {
            contentChatAgenteIA.style.display = 'none';
        }
    });

    //Barra de navegacion
    const ocultar = document.getElementById('ocultar');
    const barraNavegacion = document.getElementsByClassName('barraNavegacion')[0];
    const main = document.getElementsByTagName('main')[0];

    ocultar.addEventListener('click',()=>{
        if (barraNavegacion.style.display !== 'none') {
            ocultar.style.marginLeft = '2vh';
            barraNavegacion.style.display = 'none';
            main.style.margin = 'auto';
        } else{
            ocultar.style.marginLeft = '22vh';
            barraNavegacion.style.display = 'block';
            main.style.marginLeft = '25vh';
        }
        
    });

    // Modo oscuro
    const toggleButton = document.getElementById('toggle-dark-mode');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const isDarkTheme = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkTheme ? 'enabled' : 'disabled');
    });

});