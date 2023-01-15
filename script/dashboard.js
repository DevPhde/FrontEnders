import { Routes } from "./routing/routes.js"



window.onload = async () => {
    const render = await Routes.Dashboard()
    if(render) {
        const body = document.querySelector('body')
        body.hidden = false
    }
}





let ctx = document.getElementById('line-chart').getContext('2d');

let data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    datasets: [{
        label: "Valor das Ações",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
    }]
};

let lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {}
});


let ctx1 = document.getElementById('bar-chart').getContext('2d');

let data1 = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    datasets: [{
        label: "Transações",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [500, 590, 800, 810, 560, 550, 400,20]
    }]
};

let barChart = new Chart(ctx1, {
    type: 'bar',
    data: data1,
    options: {}
});


window.onbeforeunload = function(){
    sessionStorage.clear()
  };