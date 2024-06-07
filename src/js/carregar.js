const seaVexImg = "./src/images/seavax.jpg";
const interceptorImg = "./src/images/interceptor.jpg";

const items = JSON.parse(localStorage.getItem('viagens')) || null

if (items != null) {
    items.forEach( item => card(item));
}


function card(item) {
    var content = `
    <div class="card" data-id="${item.id}">
        <p class="card-title">${item.titulo}</p>
        <p class="card-text">${new Date(item.data).toLocaleDateString('br')}</p>
        <img class="card-img" src="${item.modelo === "SeaVex" ? seaVexImg : interceptorImg}" alt="foto da embarcação">
        <div class="card-description">
            <p>${item.descricao}</p>
        </div>
        <p class="card-text">${(new Date(item.data) - new Date()) > 0 ? "Agendada" : "Já terminou"}</p>
        <p class="card-subtext">embarcação ${item.modelo}</p>
        <button class="btn-delete" onclick="apaga(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
        </button>
    </div>
    `

    const card = document.createElement("div");
    card.innerHTML = content

    document.getElementsByClassName("cards-section")[0].appendChild(card);
}