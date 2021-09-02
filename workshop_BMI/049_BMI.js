    let Kilogram ; //ตัวแปร let Kilogram
    let Meter ; // ตัวแปร let Meter

function bmi(pound,inch){
    const convertPoundtoKg = 0.453592 ; //ตัวแปร const เนื่องจากไม่ต้องการให้แปลงค่าได้
    const convertInchtoM = 0.0254 ; 

    Kilogram = pound * convertPoundtoKg; // นำตัวแปร let ด้านบนมา set ค่า
    meter = inch * convertInchtoM; 
    BMI =  `BMI : ${(Kilogram / (meter**2)).toFixed(3)}  weight : ${Kilogram.toFixed(0)} height : ${meter.toFixed(2)}` ; // สามารถใช้ Math.pow(meter,2) แทน (meter**2)ได้ 
    // ใช้  backtick  key เนื่องจากต้องการใช้ string ได้โดยที่ไม่ต้องใช้ "" or  '' สามารถพิมพ์ String ได้ทันที ส่วน javascript expression ต้องใส่ไว้ใน ${}
    return  BMI ;
} 
 console.log(bmi(36.5,39));
 console.log(bmi(125,66.9));
 console.log(bmi(125,66.9));

