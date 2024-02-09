
// Adicione no início do seu arquivo app.js
document.getElementById('reiniciar').disabled = true;


function sortear() {
    // Obter os valores dos inputs
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var de = parseInt(document.getElementById('de').value);
    var ate = parseInt(document.getElementById('ate').value);

    // Habilitar o botão reiniciar
    document.getElementById('reiniciar').disabled = false;

    // Verificar se os campos são válidos
    if (isNaN(quantidade) || quantidade <= 0 ||
        isNaN(de) || isNaN(ate) ||
        de >= ate || quantidade > (ate - de + 1)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Função para gerar números aleatórios sem repetição e maiores que zero
    function gerarNumerosAleatorios(quantidade, de, ate) {
        var numeros = [];
        while (numeros.length < quantidade) {
            var numeroAleatorio = Math.floor(Math.random() * (ate - de + 1)) + de;
            if (numeros.indexOf(numeroAleatorio) === -1 && numeroAleatorio > 0) {
                numeros.push(numeroAleatorio);
            }
        }
        return numeros;
    }

    // Função para verificar se um número é primo
    function ehPrimo(numero) {
        if (numero <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Função para gerar números primos maiores que zero de forma aleatória
    function gerarNumerosPrimosAleatorios(quantidade, de, ate) {
        var primos = [];
        while (primos.length < quantidade) {
            var numeroAleatorio = Math.floor(Math.random() * (ate - de + 1)) + de;
            if (ehPrimo(numeroAleatorio) && numeroAleatorio > 0 && primos.indexOf(numeroAleatorio) === -1) {
                primos.push(numeroAleatorio);
            }
        }
        return primos;
    }

    // Função para gerar os primeiros números da sequência de Fibonacci de forma aleatória
    function gerarFibonacciAleatorio(quantidade, ate) {
        var fibonacci = [];
        var numerosDisponiveis = [];

        // Inicializar array com os números de Fibonacci até atingir o valor máximo
        var a = 0, b = 1;
        while (a <= ate) {
            fibonacci.push(a);
            numerosDisponiveis.push(a);
            var temp = a + b;
            a = b;
            b = temp;
        }

        // Escolher aleatoriamente a quantidade desejada de números sem repetição
        for (var i = 0; i < quantidade && numerosDisponiveis.length > 0; i++) {
            var indiceAleatorio = Math.floor(Math.random() * numerosDisponiveis.length);
            var numeroEscolhido = numerosDisponiveis.splice(indiceAleatorio, 1)[0];
            fibonacci[i] = numeroEscolhido;
        }

        return fibonacci.slice(0, quantidade);
    }

    // Gerar os números aleatórios, primos e Fibonacci
    var numerosSorteados = gerarNumerosAleatorios(quantidade, de, ate);
    var primosSorteados = gerarNumerosPrimosAleatorios(quantidade, de, ate);
    var fibonacciSorteados = gerarFibonacciAleatorio(quantidade, ate);

    // Atualizar os elementos HTML com os resultados
    document.getElementById('numero').textContent = "Números sorteados: " + numerosSorteados.join(', ');
    document.getElementById('primo').textContent = "Números primos sorteados: " + primosSorteados.join(', ');
    document.getElementById('fibonacci').textContent = "Números fibonacci sorteados: " + fibonacciSorteados.join(', ');
}

function reiniciar() {
    // Limpar os valores dos inputs
    document.getElementById('quantidade').value = "";
    document.getElementById('de').value = "";
    document.getElementById('ate').value = "";

     // Limpar os resultados exibidos
     document.getElementById('numero').textContent = "Números sorteados: nenhum até agora";
     document.getElementById('primo').textContent = "Números primos sorteados: nenhum até agora";
     document.getElementById('fibonacci').textContent = "Números Fibonacci sorteados: nenhum até agora";


    // Desabilitar o botão reiniciar
    document.getElementById('reiniciar').disabled = true;

    // ... (outras ações de reinicialização, se necessário)
}