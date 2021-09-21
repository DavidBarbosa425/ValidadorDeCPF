class ValidatorCPF {
    constructor(sentCPF) {
        this.sentCPF = sentCPF.replace(/\D+/, '');
    }

    validCPF() {
        if(this.sentCPF.length !== 11) return;
        if(this.sentCPF[0].repeat(this.sentCPF.length) === this.sentCPF) return;
        this.generateNewCPF()
        if(this.newCPF === this.sentCPF) return console.log('valido')
    }

    generateNewCPF() {
        let cpfNoDigits = this.sentCPF.slice(0, -2);
        let dig1 = this.generatesDig(cpfNoDigits);
        let dig2 = this.generatesDig(cpfNoDigits + dig1);
        this.newCPF = cpfNoDigits + dig1 + dig2;
    }

    generatesDig(cpfNoDigits) {
        let tot = 0;
        let reverse = cpfNoDigits.length + 1;

        for(let num of cpfNoDigits) {
            tot += Number(num * reverse)
            reverse--
        }
        let digit = 11 - (tot % 11);
        return digit <= 9 ? String(digit) : '0';
    }
}

const validatorCPF = new ValidatorCPF('333333333333');
validatorCPF.validCPF()
