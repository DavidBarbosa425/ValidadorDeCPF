   let cpfLimpo
function limpaCPF(cpfEnviado) {
    cpfLimpo = cpfEnviado.replace(/\D+/g, '');
    validaCPF(cpfLimpo);
};

function validaCPF(cpfLimpo) {
    if(cpfLimpo.length !== 11) return console.log('CPF inválido');
    if(cpfLimpo[0].repeat(cpfLimpo.length) === cpfLimpo) return console.log('CPF inválido');
    cpfSemDigitos(cpfLimpo);
}

function cpfSemDigitos(cpfLimpo) {
    cpfLimpo = cpfLimpo.slice(0, -2);
    calculaDigito1CPF(cpfLimpo);
}

function calculaDigito1CPF(cpfLimpo) {
    let total;
       total = Number(cpfLimpo[0] * 10);
       total += Number(cpfLimpo[1] * 9);
       total += Number(cpfLimpo[2] * 8);
       total += Number(cpfLimpo[3] * 7);
       total += Number(cpfLimpo[4] * 6);
       total += Number(cpfLimpo[5] * 5);
       total += Number(cpfLimpo[6] * 4);
       total += Number(cpfLimpo[7] * 3);
       total += Number(cpfLimpo[8] * 2);
       let resto = total % 11
       let dig1 = 11 - resto
       let cpf10dig = String(cpfLimpo + dig1)
       calculaDigito2CPF(cpf10dig) 
}

function calculaDigito2CPF(cpf10dig) {
    let total;
       total = Number(cpf10dig[0] * 11);
       total += Number(cpf10dig[1] * 10);
       total += Number(cpf10dig[2] * 9);
       total += Number(cpf10dig[3] * 8);
       total += Number(cpf10dig[4] * 7);
       total += Number(cpf10dig[5] * 6);
       total += Number(cpf10dig[6] * 5);
       total += Number(cpf10dig[7] * 4);
       total += Number(cpf10dig[8] * 3);
       total += Number(cpf10dig[9] * 2);
       let resto = total % 11;
       let dig2 = 11 - resto
       let cpfVerificado = String(cpf10dig + dig2)
       respondeSeCPFevalido(cpfVerificado)
}

function respondeSeCPFevalido(cpfVerificado) {
    if(cpfLimpo === cpfVerificado) return console.log('CPF valido')
    return console.log('CPF inválido')
}

limpaCPF('381.498.248-71')

