import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';
import './item.css'


const FormComponent = (props) => {

    const [title,setTitle] = useState('')
    const [amount,setamount] = useState(0)
    const [formVaild,setFormvaild] = useState(false) // สร้าง state จะเก็บสถานะ การเก็บแบบฟอร์ม
    

    const InputTitle = (event) =>{
        setTitle(event.target.value) //ความหมายคือ ส่งข้อมูลมาเก็บใน state Title
        // console.log(event.target.value) //คำสั่ง event.target.value คือ คำสั่งตรวจสอบว่าเราพิมอะไรไปบ้างใน textbox
    }
    const Inputamount = (event) =>{
        setamount(event.target.value) //ความหมายคือ ส่งข้อมูลมาเก็บใน state Amount
        // console.log(event.target.value) //คำสั่ง event.target.value คือ คำสั่งตรวจสอบว่าเราพิมอะไรไปบ้างใน textbox
    }
    const Saveitem = (event) => {
        event.preventDefault();
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number (amount) // ใช้ Number ครอบไว้เพื่อเป็นการแปลงค่า Amount จากเดิมเป็น String กลายเป็น Nunber เราเซ็ตค่าไว้จากหน้า Item.js
        }
        props.onAddItem(itemData) // itemdata ก็คือ การส่งข้อมูลจากลูกไปหาแม่ โดยไปอ้างอิงจากหน้า App.js โดยใช้ props นำมาใช้งาน
        setTitle('') // Set ค่าเริ่มต้นให้กลายเป็นค่าเปล่าเมื่อ กด Submit แล้ว
        setamount(0) // Set ค่าเริ่มต้นให้กลายเป็นค่า 0 เมื่อเรากด Submit แล้ว
    } 

    useEffect (() => {
        const checkData = title.trim().length>0 && amount !== 0 // โดยตัวแปร CheckData จะเป็นตัวแปรที่ทำการเช็ค ตัวในช่องว่าของ title ว่ามากกว่า 0 ไหม และ เช็คค่าของ Amout ไม่เท่ากับ 0 ไหม 
        if(checkData){
            setFormvaild(true) // เป็นการใช้ เงื่อนไข เพื่อเช็คว่า Amount มีค่าไม่เท่ากับ 0 ไหม ถ้าไม่ ก็จะไปเปลี่ยนแปลงค่า setformvaild จาก false เป็น true
        }
        //หรือสามารถใช้ setFormvaild (checkData) ได้เหมือนกันเพราะ เป็นค่า Boolean
    },[title,amount]) // เป็นการตรวจสอบทุกๆครั้งเมื่อมีการอัพเดตหรือมีการ active ในหน้าเว็ปเพจ โดย ,[] จะใช้การตรวจจับ Array ที่เราต้องการตรวจจับ

    return (
        <div>
            <form onSubmit={Saveitem} >
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text"   placeholder="ระบุชื่อรายการของคุณ" onChange={InputTitle} value={title}/>  
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={Inputamount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className='btn' disabled={!formVaild} >เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}


export default FormComponent