function Search({ onSearch, searchTerm }) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        value={searchTerm}
        placeholder="Search here"
        id="search"
        onChange={onSearch}
        type="text"
      />
    </div>
  );
}
export default Search;
