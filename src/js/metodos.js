function apaga(itemId) {
    var confirmation = confirm("Tem certeza?");

    if (!confirmation) {
        return;
    }

    var card = document.querySelector(`[data-id="${itemId}"]`);
    if (card) {
        card.classList.add("card-removing");

        // Espera a transição terminar antes de remover o elemento
        card.addEventListener('transitionend', function() {
            card.remove();
        });
    }

    const items = JSON.parse(localStorage.getItem('viagens')) || null;

    if (items === null) {
        return;
    }

    var updtItems = items.filter((item) => item.id !== itemId);
    localStorage.setItem("viagens", JSON.stringify(updtItems));
}


function filtrarCards() {
    const filtroTitulo = document.getElementById('filtro-busca').value.toLowerCase();
    const filtroModelo = document.getElementById('filtro-modelo').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const titulo = card.querySelector('.card-title').textContent.toLowerCase();
        const modelo = card.querySelector('.card-subtext').textContent.toLowerCase();

        // Verifica se o card corresponde aos filtros
        const correspondeTexto = titulo.includes(filtroTitulo);
        const correspondeModelo = filtroModelo === '' || modelo === "embarcação " + filtroModelo;
        console.log(correspondeModelo);

        // Aplica a classe card-removing se o card não corresponder a ambos os filtros
        if (correspondeTexto && correspondeModelo) {
            card.classList.remove('card-removing'); // Remove a classe 'card-removing' para mostrar o card
        } else {
            card.classList.add('card-removing'); // Adiciona a classe 'card-removing' para ocultar o card
        }
    });
}

// Adiciona um evento de input ao campo de filtro de texto para chamar a função de filtragem
document.getElementById('filtro-busca').addEventListener('input', filtrarCards);

// Adiciona um evento de change ao campo de filtro de modelo para chamar a função de filtragem
document.getElementById('filtro-modelo').addEventListener('change', filtrarCards);
