const deslocamento = 3;

function atualizarTexto(id, texto){
    let elemento = document.getElementById(id);
    elemento.innerHTML = texto;
    elemento.style.fontSize = `${45}px`
}

function mensagemOriginal(){
    let mensagem = document.querySelector('textarea').value;
    return mensagem;
}

function codificarMensagem(mensagem, deslocamento){
    return mensagem.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + deslocamento) % 26 + 26) % 26 + 'a'.charCodeAt(0));
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + deslocamento) % 26 + 26) % 26 + 'A'.charCodeAt(0));
        } else {
            return char; // Não altera caracteres não alfabéticos
        }
    }).join('');
}

function exibirTexto(){
    let mensagem = mensagemOriginal(); // Obtém a mensagem original
    let mensagemCodificada = codificarMensagem(mensagem, deslocamento); // Codifica a mensagem
    atualizarTexto('decodificado', mensagemCodificada); // Atualiza o HTML com a mensagem codificada
}

function decodificarTexto(){
    let mensagem = mensagemOriginal(); // Obtém a mensagem original
    let mensagemCodificada = codificarMensagem(mensagem, -deslocamento); // Codifica a mensagem
    atualizarTexto('decodificado', mensagemCodificada); // Atualiza o HTML com a mensagem codificada
}
