
//input ให้ pound & inch มีจำนวนข้อมูลเท่ากัน
let pound = [36.5, 35.5, 34.5, 33.5];
let inch = [39, 38, 37, 36];

//ค่าคงที่สำหรับไปแปลงเป็น Kg , M
const convertKg = 0.453592;
const convertM = 0.0254;

//เก็บค่าเว้นบรรทัด
let newLine = "\r\n";

function bmi(pound, inch) {
    let kilogram;
    let meter;
    let bmi = [];

    for (let i = 0; i < pound.length; i++) {
        let pound2 = pound[i];
        let inch2 = inch[i];

        kilogram = pound2 * convertKg;
        meter = inch2 * convertM;

        bmi[i] = kilogram / (meter * meter);
    } return bmi;

}

//ดูข้อมูลทั้งหมด
for (let j = 0; j < pound.length; j++) {
    console.log('คนที่ : ' + [j + 1] + ' | Pound : ' + pound[j] + ' | Inch : ' + inch[j]);
    console.log('BMI is : ' + bmi(pound, inch)[j]);
    console.log(newLine);
}

//ดูข้อมูลบางข้อมูล
let k = 1; //ตำแหน่งคนที่เราต้องการหาข้อมูล
if (k <= pound.length) {
    console.log('คนที่ : ' + [k] + ' | Pound : ' + pound[k - 1] + ' | Inch : ' + inch[k - 1] + ' -> [ Search ]');
    console.log('BMI is : ' + bmi(pound, inch)[k - 1]);
} else {
    console.log('Error : มีข้อมูลอยู่ ' + pound.length + ' คน');
}

