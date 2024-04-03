import React from 'react'
import { useState,useEffect,useRef } from "react";
import axios from "axios";
// import { useReactToPrint } from "react-to-print";
// import { Link} from 'react-router-dom';
import "./adminpage.css";



const ViewList = () => {
    const[data,setData] = useState([]);
    const[content,setContent]= useState(
        {id:"", employeename:"",projectname: "",shifttimings: "",holidaydate:"",description:"",managername:"",status:""});

   
    const conponentPDF= useRef();   

    useEffect(()=>{
        fetchData();
    },[])
   
    const fetchData = async()=>{
        try{
            const result = await axios("http://34.100.197.128:8082/users");
            setData(result.data);
        } catch (err) {
            console.log("something Wrong");
        }
    }
   
    let name,values;
    const handleInputs = (e) => {
        
        name = e.target.name;
        values= e.target.value;

        setContent({...content,[name]:values});
    }    
    
    // const generatePDF= useReactToPrint({
    //     content: ()=>conponentPDF.current,
    //     documentTitle:"EmployeeData",
       
    // });
   
  return (
    <div className='adminpage2' ref={conponentPDF} style={{width:'100%'}}>
        <h1>Employee Requests</h1>
        <hr/>         
        <div className="btn-1">
        <div className='sort'>
       {/* <button className='button2'> <Link to="/filter">FILTER</Link></button> */}
      </div>
      
        {/* <button className="btn2" onClick={generatePDF}>PDF</button> */}
        </div>
        
        <div className="adminpage2-content" >
            <table className='adminpage2-table'>
                <thead >
                    <tr>
			        <th className='heading2' name="employeename">EMPLOYEE NAME </th>
			        <th className='heading2' name="projectname">PROJECT NAME </th>
			        <th className='heading2' name="shifttimings">SHIFT TIMINGS </th>
			        <th className='heading2' name="holidaydate">HOLIDAY DATE </th>
			        <th className='heading2' name="description">DESCRIPTION </th>
			        <th className='heading2' name="managername">MANAGER NAME </th>
                    <th className='heading2' name="workingdays">WORKING DAYS </th>
                    <th className='heading2' name="status">STATUS </th>
                    </tr>
                </thead >
                <tbody>
                    {data.map((user,id) => {
                        let date= new Date(user['holidaydate']);
                        return (
                            <tr key={id}>
                                <td className='data' name="employeename" value={content.employeename} onChange={handleInputs}>{user.employeename}</td>
                                <td className='data' name="projectname" value={content.projectname} onChange={handleInputs}>{user.projectname}</td>
                                <td className='data' name="shifttimings"  value={content.shifttimings} onChange={handleInputs}>{user.shifttimings}</td>
                                <td className='data' name="holidaydate"  value={content.holidaydate} onChange={handleInputs}>{date.toLocaleDateString()}{/* {user.holidaydate} */}</td>
                                <td className='data' name="description"  value={content.description} onChange={handleInputs}>{user.description}</td>
                                <td className='data' name="managername"  value={content.managername} onChange={handleInputs}>{user.managername}</td>
                                <td className='data' >1</td>
                                <td >
                                 
                                    <select  className='data'  name="status" value={user.status} disabled={user.status==="Approved"}  onChange={handleInputs}>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                     </select></td>
                                
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            
          
        </div>

    </div>
  )
}

export default ViewList
