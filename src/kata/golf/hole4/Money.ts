import { Incalculable } from "./incalculable";
class Money {
    public value: number;
    public currency: string;


    constructor(value: number, currency: string) {
        this.value = value;
        this.currency = currency;
    }

    plus(other: Money): Money {
        if (other.currency !== this.currency) {
            throw new Incalculable();
        }
        return new Money(this.value + other.value, other.currency);
    }
}

//hole 4
let money = function money(amount: number, currency: string){
    return new Money(Math.trunc(amount), currency)
}

export { Money, money } 
