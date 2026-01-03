import { useEffect,useState } from "react";
import {getData , saveData} from "../storage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";
const AdminDashboard=()=>{
    const [data, setData]= useState(getData());

    const [form, setForm]=useState({
    
//   "restaurantID": "",
  "restaurantName": "",
  "address": "",
  "type": "",
  "parkingLot": "",
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
 })
 useEffect(()=>{
 setData(getData());
}, []);
const handleAdd=()=>{
    if(!form.restaurantName ||!form.address){
        alert("fill all fields");
        return;
    }
    const newData={
        ...form,
        restaurantID:Date.now(),
        parkingLot:form.parkingLot==="true",
    };
    const updated=[...data, newData];
    saveData(updated);
    setData(updated);
    alert("Restaurant added");
    setForm({...form, restaurantName: "", address:""});
};
return(
    <>
    <Navbar setData={setData}/>
    <div style={{display:"flex"}}>
        <div>
            <h3>Add Restaurant</h3>
            <input placeholder="Name"  
            value={form.restaurantName}
            onChange={(e)=>
                setForm({...form, restaurantName:e.target.value})
            }/>
            <input placeholder="Address" 
            value={form.address}
            onChange={(e)=>
                setForm({...form, address:e.target.value})
            }/>
            <select onChange={(e)=>
                setForm({...form, type:
                    e.target.value})}>
                        <option> Select Type </option>
                        <option>Rajasthani </option>
                        <option> Gujarati</option>
                        <option> Mughlai</option>
                        <option> Jain</option>
                        <option> Thai</option>
                        <option> North Indian</option>
                        <option> South Indian</option>
                    </select>
                    <select onChange={(e)=>
                        setForm({...form, parkingLot: e.target.value})
                    }>
                        <option>Select parking</option>
                       <option value="true">Yes</option>
                       <option value="false">No</option>
                    </select>
                   <button onClick={handleAdd}>Add</button>
        </div>
        <div>
            {data.map((item)=>(
                <RestaurantCard
                key={item.restaurantID} data={item} admin />
            ))}
        </div>
    </div>
    </>
);
};
export default AdminDashboard;