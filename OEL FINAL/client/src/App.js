import './App.css';
import React, {useEffect} from "react"
import Axios  from 'axios';

function App() {

  const [employeeName,setEmployeeName]= React.useState("");
  const [designation,setDesignation]=React.useState("");
  const [age,setAge]=React.useState(0);
  const [salary,setSalary]=React.useState(0);
  const [contact,setContact]=React.useState(0);
  const [employeeList,setEmployeeList]=React.useState([]);
  const [newEmployeeName,setNewEmployeeName]= React.useState("");
  
  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then(response =>{
      setEmployeeList(response.data);
    })
  })


  const addTolist=()=>{
    Axios.post('http://localhost:3001/insert',{employeeName:employeeName, designation:designation, age:age, salary:salary, contact:contact})
  }

  // const updateFood=(id)=>{
  //   Axios.put("http://localhost:3001/update",{id:id,newFoodName:newFoodName})
  // }

  // const deleteFood=(id)=>{
  //   Axios.delete(`http://localhost:3001/delete/${id}`)
  // }
  return (
      <div className='App'>
        <h1>Employee Management</h1>
        <label>Employee Name:</label>
        <input type="text" onChange={(event)=>{
          setEmployeeName(event.target.value);
        }} />
        <label>Designation:</label>
        <input type="text" onChange={(event)=>{
          setDesignation(event.target.value);
        }} />
        <label>Age</label>
        <input type="number" onChange={(event)=>{
          setAge(event.target.value);
        }}  />
        <label>Salary</label>
        <input type="number" onChange={(event)=>{
          setSalary(event.target.value);
        }}  />
        <label>Contact</label>
        <input type="number" onChange={(event)=>{
          setContact(event.target.value);
        }}  />
        <button onClick={addTolist}>Add to list</button>
        <hr/>
        {
          employeeList.map((val, key)=>{
            return <div key={key}> 
              <h1>{val.employeeName}</h1>
              <h1>{val.designation}</h1>
              <h1>{val.age}</h1>
              <h1>{val.salary}</h1>
              <h1>{val.contact}</h1>
              <input type="text" placeholder='new Employee..'  onChange={(event)=>{
          setNewEmployeeName(event.target.value);
        }} />
              {/* <button onClick={()=>updateFood(val._id)}>Update</button>
              <button onClick={()=>deleteFood(val._id)}>Delete</button> */}
            </div>
          })
        }
        </div>
    );
}

export default App;
