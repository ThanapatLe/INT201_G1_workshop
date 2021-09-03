


function calculation(priceOfProduct, priceFromCustomer) {

    let bank = {
        priceOfBank: [500, 100, 50, 20, 10, 5, 2, 1],
        numOfBank: [0, 0, 0, 0, 0, 0, 0, 0]
    };

    let change = priceFromCustomer - priceOfProduct;
    
    while (change > 0) {
        for (let i = 0; i < bank.priceOfBank.length; i++) {
            if (change >= bank.priceOfBank[i]) {
                let num = Math.floor(change / bank.priceOfBank[i]);
                change -= num * bank.priceOfBank[i];
                //bank.bank500(numOfBank)
                bank.numOfBank[i] = num;

            }
        }
        return bank;
    }
}

function output(bank) {
    for (let i = 0; i < bank.priceOfBank.length; i++) {
        console.log(`value of bank/coin : ${bank.priceOfBank[i]}`)
        console.log(`num of bank/coin : ${bank.numOfBank[i]} \n`)
    }
}

console.log(calculation(500,1500));
console.log(calculation(2000,4873));
console.log(calculation(50,100));
output(calculation(500,1500));
output(calculation(2000,4873));
output(calculation(50,100));



