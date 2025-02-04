const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Function to check if the number i will input in the query is a prime number or not
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Function to check if the number i will input in the query is a Armstrong number or not
const isArmstrong = (num) => {
    const digits = num.toString().split("");
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(Number(d), power), 0);
    return sum === num;
};

// Function to check if the number i will input in the query is a perfect number or not
const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) 
          sum += i;
    }
    return sum === num;
};

//sum of digits
function digit_sum(n) {
    const digits = String(Math.abs(n))
    if (n < 0) {
        const ans = digits
        .split("")
        .reduce((acc, digits) => acc + Number(digits), 0)
        return ans * -1    
}
    return digits
    .split("")
    .reduce((acc, digits) => acc + Number(digits), 0)}

// So this is the endpoint i will input in the url if i want to classify the number
app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query; // collect the number from the url

    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);

    const properties = [];
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    let funFact = "";
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math`);
        funFact = response.data;
    } catch (error) {
        funFact = "Fun fact unavailable.";
    }

    res.status(200).json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: digit_sum(num),
        fun_fact: funFact,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});