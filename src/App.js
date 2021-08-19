import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const dictionarApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/earth"
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionarApi();
  }, []);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
