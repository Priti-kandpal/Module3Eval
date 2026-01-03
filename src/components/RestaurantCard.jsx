import { useNavigate } from "react-router-dom";
import { getData, saveData } from "../storage";
const RestaurantCard=({data, admin})=>{
    const handleDelete=()=>{
        if(confirm("are you sure you want to delte?")){
            const updated=getData().filter(
                (item)=>item.restaurantId !==data.restaurantId
            );
            saveData(updated);
            alert("Deleted Sucessfully");
            window.location.reload();
        }
    };
    return(
        <div>
            <img src="data.image" width="200" />
            <h3>{data.restaurantName}</h3>
            <p>{date.type}</p>
            <p>Parking:{data.parkingLot ? "Yes":"No"}</p>

            {admin && (<>
            <button onClick={()=>
                Navigate(`/admin/restaurants/update/${data.restaurantId}`)
            }>
                update</button>
                <button onClick={handleDelete}>Delete</button></>)}
        </div>
    );
};
export default RestaurantCard;