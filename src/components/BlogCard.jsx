function BlogCard({ post, delay = 0 }) {
  return (
    <div
      className="card h-100 shadow-sm blog-card"
      style={{ animationDelay: `${delay}s` }}
    >
      <img
        src={post.image}
        className="card-img-top"
        alt={post.title}
        onError={e => e.target.src = "https://via.placeholder.com/400x200?text=No+Image"}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text flex-grow-1">{post.description}</p>
        <div className="d-flex justify-content-between text-muted small">
          <span>{post.category}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
export default BlogCard;