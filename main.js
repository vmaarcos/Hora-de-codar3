


function atividade1() {
// Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor. 
    var P_valor, S_valor, resultado;
  //condição de true ou false com while e do pq o pai ta chato 
    do {
        P_valor = parseFloat(prompt("Digite o primeiro valor"));
    } while (isNaN(P_valor)); // Continua pedindo até que o usuário insira um número válido

    do {
        S_valor = parseFloat(prompt("Digite o segundo valor"));
    } while (isNaN(S_valor)); // Continua pedindo até que o usuário insira um número válido

    // Verificar se o segundo valor é zero 
    if (S_valor === 0) {
        alert("Não é possível dividir por zero.");
    } else {
        resultado = P_valor / S_valor;
        alert("A divisão é: " + resultado);
    }
}



function atividade2() {
    //Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO". 
    var segundos = 30;

    while (segundos >= 0) {
        if (segundos === 0) {
            document.write("EXPLOSÃO BUUUUMMMM MORREU OTARIO");
        } else {
            document.write(segundos);
        }
        segundos--;
    }
}

function atividade3() {
    // Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
    //Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

    for (var i = 10; i >= 1; i--) {
    document.write(i)
    }
}

function atividade4() {
    // Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
    var soma = 0;
var contador = 0;

for (var numero = 15; numero <= 100; numero++) {
    soma += numero;
    contador++;
}

var media = soma / contador;

alert("A média aritmética dos números entre 15 e 100 é: " + media);
 
}

function atividade5() {
    // Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. 
    var primeiroNumero = parseInt(prompt("Digite o primeiro número inteiro:"));
var segundoNumero = parseInt(prompt("Digite o segundo número inteiro:"));

if (primeiroNumero >= segundoNumero) {
    alert("O primeiro número deve ser menor que o segundo.");
} else {
    var soma = 0;
    var contador = 0;

    for (var i = primeiroNumero; i <= segundoNumero; i++) {
        soma += i;
        contador++;
    }

    var mediaEntreNumeros = soma / contador;
    var mediaDosNumeros = (primeiroNumero + segundoNumero) / 2;

    alert("A média aritmética dos números entre " + primeiroNumero + " e " + segundoNumero + " é: " + mediaEntreNumeros.toFixed(2));
    alert("A média aritmética dos dois números informados é: " + mediaDosNumeros.toFixed(2));
}

}  

function atividade6() {
    // Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.
    var alunosAprovados = 0; // Inicializa o contador de alunos aprovados

do {
    var nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
    
    var media = (nota1 + nota2) / 2; // Calcula a média das notas
    
    if (media >= 9.5) {
        alert("Aluno aprovado com média " + media.toFixed(2));
        alunosAprovados++;
    } else {
        alert("Aluno reprovado com média " + media.toFixed(2));
    }
    
    var resposta = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
} while (resposta === 'S');

alert("Quantidade de alunos aprovados: " + alunosAprovados);


}

function atividade7() {
    // Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
    //Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 
    var notas = [];
    var soma = 0;
    
    for (var i = 1; i <= 6; i++) {
        var nota;
        do {
            nota = parseFloat(prompt("Digite a nota " + i + " (0 a 10):"));
        } while (isNaN(nota) || nota < 0 || nota > 10);
    
        notas.push(nota);
        soma += nota;
    }
    
    var media = soma / 6;
    
    alert("As notas inseridas foram: " + notas.join(", "));
    alert("A média das notas é: " + media.toFixed(2));

    

}

function atividade8() {
    //  Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.
    //N  é um valor informado pelo usuário

    var N = parseInt(prompt("Digite um valor N (maior que zero):"));

if (N > 0) {
    for (var i = 1; i <= N; i++) {
        alert(i);
    }
} else {
    alert("O valor de N deve ser maior que zero.");
}


    
}

function atividade9() {
    // Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
    for (var i = 101; i <= 110; i++) {
        alert(i);
    }
    
}

function atividade10() {
    // Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. 
  alert("NaN (nn resolvi)")

}

function atividade11() {
    //  Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.
    var dentroIntervalo = 0; // Inicializa o contador de valores dentro do intervalo
var foraIntervalo = 0; // Inicializa o contador de valores fora do intervalo

for (var i = 1; i <= 10; i++) {
    var valor = parseInt(prompt("Digite o " + i + "º valor:"));

    if (valor >= 24 && valor <= 42) {
        dentroIntervalo++;
    } else {
        foraIntervalo++;
    }
}

alert("Valores dentro do intervalo [24, 42]: " + dentroIntervalo);
alert("Valores fora do intervalo [24, 42]: " + foraIntervalo);

}

// Associar as funções aos botões
document.getElementById("botaoAtividade1").addEventListener("click", atividade1);
document.getElementById("botaoAtividade2").addEventListener("click", atividade2);
document.getElementById("botaoAtividade3").addEventListener("click", atividade3);
document.getElementById("botaoAtividade4").addEventListener("click", atividade4);
document.getElementById("botaoAtividade5").addEventListener("click", atividade5);
document.getElementById("botaoAtividade6").addEventListener("click", atividade6);
document.getElementById("botaoAtividade7").addEventListener("click", atividade7);
document.getElementById("botaoAtividade8").addEventListener("click", atividade8);
document.getElementById("botaoAtividade9").addEventListener("click", atividade9);
document.getElementById("botaoAtividade10").addEventListener("click", atividade10);
document.getElementById("botaoAtividade11").addEventListener("click", atividade11);
