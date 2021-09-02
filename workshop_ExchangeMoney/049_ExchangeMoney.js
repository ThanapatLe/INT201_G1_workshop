// Array ที่เก็บค่าจำนวนของแต่ละแบงค์
let Exchange = {
        Bank500 : 0 , Bank100 : 0 , Bank50 : 0 ,Bank20 : 0 ,Coin10  : 0 , Coin5 : 0 ,Coin2 : 0 ,Coin1 : 0 
    } 
function Calculation(price , moneyOfCustomer){
    if(moneyOfCustomer >= price){ //ถ้าจำนวนเงินที่ลูกค้ามีมากกว่าราคา จะเขา function นี้
       let changeMoney = moneyOfCustomer - price; //จะได้ตัวแปลเงิยที่เหลือจากการนำ เงินลูกค้า - ราคาสินค้า
        while(changeMoney>0){ //เช็คเงื่อนไขว่าลูกค้าต้องมีเงิน
            if(changeMoney>=500){  //ถ้าหากเงินที่เหลือมีมากกว่า 500
                Exchange.Bank500 += 1; //เพิ่มจำนวนแบงค์ 500 1 ใบ
                changeMoney -=500; //ลบเงินที่เหลือออก 500
            }
            else if(changeMoney>=100){
                Exchange.Bank100 += 1;
                changeMoney -=100;
            }
            else if(changeMoney>=50){
                Exchange.Bank50 += 1;
                changeMoney -=50;
            }
            else if(changeMoney>=20){
                Exchange.Bank20 += 1;
                changeMoney -=20;
            }
            else if(changeMoney>=10){
                Exchange.Coin10 += 1;
                changeMoney -=10;
            }
            else if(changeMoney>=5){
                Exchange.Coin5 += 1;
                changeMoney -=5;
            }
            else if(changeMoney>=2){
                Exchange.Coin2 += 1;
                changeMoney -=2;
            }
            else if(changeMoney>=1){
                Exchange.Coin1 += 1;
                changeMoney -=1;
            }
        } return Exchange; //หลังจากออก loop ให้ return Array Exchange
    } return "your money is not enough"; //หากไมาเข้าเงื่อนไขแต่แรก แสดงว่าลูกค่ามีเงินจ่ายไม่พอ 
}



console.log(Calculation(5000,6000));
console.log(Calculation(500,613));
console.log(Calculation(229,1000)); 
