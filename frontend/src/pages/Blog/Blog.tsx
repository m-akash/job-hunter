// @ts-nocheck
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Remote Work",
      description:
        "Exploring the trends and technologies shaping the future of remote work and how it impacts the job market.",
      author: "Jane Doe",
      date: "2024-07-20",
      imageUrl:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Crafting the Perfect Resume for Tech Jobs",
      description:
        "A comprehensive guide to creating a resume that stands out to recruiters in the competitive tech industry.",
      author: "John Smith",
      date: "2024-07-18",
      imageUrl:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Navigating Your Career Path in AI",
      description:
        "Tips and insights on building a successful career in the rapidly evolving field of Artificial Intelligence.",
      author: "AI Enthusiast",
      date: "2024-07-15",
      imageUrl:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Top 10 In-Demand Skills for 2024",
      description:
        "Discover the most sought-after skills by employers in 2024 and how you can acquire them.",
      author: "Career Advisor",
      date: "2024-07-12",
      imageUrl:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">From Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
