import { MenuItem, TextField } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ setCategory, category, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            value={word}
            label="Busca"
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
          select
            className="select"
            label="Idioma"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
