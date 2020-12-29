import {Incalculable} from "./incalculable";
import { Money } from "./Money";
export class Takehomecalculator {
    private readonly percent: number;

    constructor(percent: number) {
        this.percent = percent;
    }

    money(amount: number, currency: string){
        return new Money(Math.trunc(amount), currency)
    }

    netAmount(first: Money, ...rest : Money[] ): Money {

        const monies: Array<Money> = Array.from(rest);
        let total: Money = first;

        for (const next of monies) {
            total = total.plus(next);
        }

        const amount:number = total.value * (this.percent / 100.0 );
        const tax: Money = this.money(Math.trunc(amount), first.currency);

        if (total.currency !== tax.currency) {
            throw new Incalculable();
        }
        return new Money(total.value - tax.value, first.currency)
    }

}