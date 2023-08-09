function Enviar(){                           
    var Rita = document.getElementById("nomeid");
    if(Rita != " "){


    }
}
function limpa_formulário_cep(){
//Essa função limpa o formulário e deixa ele sem nada
//escrito substituindo por vazio ("").
document.getElementById('rua')value=("");
document.getElementById('bairro')value=("");
document.getElementById('cidade')value=("");
document.getElementById('uf')value=("");
}

function meu_callback(conteudo) (
    if(!"erro" in conteudo){
        //caso não dê nenhum erro, os campos serão preenchidos com informações
        //referentes ao cep informado.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    }
    else{
        limpa_formulário_cep();
        alert("Cep não encontrado")
    }

)

function pesquisacep(valor){
//Nova variavel "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '')
    //Verifica se campo cep possui valor informado.
    if(cep ! = " "){
    //Expressão regular para validar CEP.
        var validacep = /[0-9]{8}&/;
        if(validacep.test(cep)){
            document.getElementById('rua').value='...';
            document.getElementById('bairro').value='...';
            document.getElementById('cidade').value='...';
            document.getElementById('uf').value='...';
            //Cria um elemento Javascript, ele que vai ser usado para acessar
            //o servidor dos correios(ViaCEP).
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/callback=meu_callback';

        }
    }
}