async function ticker() {
    let randomActions = ['ABEV3', 'AMER3', 'AZUL4', 'BPAN4', 'CVCB3', 'ITUB4', 'PETR4', 'VALE3', 'VIVT3']
    for (let index = 0; index < randomActions.length; index++) {
        const element = randomActions[index];
        const connection = await fetch(`https://brapi.dev/api/quote/${element}?range=1d&interval=1d&fundamental=true`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
        
    });
    const response = await connection.json()
    let actualValue = response['results']['0']['historicalDataPrice']['0']['close']
    actualValue = Math.round(actualValue * 100) / 100
    actualValue = parseFloat(actualValue)
    let previousValue = response['results']['0']['historicalDataPrice']['0']['open']
    previousValue = Math.round(previousValue * 100) / 100
    previousValue = parseFloat(previousValue)
    const ul = document.getElementById("carousel__home")
    let li = document.createElement("li");
    let div = document.createElement("div")
    let bName = document.createElement("b");
    let bValue = document.createElement("b");
    
    li.setAttribute("class", "carouselTicker__item");
    div.setAttribute("class", setArrow(actualValue, previousValue));
    bName.setAttribute("class", "p-1");
    bName.innerHTML = element
    bValue.innerHTML = actualValue
    ul.appendChild(li)
    li.appendChild(div)
    li.appendChild(bName)
    li.appendChild(bValue)
    
    }
    const div = document.getElementById("div__ticker")
    div.hidden = false
    $(document).ready(function() {
        $('.carouselTicker').carouselTicker();
    });
}
ticker()


function setArrow(actualValue, previousValue){
    return actualValue > previousValue ? "arrow-up" : "arrow-down"
    }
