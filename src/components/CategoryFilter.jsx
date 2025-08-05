function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="mb-3 d-flex flex-wrap gap-2">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          className={`btn btn-sm ${selected === cat ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;