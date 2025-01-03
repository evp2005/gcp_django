const contentCompartir = document.getElementById('contentCompartir');
const pageUrl = encodeURIComponent(window.location.href);
const menssage = `✨ Descubre el poder de los Replikers con Marcella Gonzales. ✨
💬 Una IA que replica el profesionalismo, conocimiento y la esencia de un humano.
📚 ¿Te imaginas aprender, resolver dudas o colaborar con una IA como esta? ¡Hazlo realidad ahora!

✓ Crea tu propio Repliker y lleva tus ideas, conocimientos y estilo único al mundo digital.
#Repliker #IA #Innovación`;
const customText = encodeURIComponent(menssage);

// 🔗 ${pageUrl}

contentCompartir.addEventListener('click',()=>{
    const li = document.querySelectorAll('#contentCompartir li');
    const linkedln = document.querySelector('#linkedln');
    const facebook = document.querySelector('#facebook');
    // const instagram = document.querySelector('#instagram');

    li.forEach(element => {
        if (!element.classList.contains('show')) {
            element.classList.add('show');
            linkedln.addEventListener('click',()=>{
                // URL de compartir en LinkedIn
                const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?text=${customText}`;
                // Abre la URL en una nueva pestaña
                window.open(linkedInShareUrl, '_blank');
            })
    
            facebook.addEventListener('click', () => {
                const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?=${customText}`;
                window.open(facebookShareUrl, '_blank');
            });
    
        }else{
            element.classList.remove('show');
        }
    });
});