
function BMI (weight,height){  //เป็นฟังก์ชั่นรับค่า ส่วนสูง กับน้ำหนัก
    meter = height * height;    //เอาส่วนสูงไปยกกำลังสองเก็บในตัวแปร meter
    return  weight/meter;      //จากนั้นเอาน้ำหนักหารด้วยตัวแปร meter แล้วคืนค่าออก
}

var metha = BMI(45,160);      //เรียกใช้ฟังก์ชั่น
var irda = BMI(50,175);
var kan = BMI(45,175);

console.log(metha);           //แสดงค่า
console.log(irda);
console.log(kan);





//กัณฑ์พงษ์ ศรีสุธาภัทร์ 63130500004