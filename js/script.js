function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('street').value=("");
        document.getElementById('district').value=("");
        document.getElementById('city').value=("");
        document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('street').value=(conteudo.logradouro);
        document.getElementById('district').value=(conteudo.bairro);
        document.getElementById('city').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisaCep(valor) {

    //Nova variável "cep" somente com dígitos.
    let cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('street').value="...";
            document.getElementById('district').value="...";
            document.getElementById('city').value="...";
            document.getElementById('uf').value="...";

            //Cria um elemento javascript.
            let script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

function compararSenha(){
    const senha = document.getElementById("password");
    const confirmarcao = document.getElementById("check");

    return senha.value == confirmarcao.value ? true : false;
}

async function sendForm(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const identidy = document.getElementById("identidy");
    const zip = document.getElementById("zip");
    const senha = compararSenha();
    if(!senha){
        alert("As senhas estão diferentes!");
        return
    }
    const user = new User(name.value, email.value, identidy.value, password.value, zip.value);
    fetchApi(user);
    const response = await fetchApi(user);
    const resposta = await response.json()
    console.log(response);
    console.log(resposta);
}

class User{
    constructor(fullName, email, rg, password, cep){
        this.fullName = fullName;
        this.email = email;
        this.rg = rg;
        this.password = password;
        this.cep = cep;
    }
}

const formulary = document.querySelector('form');
formulary.addEventListener("click", (e)=>{
    sendForm();
    e.preventDefault();
})

async function fetchApi(user) {
    const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/user/register', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Permissions-Policy": "interest-cohort=()"
        },
        body: JSON.stringify(user)
    });
    return connection
};