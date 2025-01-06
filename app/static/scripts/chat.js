const $ = el => document.querySelector(el);
const $form = $('form');
const $inputText = $('form input[name="message"]');
// const $inputFile = $('form input[name="file"]');
const $submit = $('form button');
const $sectionChat = $('.chat');
const $template = $('#styleChat');

// Evento al enviar el formulario
$form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const text = $inputText.value.trim();
    // const file = $inputFile.value.trim();

    // if (!text && !file) return;
    if (!text) return;

    addMessage(text, 'user');
    $submit.setAttribute('disabled', true);
    messageUser = text;
    $inputText.value = '';

    // Mostrar el mensaje del usuario en el chat
    // if (!text && file) {
    //     addMessage(file, 'user');
    //     $submit.setAttribute('disabled', true);
    //     messageUser = text;
    // } else {
    //     addMessage(text, 'user');
    //     $inputText.value = '';
    //     $submit.setAttribute('disabled', true);
    //     messageUser = file;
    // }

    // Mostrar un mensaje vacío donde se escribirá el texto progresivamente
    const typingMessage = addMessage('', 'ia');

    try {
        // Hacer una solicitud a la API
        const response = await fetch('/api/chat/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken'),
            },
            body: JSON.stringify({ message: messageUser })
        });

        if (!response.ok) {
            throw new Error('Error en la API');
        }

        // Obtener la respuesta en formato JSON
        const data = await response.json();

        // Efecto de tipeo: Mostrar palabra por palabra
        typeText(typingMessage.querySelector('p'), data.response);

    } catch (error) {
        console.error('Error:', error);
        typingMessage.querySelector('p').textContent = 'Hubo un problema al procesar tu solicitud.';
    } finally {
        $submit.removeAttribute('disabled');
    }
});

// Función de efecto de tipeo
function typeText(element, text) {
    const words = text.split(' '); // Dividir el texto en palabras
    let index = 0;

    const interval = setInterval(() => {
        if (index < words.length) {
            element.textContent += (index > 0 ? ' ' : '') + words[index];
            index++;
            $sectionChat.scrollTop = $sectionChat.scrollHeight; // Desplazar hacia abajo
        } else {
            clearInterval(interval);
        }
    }, 100); // Velocidad del tipeo en milisegundos
}

// Función para agregar mensajes al chat
function addMessage(text, sender) {
    const cloneTemplate = $template.content.cloneNode(true);
    const $newMessage = cloneTemplate.querySelector('.message');
    const $text = $newMessage.querySelector('p');

    $text.textContent = text; // Insertar texto inicial
    $newMessage.classList.add(sender);

    $sectionChat.appendChild($newMessage);
    $sectionChat.scrollTop = $sectionChat.scrollHeight;

    return $newMessage; // Retornar el elemento
}

// Función para obtener el token CSRF
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}