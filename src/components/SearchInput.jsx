function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by title..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}
export default SearchInput;