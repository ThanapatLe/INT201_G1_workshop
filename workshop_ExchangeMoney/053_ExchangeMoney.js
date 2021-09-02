function Exchange(price,pay){
    let MoneyChange = {
        Five_hundred:0,
        One_hundred:0,
        Fifty:0,
        Twenty:0,
        Ten:0,
        Five:0,
        Two:0,
        One:0
    }

    if(pay >= price){
        let chage = pay - price;

        while(chage>0){
            if(chage>=500){
                MoneyChange.Five_hundred = MoneyChange.Five_hundred+1;
                chage = chage - 500;
            }
            else if(chage>=100){
                MoneyChange.One_hundred = MoneyChange.One_hundred+1;
                chage = chage - 100;
            }
            else if(chage>=50){
                MoneyChange.Fifty=MoneyChange.Fifty+1;
                chage = chage - 50;
            }
            else if(chage>=20){
                MoneyChange.Twenty=MoneyChange.Twenty+1;
                chage = chage - 20;
            }
            else if(chage>=10){
                MoneyChange.Ten=MoneyChange.Ten+1;
                chage = chage - 10;
            }
            else if(chage>=5){
                MoneyChange.Five=MoneyChange.Five+1;
                chage = chage - 5;
            }
            else if(chage>=2){
                MoneyChange.Two=MoneyChange.Two+1;
                chage = chage - 2;
            } 
            else if(chage>=1){
                MoneyChange.One=MoneyChange.One+1;
                chage = chage - 1;
            }
        }
        return MoneyChange;
    }
    return `error`;

    
}

console.log(Exchange(4000,5000));
console.log(Exchange(2000,3280));
console.log(Exchange(2222,3323));
console.log(Exchange(2000,200));