import React, { Component, FC } from "react";
interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <input
      type="text"
      className="w-full rounded-full bg-transparent"
      placeholder="Search Twitter"
    />
  );
};

export default SearchBar;
