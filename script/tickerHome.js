async function ticker() {
    let actual = 0
    let previous = 0
    let actions = ['ABEV3', 'AMER3', 'AZUL4', 'BPAN4', 'CVCB3', 'ITUB4', 'PETR4', 'VALE3', 'VIVT3', 'COCA34', 'DISB34', 'AAPL34', 'BBDC4', 'COGN3', 'COGN3']
    for (let index = 0; index < actions.length; index++) {
        const element = actions[index];
        
        const connection = await fetch(`https://brapi.dev/api/quote/${actions}?range=5d&interval=1d&fundamental=true`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
        
    });
    const response = await connection.json()
    let actualValue = response['results'][actual]['historicalDataPrice']['0']['close'];actual ++
    actualValue = Math.round(actualValue * 100) / 100
    actualValue = parseFloat(actualValue)
    let previousValue = response['results'][previous]['historicalDataPrice']['0']['open'];previous++
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
