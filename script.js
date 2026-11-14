
// Definindo o alfabeto
const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// Criando o dicionário personalizado
const dicionario = "qwertyuiopasdfghjklzxcvbnm";

// Função para criptografar
function criptografar() {

    // Pegando a senha digitada
    let senha = document.getElementById("senha").value;

    // Inicializando a senha criptografada
    let senhaCriptografada = "";

    if (senha.trim() === "") {
        alert("Digite uma palavra ou senha!");
        return;
    }

    // Percorrendo cada letra da senha
    for (let letra of senha.toLowerCase()) {

        // Calculando a posição da letra
        let posicao = alfabeto.indexOf(letra);

        // Verificando se a letra existe no alfabeto
        if (posicao !== -1) {

            // Substituindo pela letra do dicionário
            senhaCriptografada += dicionario[posicao];

        } else {

            // Mantendo espaços e símbolos
            senhaCriptografada += letra;
        }
    }

    // Exibindo o resultado
    document.getElementById("resultado").textContent =
        senhaCriptografada;
}


// Função para descriptografar
function descriptografar() {

    let senha = document.getElementById("senha").value;

    let senhaOriginal = "";

    if (senha.trim() === "") {
        alert("Digite uma mensagem!");
        return;
    }

    // Percorrendo cada letra
    for (let letra of senha.toLowerCase()) {

        // Procurando a letra no dicionário
        let posicao = dicionario.indexOf(letra);

        if (posicao !== -1) {

            // Recuperando a letra original
            senhaOriginal += alfabeto[posicao];

        } else {

            senhaOriginal += letra;
        }
    }

    // Exibindo a mensagem original
    document.getElementById("resultado").textContent =
        senhaOriginal;
}


// Função para copiar o resultado
function copiarResultado() {

    let resultado =
        document.getElementById("resultado").textContent;

    if (resultado === "Seu resultado aparecerá aqui.") {
        alert("Gere um resultado primeiro!");
        return;
    }

    navigator.clipboard.writeText(resultado)
        .then(() => {
            alert("Resultado copiado com sucesso!");
        })
        .catch(() => {
            alert("Não foi possível copiar o resultado.");
        });
}
