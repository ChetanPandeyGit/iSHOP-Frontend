import React, { useState } from "react";
import SweetPagination from "sweetpagination";

function Items() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
   
  return (
    <div>
      {currentPageData.map((item) => (
        <div>
          <h3>Item #{item}</h3>
        </div>
      ))}

      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={10}
        getData={items}
        navigation={true}
      />
    </div>
  );
}