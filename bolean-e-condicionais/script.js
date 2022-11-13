// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var nome = 'Leandro';
var minhaIdade = 29;
var primo = 'Tiago';
var idadePrimo = 30;
 
if(idade > idadePrimo) {
  console.log(`A idade do ${nome} é maior que a do primo ${nome}.`);
} else if(minhaIdade === idadePrimo){
  console.log(`A idade do ${nome} é igual a do primo ${primo}.`);
} else{
  console.log(`A idade do ${nome} é menor que a do ${primo}.`);
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 213;
var china = 1700;

if (brasil > china) {
  console.log('Brasil tem mais habitantes que a China');
} else {
  console.log('Brasil tem menos habitantes que a China');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
 console.log('Verdadeiro');
} else {
 console.log('Falso');
}
// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
 console.log('Gato' && 'Cão');
} else {
 console.log('Falso');
}