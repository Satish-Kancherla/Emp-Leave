import React from 'react'
import { useState,useEffect,useRef } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
import "./Emplist.css";



const Emplist = () => {
    const[data,setData] = useState([]);
    const[content,setContent]= useState(
        {id:"", employeename:"",projectname: "",shifttimings: "",leavetype:"",startdate:"",enddate:"",numberofdays:"",description:"",managername:"",status:""});

   
    const conponentPDF= useRef();   

    useEffect(()=>{
        fetchData();
    },[])
   
    const fetchData = async()=>{
        try{
            const result = await axios("http://34.100.197.128:8082/user");
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
    
   
   
  return (
    <div className='adminpage' ref={conponentPDF} style={{width:'100%'}}>
        <h1>Employees Requests </h1>
        <hr/>         
       
        
        <div className="adminpage-content" >
            <table className='adminpage-table'>
                <thead >
                    <tr>
			        <th className='heading' name="employeename">EMPLOYEE NAME </th>
			        <th className='heading' name="projectname">PROJECT NAME </th>
			        <th className='heading' name="shifttimings">SHIFT TIMINGS </th>
                    <th className='heading' name="leavetype">LEAVE TYPE</th>
			        <th className='heading' name="startdate">START DATE </th>
                    <th className='heading' name="enddate">END DATE </th>
                    <th className='heading' name="numberofdays">NUMBER OF DAYS </th>
			        <th className='heading' name="description">REASON </th>
			        <th className='heading' name="managername">MANAGER NAME </th>
                    <th className='heading' name="status">STATUS </th>
                    </tr>
                </thead >
                <tbody>
                    {data.map((user,id) => {
                        let date1= new Date(user['startdate']);
                        let date2= new Date(user['enddate']);
                        return (
                            <tr key={id}>
                                <td className='data' name="employeename" value={content.employeename} onChange={handleInputs}>{user.employeename}</td>
                                <td className='data' name="projectname" value={content.projectname} onChange={handleInputs}>{user.projectname}</td>
                                <td className='data' name="shifttimings"  value={content.shifttimings} onChange={handleInputs}>{user.shifttimings}</td>
                                <td className='data' name="leavetype"  value={content.leavetype} onChange={handleInputs}>{user.leavetype}</td>                                
                                <td className='data' name="startdate"  value={content.startdate} onChange={handleInputs}>{date1.toLocaleDateString()}</td>
                                <td className='data' name="enddate"  value={content.enddate} onChange={handleInputs}>{date2.toLocaleDateString()}</td>
                                <td className='data' name="numberofdays"  value={content.numberofdays} onChange={handleInputs}>{user.numberofdays}</td>
                                <td className='data' name="description"  value={content.description} onChange={handleInputs}>{user.description}</td>
                                <td className='data' name="managername"  value={content.managername} onChange={handleInputs}>{user.managername}</td>
                                <td className='data'  ><Link to={`/updatelist/${user.id}`}>
                                    <select  className='data'disabled  name="status" value={user.status}  onChange={handleInputs}>
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                     </select></Link></td>    
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

export default Emplist;
