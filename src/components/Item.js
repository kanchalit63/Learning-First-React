import './Transaction.css'
import PropTypes from 'prop-types';

const Item = (props) => {
  
    const {title , amount } = props
    const symbol = amount <0 ? "-":"+"
    
    const status = amount <0 ? "expense":"income" // เป็นการตรวจสอบเงื่อนไข โดย หาก amount นั้น น้อยกว่า 0 จะเป็นรายจ่าย หากเป็นเท็จ จะเป็นรายรับ โดยใช้ ?
    
    return(
      <li className={status}>{title}  <span>{symbol}{Math.abs(amount)}</span>
      
      </li> //เราจะใช้ classname เป็นตัวกำหนดค่า โดยดึงจากตัวแปร status เข้ามาใช้งานใน classname ตรวจสอบได้ใน element จาก F12 ใน Chorme
      
    );
}

Item.propTypes={
  title : PropTypes.string.isRequired,
  amount : PropTypes.number.isRequired
} 
// กำหนดค่า Proptype เพื่อให้เช็คค่าข้อมูลว่าตรงคามไหม ถ้าไม่จะแสดง Error ออก


export default Item