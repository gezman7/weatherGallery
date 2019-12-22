import React from "react";

type searchBar = {
  onChange: Function;
};

const SearchBar: React.FC<searchBar> = props => {
  const { onChange } = props;
  return (
    <header>
      <input
        className="search-bar"
        type="search"
        placeholder=""
        onKeyPress={e => {
          handleKeyPress(e);
        }}
      />
    </header>
  );
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    const converted = ((e.target as unknown) as HTMLInputElement).value;
    if (e.key === "Enter") onChange(converted);
  }
};

export default SearchBar;
