import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Card from "./Components/Card.jsx";

function App() {
  const [shows, setShows] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchShows = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`,
      );
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setShows([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <>
      <Navbar
        searchQuery={inputValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <div className="card-container">
        {loading && <h2>Loading...</h2>}

        {!loading && shows.length === 0 && <p>No shows found.</p>}

        {!loading &&
          shows.map((item) => {
            const show = item.show;
            return (
              <Card
                key={show.id}
                title={show.name}
                year={show.premiered ? show.premiered.slice(0, 4) : "N/A"}
                rating={show.rating?.average ?? "N/A"}
                image={show.image?.medium || show.image?.original || ""}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
