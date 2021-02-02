import { DEFAULT_STRATEGY, strategies } from "./constants";
import { Context } from "./strategy";

export class NumbersMaker {

    private quantity: number;
    private algorithm: string;

    constructor(quantity: number = 10, algorithm: string = '') {
        this.quantity = quantity;
        this.algorithm = algorithm;
    }

    public setQuantity = (quantity: number): void => {
        this.quantity = quantity;
    }

    public setAlgorithm = (algorithm: string): void => {
        this.algorithm = algorithm;
    }

    public makeNumbers = (): string[] => {
        let numbers: string[];
    
        const context: Context = this.algorithm in strategies
            ? strategies[this.algorithm]
            : strategies[DEFAULT_STRATEGY];
    
        numbers = context.executeStrategy(this.quantity);
    
        return numbers;
    }

}