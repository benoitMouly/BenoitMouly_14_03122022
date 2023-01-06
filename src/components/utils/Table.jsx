import React from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


const Table = () =>  {

    const infos  = useSelector((state) => state.user.userFormReduce)
    console.log(infos)
    // console.log(infos[0].userInfo.payload)

    // useEffect(() => {
    //     getMuiTheme()
    // }, [])


//  function getMuiTheme() {
    // createTheme({
    //   overrides: {
    //     MUIDataTableBodyCell: {
    //       root: {
    //         backgroundColor: "#FF0000",
    //       },
    //     },
    //     MUIDataTablePagination: {
    //       root: {
    //         backgroundColor: "#000",
    //         color: "#fff",
    //       },
    //     },
    //   },
    // });
// }


//   render() {
    const columns = ["First Name", "Last Name", "Start Date", "Department", "Date of Birth", "Street", "City", "State", "Zip Code"];

    const data = [
    //   ["Joe James", "Test Corp", "Yonkers", "NY"],
    //   ["John Walsh", "Test Corp", "Hartford", "CT"],
    //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
    //   ["James Houston", "Test Corp", "Dallas", "TX"],
    ];


for(let i = 0; i < infos.length; i++){
    // Object.keys(infos[i].userInfo.pay)
    data.push(Object.values(infos[i].userInfo.payload))
}
    const options = {
        filter: false,
        download: false,
        print: false,
        filterType: 'textField',
        selectableRows: false,
        viewColumns: false
    //   filterType: "checkbox",
    //   rowsPerPage: 9,
    //   rowsPerPageOptions: [10, 20, 30],
    //   jumpToPage: true,
    //   textLabels: {
    //     pagination: {
    //       next: "Next >",
    //       previous: "< Previous",
    //       rowsPerPage: "Total items Per Page",
    //       displayRows: "OF",
    //     },
    //   },
    //   onChangePage(currentPage) {
    //     console.log({ currentPage });
    //   },
    //   onChangeRowsPerPage(numberOfRows) {
    //     console.log({ numberOfRows });
    //   },
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
  }
// }
export default Table;