
//วิธีที่ 1
function mbi1(pound,inch){ //รับพารามิเตอร์ น้ำหนักเป็นปอนด์เข้ามา และ ส่วนสูงเป็นนิ้ว
   const toKg = 0.453592 //ประกาศตัวแปร toKg เพื่อเก็บค่าคงที่ 0.453592
   const toM = 0.0254 //ประกาศตัวแปร toM เพื่อเก็บค่าคงที่ 0.0254
   
    let weight = pound * toKg  //นำพารามิเตอร์น้ำหนักที่รับมา คูณตัวแปร toKg เพื่อให้ได้น้ำหนักหน่วยเป็นกิโลกรัม และเก็บในตัวแปรชื่อ weight
    let height = inch * toM //นำพารามิเตอร์ที่รับส่วนสูงมา คูณตัวแปร toM เพื่อให้ได้ส่วนสูงหน่วยเป็นเมตรและเก็บในตัวแปรชื่อ height
    return weight/(height*height) // นำตัวแปร weight มาหารด้วยตัวแปร height ที่คูณกับตัวเองเป็นการยกกำลังสองแล้วทำการส่งผลลัพธ์ออกไปนอกฟังก์ชัน
    
}

console.log(mbi1(36.5,39))
console.log(mbi2(30,35))
console.log(mbi2(50,40))

/*วิธีที่ 2
function mbi2(pound,inch){
    return pound * 0.453592/Math.pow((inch * 0.0254),2)
}

console.log(mbi2(36.5,39))//Georgia's 
console.log(mbi2(30,35))
console.log(mbi2(50,40))
*/
