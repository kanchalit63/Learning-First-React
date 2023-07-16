import Transacntion from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useState, useEffect } from 'react'
import './data/Datacontext'
import DataContext from "./data/Datacontext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router,  Route, Link , Routes } from "react-router-dom";


function App() {


  const design = { color: 'red', textAlign: "center", fontSize: '1.5rem' }
  // const initState = [
  //   { id: 1, title: "เงินเดือน", amount: 20000 },
  //   { id: 2, title: "ค่าน้ำมัน", amount: -500 },
  //   { id: 3, title: "ค่าเช่าบ้าน", amount: -2000 },

  // ] //สามารถเรียกใช้ข้อมูลเดิมไปโชว์ได้
  const [items, setItems] = useState([]) // หากใช้ ค่าใน useState เป็น 
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewitem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem] // เป็นการ return จาก text box โดยใช้ state ค่าใหม่จะขึ้นบนสุดเสมอ
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element => element > 0).reduce((total, element) => total += element, 0)
    const expense = amounts.filter(element => element < 0).reduce((total, element) => total += element, 0) * -1
    setReportIncome(income)
    setReportExpense(expense)
  }, [items, reportIncome, reportExpense]) // เป็นการเช็คค่าใน Amount ว่ามีค่าว่างบ้างไหม



  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>โปรเเกรมคำนวณรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/" >ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to='/insert'>บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
            <Route path='/' element={<ReportComponent/>} exact ></Route>
            <Route path='/insert' element={<><FormComponent onAddItem={onAddNewitem}/> <Transacntion item={items}/> </>}></Route>
          </Routes>
          </div>
        </Router>




      </div>
    </DataContext.Provider>


  );
}


export default App;
