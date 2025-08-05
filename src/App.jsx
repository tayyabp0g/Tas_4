import { useState } from "react";
import { posts } from "./data";
import BlogCard from "./components/BlogCard";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import SearchInput from "./components/SearchInput";
import './index.css'; // Make sure to import your CSS

const POSTS_PER_PAGE = 3;

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const categories = [...new Set(posts.map(p => p.category))];

  const filtered = posts.filter(post => {
    const matchCategory = category === "All" || post.category === category;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  function handleCategory(cat) {
    setCategory(cat);
    setPage(1);
  }
  function handleSearch(val) {
    setSearch(val);
    setPage(1);
  }

  return (
    <div className="bg-light min-vh-100">
      <Header />
      <main className="container">
        <SearchInput value={search} onChange={handleSearch} />
        <CategoryFilter categories={categories} selected={category} onSelect={handleCategory} />

        <div className="row g-4">
          {paginated.length ? paginated.map((post, idx) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
              <BlogCard post={post} delay={idx * 0.15} />
            </div>
          )) : (
            <div className="col-12 text-center text-muted">No posts found.</div>
          )}
        </div>

        <div className="d-flex justify-content-center align-items-center gap-2 mt-2 mb-4">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="btn btn-outline-primary btn-sm"
          >Prev</button>
          <span>{page} / {totalPages}</span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="btn btn-outline-primary btn-sm"
          >Next</button>
        </div>
      </main>
    </div>
  );
}

export default App;