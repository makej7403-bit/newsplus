// /components/ArticleCard.js
import useBookmarks from "../hooks/useBookmarks";

export default function ArticleCard({ article }) {
  const { saveBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const {
    title,
    description,
    image_url,
    link,
    source_id,
    pubDate,
  } = article;

  const saved = isBookmarked(link);

  return (
    <div className="border rounded-xl shadow-sm p-4 bg-white dark:bg-gray-800 hover:shadow-md transition">
      {/* Article Image */}
      {image_url && (
        <img
          src={image_url}
          alt="News"
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
      )}

      {/* Title */}
      <h2 className="text-lg font-semibold dark:text-white mb-2">{title}</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {description?.substring(0, 150)}...
      </p>

      <div className="flex items-center justify-between mt-3">

        {/* Visit Article */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Read More
        </a>

        {/* Bookmark Button */}
        {saved ? (
          <button
            onClick={() => removeBookmark(link)}
            className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Saved ✓
          </button>
        ) : (
          <button
            onClick={() => saveBookmark(article)}
            className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Save
          </button>
        )}

      </div>

      {/* Footer Info */}
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p><strong>Source:</strong> {source_id}</p>
        <p><strong>Date:</strong> {pubDate}</p>
      </div>
    </div>
  );
}
