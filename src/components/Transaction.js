import Item from "./Item";
import './Transaction.css'




const Transacntion = (props) => {
    const {item} = props


    return(
        <div>
          <ul className="item-list">
          
          {item.map((element)=>{
            return <Item {...element} key = {element.id}/>
          })}
          {/* old code upper in item === title={element.title} amount={element.amount} */}
          {/* maping */}
        </ul>
        </div> // หรือจะใช้ตัวแปร {name} {<DataContext.Consumer>  {value=><p>{value}</p>} </DataContext.Consumer>}ก็ได้เพราะทำการเก็บค่าไว้แล้ว
        //DataCotnext.consumer เป็นการเรียกใช้งานตัวของ Datacontext จาก Providerมาใช้งาน จากข้อมูลกลาง Component จะเรียกใช้ก็ใช้Consumer ในการ call
    );
  } 

  export default Transacntion