# Numbers Maker

TypeScript project to generate some numbers based on different algorithms. To execute it, run this command on root folder:

```
npm run start
```

To execute unit tests, run the following command:

```
npm test
```

## Configuration

You can choose the number of numbers to be generated and the algorithm which will generate them. There is a config file which decide this: `src/config/config.json`.

```
{
    "quantity": 10,
    "algorithm": "sequentialNumbers"
}
```

With this configuration, the program will generate 10 numbers in sequential order. Available algorithms are:

* **sequentialNumbers**
* **fibonacciNumbers**

If you enter a non-listed algorithm, then random numbers will be generated.