async function TokenVerify() {
    const connection = await fetch('https://brapi.dev/api/quote/PETR4', {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });
    const response = await connection.json()
    console.log(response)
    const acao = new Petrobras(response['requestedAt'], response['results']['0']['longName'], response['results']['0']['regularMarketDayHigh'])
    console.log(acao)
}
TokenVerify()



class Petrobras {
    constructor(data, nome, valorDeMercado){
        this.data = data;
        this.nome = nome;
        this.valorDeMercado = valorDeMercado;
    }
}