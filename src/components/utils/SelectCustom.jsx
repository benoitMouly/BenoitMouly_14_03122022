import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [department, setDepartment] = React.useState('');

  const {getSelect} = props


  let menuItem = [];
  if(props.className === 'department'){
    menuItem.push('Sales', 'Marketing', 'Enginnering', 'Human ressources', 'Legal')
  } else{
    menuItem.push('Alabama', 'Alaska')
  }
  const handleChange = (event) => {
    event.preventDefault()
    setDepartment(event.target.value);
    getSelect(event.target.value)

  };

  const clicked = (event) => {
    event.preventDefault()
  }

  const listItems = menuItem.map((elt) => 
  <MenuItem key={elt} value={elt}>{elt}</MenuItem>
    )


  return (
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >{props.className}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label={props.className}
          onChange={handleChange} >
            {listItems}

        </Select>
      </FormControl>
    </Box>
  );
}