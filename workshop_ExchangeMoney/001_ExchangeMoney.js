
//function สำหรับคำนวณเงินทอน
function Exchange(price,customer){
    //Obj เก็บชนิดของเงินเพื่อใช้ในการนับจำนวน
    let moneyType = {
    five_hundred:0,
    one_hundred:0,
    fifty:0,
    twenty:0,
    ten:0,
    five:0,
    two:0,
    one:0
}
//ถ้าเงินที่ลูกค้าจ่ายมามากกว่าราคาสินค้า ให้เข้า if
    if(customer>=price){
        change=customer-price;//เงินทอน = เงินที่ลูกค้าให้ - ราคาสินค้า
        //loop while ใช้นับจำนวนแบงค์ที่ต้องทอนให้ลูกค้า
        while(change>0){
            if(change>=500){//ถ้าเงินทอนมากกว่าหรือเท่ากับ 500 ให้ทำ if นี้แล้วกลับเข้า while ใหม่เพื่อเช็ค condition อีกครั้ง
                moneyType.five_hundred+=1;//เริ่มนับจำนวนแบงค์ที่ต้องทอน
                change-=500;//นำเงินทอนที่ต้องทอนมาลบด้วยราคาของแบงค์ที่เราถอนไป
            }
            else if(change>=100){
                moneyType.one_hundred+=1;
                change-=100;
            }
            else if(change>=50){
                moneyType.fifty+=1;
                change-=50;
            }
            else if(change>=20){
                moneyType.twenty+=1;
                change-=20;
            }
            else if(change>=10){
                moneyType.ten+=1;
                change-=10;
            }
            else if(change>=5){
                moneyType.five+=1;
                change-=5;
            }
            else if(change>=2){
                moneyType.two+=1;
                change-=2;
            }
            else if(change>=1){
                moneyType.one++;
                change-=1;
            }
        }
       return moneyType;//return Obj moneyType
    }
    return `ERROR`;//ถ้าเงินที่ลูกค้าใส่มาน้อยกว่าราคาสินค้าจะให้ return ERROR
}

console.log(Exchange(4000,5000));
console.log(Exchange(2000,3280));
console.log(Exchange(2222,3323));
console.log(Exchange(2000,200));



