import { MAX_QUANTITY } from "./constants";
import { NumbersMaker } from "./NumbersMaker";

const config = require("./config/config.json");

const quantity: number = config.quantity > MAX_QUANTITY
    ? MAX_QUANTITY
    : config.quantity;

const algorithm: string = config.algorithm;

const maker: NumbersMaker = new NumbersMaker(quantity, algorithm);

console.log(maker.makeNumbers());

