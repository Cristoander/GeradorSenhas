let tamanhoSenha = 1 //Controla o Tamanho Da senha

//Botoes de controle do tamanho da senha
document.getElementById('tamanho').innerHTML = tamanhoSenha

function botaoMenos(){
        if (tamanhoSenha < 1 ){
        tamanhoSenha = 1
    }
        document.getElementById('tamanho').innerHTML =  --tamanhoSenha

}
function botaoMais(){
    document.getElementById('tamanho').innerHTML =  ++tamanhoSenha
    
};

//VERIFICA OS Checkbox e gera a Senha
function gerarSenha(){
let caracteres = '';
let senha = ''

if (checkboxMaiusculas.checked) {
  caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}
if (checkboxMinuculas.checked) {
  caracteres += 'abcdefghijklmnopqrstuvwxyz';
}
if (checkboxNumeros.checked) {
  caracteres += '0123456789';
}
if (checkboxSimbolos.checked) {
  caracteres += '!@#$%&*';
}
 if (caracteres === '') {
        alert('Selecione pelo menos uma opção!');
        return;
    }
    // Pega a Ultima combinação do while
    let paraFunsaoSenha = 1
    while (paraFunsaoSenha <= tamanhoSenha) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
        paraFunsaoSenha++;
    }
    // Ira Retornar no Navegador Site: https://gerador-senhas-bay.vercel.app/
    document.getElementById('mostrarSenha').innerHTML = senha
}


function copiarSenha(){
    let senhaCopiada = document.getElementById('mostrarSenha').textContent
    navigator.clipboard.writeText(senhaCopiada)

}