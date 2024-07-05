const readline = require('readline');

function converteTemp(tempF){
    return (tempF - 32) * 5 / 9;
}

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('Digite a temperatura em Fahrenheit: ', (input) => {
    let temperaturaFahrenheit = parseFloat(input);
    let temperaturaCelsius = converteTemp(temperaturaFahrenheit);
    console.log(temperaturaCelsius);

    read.close();
})


