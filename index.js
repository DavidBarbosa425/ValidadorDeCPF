class ValidadordeCPF {
    constructor(cpfEnviado) {
        this.cpfEnviado = cpfEnviado;
        this.cpfLimpo;
        this.total;
    }

    limpaCPF() {
        this.cpfLimpo = this.cpfEnviado.replace(/\D+/g, '');
        this.validaCPF(this.cpfLimpo);
    };
    
    validaCPF(cpfLimpo) {
        if(this.cpfLimpo.length !== 11) return console.log('CPF inválido, verifique se foi inserido os 11 digitos');
        if(this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo) return console.log('CPF inválido, números repetidos');
        this.cpfSemDigitos(this.cpfLimpo);
    }
    
    cpfSemDigitos(cpfLimpo) {
        this.cpfLimpo10dig = this.cpfLimpo.slice(0, -2);
        this.calculaDigito1CPF(this.cpfLimpo10dig);
    }
    
    calculaDigito1CPF(cpfLimpo10dig) {
        
           this.total = Number(this.cpfLimpo10dig[0] * 10);
           this.total += Number(this.cpfLimpo10dig[1] * 9);
           this.total += Number(this.cpfLimpo10dig[2] * 8);
           this.total += Number(this.cpfLimpo10dig[3] * 7);
           this.total += Number(this.cpfLimpo10dig[4] * 6);
           this.total += Number(this.cpfLimpo10dig[5] * 5);
           this.total += Number(this.cpfLimpo10dig[6] * 4);
           this.total += Number(this.cpfLimpo10dig[7] * 3);
           this.total += Number(this.cpfLimpo10dig[8] * 2);
           this.resto = this.total % 11
           this.dig1 = 11 - this.resto
           this.cpf10dig = String(this.cpfLimpo10dig + this.dig1)
           this.calculaDigito2CPF(this.cpf10dig) 
    }
    
    calculaDigito2CPF(cpf10dig) {
        
           this.total = Number(this.cpf10dig[0] * 11);
           this.total += Number(this.cpf10dig[1] * 10);
           this.total += Number(this.cpf10dig[2] * 9);
           this.total += Number(this.cpf10dig[3] * 8);
           this.total += Number(this.cpf10dig[4] * 7);
           this.total += Number(this.cpf10dig[5] * 6);
           this.total += Number(this.cpf10dig[6] * 5);
           this.total += Number(this.cpf10dig[7] * 4);
           this.total += Number(this.cpf10dig[8] * 3);
           this.total += Number(this.cpf10dig[9] * 2);
           this.resto = this.total % 11;
           this.dig2 = 11 - this.resto
           this.cpfVerificado = String(this.cpf10dig + this.dig2)
           this.respondeSeCPFevalido(this.cpfVerificado)
    }
    
    respondeSeCPFevalido(cpfVerificado) {
        if(this.cpfLimpo === this.cpfVerificado) return console.log('CPF valido')
        return console.log('CPF inválido')     
    }
}
   
let validaCPF = new ValidadordeCPF('371.498.248-71');
validaCPF.limpaCPF()

