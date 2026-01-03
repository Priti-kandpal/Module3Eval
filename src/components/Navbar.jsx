import { useEffect, useRef } from "react";
import { getData } from "../storage";

const Navbar = ({ setData }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = getData().filter(
      (item) =>
        item.restaurantName.toLowerCase().includes(value) ||
        item.address.toLowerCase().includes(value)
    );
    setData(filtered);
  };

  return (
    <div>
      <input ref={searchRef} placeholder="Search" onChange={handleSearch} />
    </div>
  );
};

export default Navbar;