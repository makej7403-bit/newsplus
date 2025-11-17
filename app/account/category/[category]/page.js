export default function CategoryPage({ params }) {
  const { category } = params;

  return (
    <main style={{ padding: "20px" }}>
      <h1>Category: {category}</h1>
      <p>Showing news articles for "{category}"</p>
    </main>
  );
}
