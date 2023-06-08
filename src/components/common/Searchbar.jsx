import React from "react";
import { IoSearch } from "react-icons/io5";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";

const Searchbar = () => {
  const [{ searchTerm }, dispatch] = useStateValue();

  const setSearchTerm = (value) => {
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      searchTerm: value,
    });
  };

  return (
      <div className="w-full gap-4 p-2 md:w-1/3 shadow-xl rounded-md flex items-center border">
        <IoSearch className="text-2xl text-textColor" />
        <input
          type="text"
          value={searchTerm}
          className="w-full h-full bg-transparent text-lg text-textColor  border-none outline-none "
          placeholder="Search here ...."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  );
};

export default Searchbar;