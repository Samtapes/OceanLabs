// CONSTANTES
const dataAtual = new Date();
const limiteAnos = 40;


// Tratando envio de dados formulário
document
    .querySelector("form")
    .addEventListener("submit", (e) => {
        e.preventDefault();

        const form = document.querySelector("form");

        // Verificando formulário nulo
        if (form.titulo.value === "" || form.data.value === "" || form.descricao.value === ""){
            // Na nossa regra de negócio, a descrição é obrigatória, pois é assim aonde se encontra mais detalhes de horário
            // caso essa informação possa ir à publíco, localização, etc.
            // O modelo não está sendo verificado, pois optamos que o valor padrão será SeaVex e não nulo.
            alert("Não foi possível cadastrar nova viagem, pois há campos nulos no formulário!");
            return;
        }

        const viagem = {
            id: new Date().getTime(),
            titulo: form.titulo.value,
            data: form.data.value,
            descricao: form.descricao.value,
            modelo: form.modelo.value
        };

        salvar(viagem);
    });


function salvar(item) {
    var items = JSON.parse(localStorage.getItem("viagens")) || [];
    items.push(item);

    localStorage.setItem('viagens', JSON.stringify(items));
    window.location = "viagens.html";
}


function limitaInputData(){
    document.querySelector("#data").min = dataAtual.toLocaleDateString('fr-ca');
    document.querySelector("#data").value = dataAtual.toLocaleDateString('fr-ca');
    document.querySelector("#data").max = new Date(dataAtual.setFullYear(dataAtual.getFullYear() + limiteAnos)).toLocaleDateString('fr-ca');
}


limitaInputData();