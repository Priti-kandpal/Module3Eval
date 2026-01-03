import { useEffect, useState } from "react";
import { getData } from "../storage";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

const CustomerDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);

  return (
    <>
      <Navbar setData={setData} />
      {data.map((item) => (
        <RestaurantCard key={item.restaurantID} data={item} />
      ))}
    </>
  );
};

export default CustomerDashboard;