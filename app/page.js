"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsdata.io/api/1/news?apikey=${process.env.NEWSDATA_API_KEY}&country=us&language=en`
        );

        setArticles(response.data.results || []);
      } catch (error) {
        console.log("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Top Headlines</h1>

      {articles.length === 0 && (
        <p className="text-gray-500">Loading news…</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg shadow bg-white">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              className="text-blue-500 underline mt-3 block"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
