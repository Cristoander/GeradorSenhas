let tamanhoSenha =1
document.getElementById('tamanho').innerHTML = tamanhoSenha

function botaoMenos(){
    
    document.getElementById('tamanho').innerHTML =  --tamanhoSenha
    
}

function botaoMais(){
    document.getElementById('tamanho').innerHTML =  ++tamanhoSenha
    
}