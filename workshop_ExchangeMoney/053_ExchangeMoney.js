let price; //ราคาสินค้า
let money; //เงินที่จ่าย

function ChangeCalculation(price, money) {
    //สร้าง Obj เเบงค์ต่างๆ
    const banknote = {
        banknote500: 500,
        banknote100: 100,
        banknote50: 50,
        banknote20: 20,
        coins10: 10,
        coins5: 5,
        coins2: 2,
        coins1: 1,
    };

    //สร้าง Obj เพื่อเก็บค่าเเบงค์ที่ทอน
    let bankchange = {
        Bank_500: 0,
        Bank_100: 0,
        Bank_50: 0,
        Bank_20: 0,
        Coin_10: 0,
        Coin_5: 0,
        Coin_2: 0,
        Coin_1: 0,
    };

    moneyChange = money - price; //เงินทอน = เงินที่จ่าย - ราคาสินค้า
    if (money < price) {
        return "Error, you don't have enough money."; //ดักไว้เผื่อเงินที่จ่ายน้อยกว่าราคาสินค้า
    }
    if (moneyChange >= banknote['banknote500']) { //ถ้าเงินทอน มากกว่าเเบงค์ 500
        bankchange['Bank_500'] = Math.floor(moneyChange / banknote['banknote500']); //เอาเงินทอนไปหารเเบงค์ 500 เเล้วปัดเศษลง
        moneyChange = moneyChange % banknote['banknote500']; //อัปเดทค่าเงินทอนใหม่โดย เงินทอนใหม่ = เงินทอนเดิม mod เเบงค์ 500
    }
    if (moneyChange >= banknote['banknote100']) {
        bankchange['Bank_100'] = Math.floor(moneyChange / banknote['banknote100']);
        moneyChange = moneyChange % banknote['banknote100'];
    }
    if (moneyChange >= banknote['banknote50']) {
        bankchange['Bank_50'] = Math.floor(moneyChange / banknote['banknote50']);
        moneyChange = moneyChange % banknote['banknote50'];
    }
    if (moneyChange >= banknote['banknote20']) {
        bankchange['Bank_20'] = Math.floor(moneyChange / banknote['banknote20']);
        moneyChange = moneyChange % banknote['banknote20'];
    }
    if (moneyChange >= banknote['coins10']) {
        bankchange['Coin_10'] = Math.floor(moneyChange / banknote['coins10']);
        moneyChange = moneyChange % banknote['coins10'];
    }
    if (moneyChange >= banknote['coins5']) {
        bankchange['Coin_5'] = Math.floor(moneyChange / banknote['coins5']);
        moneyChange = moneyChange % banknote['coins5'];
    }
    if (moneyChange >= banknote['coins2']) {
        bankchange['Coin_2'] = Math.floor(moneyChange / banknote['coins2']);
        moneyChange = moneyChange % banknote['coins2'];
    }
    if (moneyChange >= banknote['coins1']) {
        bankchange['Coin_1'] = Math.floor(moneyChange / banknote['coins1']);
        moneyChange = moneyChange % banknote['coins1'];
    }

    return bankchange;
    
    //ฟอร์แมทให้ out put ออกมาสวยงาม ** เเต่ถ้าใช้ back thick จะ return ออกมาเป็น String **
    // return `Price : ${price} | Money : ${money}
    // Banknote 500 : ${bankchange.Bank_500}
    // Banknote 100 : ${bankchange.Bank_100}
    // Banknote 50 : ${bankchange.Bank_50}
    // Banknote 20 : ${bankchange.Bank_20}
    // Coin 10 : ${bankchange.Coin_10}
    // Coin 5 : ${bankchange.Coin_5}
    // Coin 2 : ${bankchange.Coin_2}
    // Coin 1 : ${bankchange.Coin_1}`;
}

//console.log(ChangeCalculation(product price, money you pay));
console.log(ChangeCalculation(4000, 5000));
console.log(ChangeCalculation(2000, 3280));
console.log(ChangeCalculation(2222, 3323));
console.log(ChangeCalculation(2000, 200));
console.log(ChangeCalculation(37846, 60000));