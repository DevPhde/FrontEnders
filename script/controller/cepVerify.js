function clearFormCep() {
    //Limpa valores do formulário de cep.
    document.getElementById('street').value = ("");
    document.getElementById('district').value = ("");
    document.getElementById('city').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(content) {
    if (!("erro" in content)) {
        //Atualiza os campos com os valores.
        document.getElementById('street').value = (content.logradouro);
        document.getElementById('district').value = (content.bairro);
        document.getElementById('city').value = (content.localidade);
        document.getElementById('uf').value = (content.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        clearFormCep();
        alert("CEP não encontrado.");
    }
}


function searchCep(value) {

    //Nova variável "cep" somente com dígitos.
    let cep = value.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        let validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('street').value = "...";
            document.getElementById('district').value = "...";
            document.getElementById('city').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            let script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            clearFormCep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        clearFormCep();
    }
}

