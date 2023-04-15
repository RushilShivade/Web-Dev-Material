class Calci{
    constructor(n1 , n2){
        this.n1 = n1;
        this.n2 = n2;
    }
    add() {
        const {n1, n2} = this;
        const addition = n1+n2;
        return addition;
    }

    subtract(){
        const {n1, n2} = this;
        const subtract = n1-n2;
        return subtract;
    }

    multiply(){
        const {n1, n2} = this;
        const multiply = n1*n2;
        return multiply;
    }

    divide(){
        const {n1, n2} = this;
        const divide = n1/n2;
        return divide;
    }
}

const check = new Calci(5, 4);