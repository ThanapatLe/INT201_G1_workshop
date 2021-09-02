//function สำหรับคำนวณเงินทอน
function Exchange(price,pay){ //price เป็นราคาสินค้า pay เป็นเงินที่เราจ่าย
    //obj เก็บเงินทอน 
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
//เปรียบเทียบระหว่างเงินที่จ่ายกับราคาสินค้า
    if(pay >= price){
        let change =  pay - price; //ใช้ change เก็บเงินทอย
//ถ้าเงินทอนมากกว่า 0 ให้เข้าลูป
        while(change>0){    //ลูป
            if(change>=500){                        //ถ้าเงินทอนมากกว่าหรือเท่ากับ500
                MoneyChange.Five_hundred += 1;      //อัปเดตค่าใน obj โดย Five_hundred เพิ่มขึ้น 1
                change -= 500;                      //อัปเดตค่าใน change โดยเอา change - 500
            }
            else if(change>=100){                   //ถ้าเงินทอนมากกว่าหรือเท่ากับ100
                MoneyChange.One_hundred +=1;        //อัปเดตค่าใน obj โดย One_hundred เพิ่มขึ้น 1
                change -= 100;                      //อัปเดตค่าใน change โดยเอา change - 100
            }
            else if(change>=50){                    //ถ้าเงินทอนมากกว่าหรือเท่ากับ50
                MoneyChange.Fifty +=1;              //อัปเดตค่าใน obj โดย Fifty เพิ่มขึ้น 1
                change -= 50;                       //อัปเดตค่าใน change โดยเอา change - 50
            }
            else if(change>=20){                    //ถ้าเงินทอนมากกว่าหรือเท่ากับ20
                MoneyChange.Twenty +=1;             //อัปเดตค่าใน obj โดย Twenty เพิ่มขึ้น 1
                change -= 20;                       //อัปเดตค่าใน change โดยเอา change - 20
            }
            else if(change>=10){                    //ถ้าเงินทอนมากกว่าหรือเท่ากับ10
                MoneyChange.Ten +=1;                //อัปเดตค่าใน obj โดย Ten เพิ่มขึ้น 1
                change -= 10;                       //อัปเดตค่าใน change โดยเอา change - 10
            }
            else if(change>=5){                     //ถ้าเงินทอนมากกว่าหรือเท่ากับ5
                MoneyChange.Five +=1;               //อัปเดตค่าใน obj โดย Five เพิ่มขึ้น 1
                change -= 5;                        //อัปเดตค่าใน change โดยเอา change - 5
            }
            else if(change>=2){                     //ถ้าเงินทอนมากกว่าหรือเท่ากับ2
                MoneyChange.Two +=1;                //อัปเดตค่าใน obj โดย Two เพิ่มขึ้น 1
                change -= 2;                        //อัปเดตค่าใน change โดยเอา change - 2
            } 
            else if(change>=1){                     //ถ้าเงินทอนมากกว่าหรือเท่ากับ1
                MoneyChange.One +=1;                //อัปเดตค่าใน obj โดย One เพิ่มขึ้น 1
                change -= 1;                        //อัปเดตค่าใน change โดยเอา change - 1
            }
        }
        return MoneyChange;                         //คืนค่า obj
    }
    return `error`;                                 //กรณีที่ราคาสินค้ามากกว่าราคาจ่ายให้แสดงคำว่า error

    
}

console.log(Exchange(4300,5700));
console.log(Exchange(2001,4260));
console.log(Exchange(2222,3333));
console.log(Exchange(2000,200));
