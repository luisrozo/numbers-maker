import { Context, FibonacciNumbers, RandomNumbers, SequentialNumbers } from "./strategy";

export const MAX_QUANTITY = 999999;

export const SEQUENTIAL_STRATEGY: string = 'sequentialNumbers';

export const FIBONACCI_STRATEGY: string = 'fibonacciNumbers';

export const DEFAULT_STRATEGY: string = 'default';

export const strategies = {
    [SEQUENTIAL_STRATEGY]: new Context(new SequentialNumbers()),
    [FIBONACCI_STRATEGY]: new Context(new FibonacciNumbers()),
    [DEFAULT_STRATEGY]: new Context(new RandomNumbers()),
};