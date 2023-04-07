import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import states from "./../../data/StateInfos.js";

/**
 * Custom select by MUI Element
 * @component react
 * @param {Object} props props, function returning value to the parent elt 
 * @returns {JsxElement} 
 */

export default function BasicSelect(props) {
  const [departmentState, setDepartmentState] = React.useState("");

  const { getSelect } = props;

  let menuItem = [];
  let objectItem = [];

  if (props.className === "department") {
    menuItem.push(
      "Sales",
      "Marketing",
      "Enginnering",
      "Human ressources",
      "Legal"
    );
  } else {
    states.map((state) => objectItem.push({ state }));
  }
  const handleChange = (event) => {
    event.preventDefault();
    setDepartmentState(event.target.value);
    getSelect(event.target.value);
  };

  let listToDisplay;

  if (props.className === "department") {
    listToDisplay = menuItem.map((elt) => (
      <MenuItem key={elt} value={elt}>
        {elt}
      </MenuItem>
    ));
  } else {
    listToDisplay = objectItem.map((elt) => (
      <MenuItem key={elt.state.abbreviation} value={elt.state.abbreviation}>
        {elt.state.name}
      </MenuItem>
    ));
  }

  return (
    <Box className={props.className} sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.className}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={departmentState}
          label={props.className}
          onChange={handleChange}
        >
          {listToDisplay}
        </Select>
      </FormControl>
    </Box>
  );
}
