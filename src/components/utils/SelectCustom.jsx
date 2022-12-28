import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
    console.log(props.className)
  const [age, setAge] = React.useState('');

  let menuItem = [];
  if(props.className === 'department'){
    menuItem.push('Sales', 'Marketing', 'Enginnering', 'Human ressources', 'Legal')
  } else{
    menuItem.push('Alabama', 'Alaska')
  }
  const handleChange = (event) => {
    // console.log(menuItem)
    setAge(event.target.value);

  };

  const clicked = (event) => {
    console.log(props.className)
    console.log(menuItem);
  }

  const listItems = menuItem.map((number) => 
  <MenuItem value={number}>{number}</MenuItem>
    )

  return (
    <Box sx={{ minWidth: 120 }} onClick={clicked}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" >Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange} >
            {listItems}

        </Select>
      </FormControl>
    </Box>
  );
}