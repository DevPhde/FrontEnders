// pagina tera uma tela de loading, conforme a tela carrega será feita uma requisição pro servidor testando o hash que o usuário tem no session storage
import { Connection } from "./Connection.js"

export async function dashboardView(hash) {
    console.log(sessionStorage.getItem('Hash'))
    const connection =  await Connection.DashboardConnection()
    const response = connection.json()
    console.log(response)
    // const hash = sessionStorage.getItem('Hash')

    
}