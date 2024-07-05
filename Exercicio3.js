const readline = require('readline');

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

read.question('Digite as notas do aluno, separadas por espaços: ', (input) => {
    const notas = input.split(' ');
    let n1 = parseFloat(notas[0]);
    let n2 = parseFloat(notas[1]);
    let n3 = parseFloat(notas[2]);
    const media = (n1 + n2 + n3) / 3;
    
    if (media >= 6){
        console.log('Aprovado');
    }
    else{
        console.log('Reprovado');
    }
    
    read.close();

})

