async function TokenVerify() {
    // let randomActions = ['ABEV3', 'AMER3', 'AZUL4', 'BPAN4', 'CVCB3', 'ITUB4', 'PETR4', 'VALE3', 'VIVT3']
    let randomActions = ['ABEV3']
    for (let index = 0; index < randomActions.length; index++) {
        const element = randomActions[index];
        const connection = await fetch(`https://brapi.dev/api/quote/PETR4?range=1d&interval=1d&fundamental=true`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });
    const response = await connection.json()
    console.log(response)
    const acao = new Response(response['requestedAt'], response['results']['0']['longName'], response['results']['0']['historicalDataPrice']['0']['close'], response['results']['0']['historicalDataPrice']['0']['open'],)
    console.log(acao)

    }
}


class Response {
    constructor(data, nome, current, previous){
        this.data = data;
        this.nome = nome;
        this.current = current;
        this.previous = previous
    }
}


// Obtenha o valor atual da ação


window.onload = function(){
    TokenVerify()
    // Obtenha o valor atual da ação
    let currentValue = acao.current
    console.log(currentValue)
    
    // Obtenha o valor anterior da ação
    let previousValue = acao.previous
    
    // Atualize a classe da célula de seta
    let arrowIndicator = document.querySelector(".arrow-indicator");
    if (currentValue > previousValue) {
        arrowIndicator.classList.add("up");
    } else {
        arrowIndicator.classList.add("down");
    }
}
