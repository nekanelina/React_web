import React from "react";
import FilterItem from "./FilterItem";
import filterData from "../../models/filterData";

const Filters = ({title, category}) => {

  const data = filterData.filter(item => item.category === category);

  return (
    <div className="most-popular">
      
        <div className="most-popular-title">
          <h1>{title}</h1>
        </div>
        <div className="most-popular-container">
          {data.map((item) => {
            return <FilterItem {...item} key={item.id}/>;
          })}
        </div>
      
    </div>
  );
};

export default Filters;
