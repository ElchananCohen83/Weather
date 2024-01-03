import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

export default function Search({ onDataReceivedSearch }) {
  const [word, setWord] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    onDataReceivedSearch(word)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  function isHebrew(text) {
    const hebrewRegex = /[\u0590-\u05FF]/;
    return hebrewRegex.test(text);
  }

  return (
    <div className="search-component">
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Please enter the city name"
          inputProps={{ 'aria-label': 'Please enter the city name' }}
          endAdornment={<React.Fragment />}
          onChange={(e) => {
            setWord(e.target.value);
            e.target.dir = isHebrew(e.target.value) ? "rtl" : "ltr";
          }}
          onKeyDown={handleKeyPress}
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>

      </Paper>
    </div>
  );
}
