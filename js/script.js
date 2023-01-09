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

//validar

/* FUNÇÃO VALIDAR*/
// var DDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
//     21, 22, 24, 27, 28, 31, 32, 33, 34,
//     35, 37, 38, 41, 42, 43, 44, 45, 46,
//     47, 48, 49, 51, 53, 54, 55, 61, 62,
//     64, 63, 65, 66, 67, 68, 69, 71, 73,
//     74, 75, 77, 79, 81, 82, 83, 84, 85,
//     86, 87, 88, 89, 91, 92, 93, 94, 95,
//     96, 97, 98, 99];
   
function validar() {
    var usuario = email.value.substring(0, email.value.indexOf("@"));
    var dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    // var valid_ddd = telefone.value.substring(1, telefone.value.indexOf (")"));
    var validateField = [];
    /* CHECA OS CAMPOS DO FORMULÁRIO AO APERTAR O BOTÃO ENVIAR */
    if (document.getElementById("nomeCompleto").value.length <= 2) { //????????
        document.getElementById("alerta_nome").innerHTML = "Nome Inválido"; //??????
        validateField.push("false");
    }
    if ((usuario.length < 2) ||
        (dominio.length < 3) ||
        (usuario.search("@")!=-1) ||
        (dominio.search("@")!=-1) ||
        (usuario.search(" ")!=-1) ||
        (dominio.search(" ")!=-1) ||
        (dominio.indexOf(".") < 1) ||
        (dominio.lastIndexOf(".") < dominio.length -1) == false){
        document.getElementById("alerta_email").innerHTML = "E-mail Inválido";
        validateField.push("false");
    }
    // if (document.getElementById("telefone").value.length == "") {
    //     document.getElementById("alerta_telefone").innerHTML = "Por favor preencha o campo";
    //     validateField.push("false");
    // }
    // else if (document.getElementById("telefone").value.length < 14) {
    //     document.getElementById("alerta_telefone").innerHTML = "Números faltando no telefone";
    //     validateField.push("false");
    // }
    // else if  ((DDD.indexOf(parseInt(valid_ddd)) != -1)  == false) {
    //     document.getElementById("alerta_telefone").innerHTML = "DDD inválido";
    //     validateField.push("false");
    // }
    // if (document.getElementById("assunto").value == "selecione") {
    //     document.getElementById("alerta_assunto").innerHTML = "Campo obrigatório";
    //     validateField.push("false");
    // }
    // if (document.getElementById("areatexto").value == "") {
    //     document.getElementById("alerta_text").innerHTML = "Campo obrigatório"
    //     validateField.push("false");
    // }
    // if ((document.getElementById("radio_cliente").checked == false) && (document.getElementById('radio_fornecedor').checked == false)) {
    //     document.getElementById("alerta_radio").innerHTML = "Campo obrigatório";
    //     validateField.push("false");
    //     console.log(validateField);
    // }
    validateField.push("true");
    var teste = testeValidateField(validateField);
    if (teste == true) {
        window.location.href="faleconoscosend.html";
    }
}

function testeValidateField(array) {
    let i = 0;
    while (array[i]){
        if  (array[i] == "false"){
            return false;
            break
        }else {
            return true;
            break
        }
    }
    i++;
}

/* FUNÇÃO PARA VALIDAR O INPUT APÓS O PRRENCHIMENTO DO USUÁRIO */
function validacaoInput() {
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@")+ 1, email.value.length);
    if  ((document.getElementById("name").value != "") && (document.getElementById("name").value.length >= 3)) { //********* */
        document.getElementById("alerta_nome").innerHTML = "";
    }
    if  ((usuario.length >= 2) &&
        (dominio.length >= 3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length -1)) {
        document.getElementById("alerta_email").innerHTML = "";
    }
    // if  (document.getElementById("telefone").value != "") {
    //     document.getElementById("alerta_telefone").innerHTML = "";
    // }
    if  (document.getElementById("assunto").value != "selecione") { //????
        document.getElementById("alerta_assunto").innerHTML = "";
    }
    // if  ((document.getElementById("radio_cliente").checked == true) || (document.getElementById('radio_fornecedor').checked == true)) {
    //     document.getElementById("alerta_radio").innerHTML = "";
    // }
    // if  (document.getElementById("areatexto").value != "") {
    //     document.getElementById("alerta_text").innerHTML = "";
    // }
}

// /* FUNÇÃO PARA ARRUMAR OS NÚMEROS NO INPUT TELEFONE*/
// function mascaraTelefone(event) {
//     var valor = document.getElementById("telefone").attributes[0].ownerElement['value'];
//     var retorno = valor.replace(/\D/g, "");
//     retorno = retorno.replace(/^0/, "");
//     if (retorno.length > 10) {
//       retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
//     } else if (retorno.length > 5) {
//       retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
//     } else if (retorno.length > 2) {
//       retorno = retorno.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
//     } else {
//       if (retorno.length != 0) {
//         retorno = retorno.replace(/^(\d*)/, "($1");
//       }
//     }
//     document.getElementById("telefone").attributes[0].ownerElement['value'] = retorno;
//   }