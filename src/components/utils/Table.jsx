import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";

/**
 * Custom Table from MUI Element, used by redux to retrieve our store in a table
 * @component react
 * @returns {JsxElement} 
 */

const Table = () => {
  const infos = useSelector((state) => state.user.userFormReduce);

  const columns = [
    "First Name",
    "Last Name",
    "Start Date",
    "Department",
    "Date of Birth",
    "Street",
    "City",
    "State",
    "Zip Code",
  ];

  const data = [
  ];

  for (let i = 0; i < infos.length; i++) {
    data.push(Object.values(infos[i].userInfo.payload));
  }
  const options = {
    filter: false,
    download: false,
    print: false,
    filterType: "textField",
    selectableRows: false,
    viewColumns: false,
  };

  return (
    <div className="App wrapper">
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};
export default Table;
