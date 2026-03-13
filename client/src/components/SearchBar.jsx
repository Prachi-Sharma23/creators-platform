import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <label htmlFor="search">Search</label>

      <input
        id="search"
        type="text"
        value={query}
        placeholder="Type to search..."
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && <p>You searched for: {query}</p>}
    </div>
  );
};

export default SearchBar;
