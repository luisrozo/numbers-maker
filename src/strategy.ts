import { MAX_QUANTITY } from "./constants";
import { pad } from "./helpers";

export interface Strategy {
    execute(quantity: number): string[];
}

export class SequentialNumbers implements Strategy {

    public execute(quantity: number): string[] {
        let numbers: string[] = [];

        for(let i = 0; i < quantity; i++) {
            numbers.push(pad(i, 6));
        }
    
        return numbers;
    }

}

export class FibonacciNumbers implements Strategy {

    public execute(quantity: number): string[] {
        let numbers: string[] = [];
        let a = 1, b = 1, temp: number;
    
        while (quantity > 0){
            temp = a;
            a = a + b;
            b = temp;
            quantity--;
    
            numbers.push(pad(b, 6));
        }
    
        return numbers;
    }

}

export class RandomNumbers implements Strategy {

    public execute(quantity: number): string[] {
        let randomNumbers: number[] = [];
        let numbers: string[] = [];
    
        randomNumbers = [...Array(quantity)].map(() => Math.floor(Math.random() * MAX_QUANTITY));
    
        numbers = randomNumbers.map((number) => {
            return pad(number, 6);
        });
    
        return numbers;
    }

}

export class Context {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public executeStrategy(quantity: number): string[] {
        return this.strategy.execute(quantity);
    }
}