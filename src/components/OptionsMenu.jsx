import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const OptionsMenu = ({ handleOptionClick }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  
  const englishLetters = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index)
  );

  const localStorageCity = JSON.parse(localStorage.getItem("citys")) || [];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ p: '10px' }}
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <style>
            {`
                ::-webkit-scrollbar {
                  width: 0 !important;
                }
              `}
          </style>


        {localStorageCity.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleOptionClick(option);
              handleClose();
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default OptionsMenu;
