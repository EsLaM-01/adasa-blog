import { FaStar, FaClock } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

import postsData from "../../data/posts.json";
import { NavLink } from "react-router-dom";
export default function FeaturedArticles() {
  const featuredPosts = postsData.posts
    .filter((post) => post.featured)
    .slice(0, 5);
  return (
    <>
      {featuredPosts.map((post) => (
        <article
          key={post.id}
          className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
        >
          <NavLink className="block" to={`/blogs/${post.slug}`}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-72 md:h-[400px] overflow-hidden">
                <img
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={post.image}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                    <FaStar className="w-3.5 h-3.5" />
                    مميز
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                    {post.category}
                  </span>

                  <span className="flex items-center gap-1 text-sm text-neutral-500">
                    <FaClock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>

                <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                        src={post.author.avatar}
                      />

                      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        {post.author.name}
                      </p>

                      <p className="text-xs text-neutral-500">
                        {new Date(post.date).toLocaleDateString("ar-EG", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    اقرأ المقال
                    <FiArrowLeft className="w-5 h-5 rotate-360" />
                  </span>
                </div>
              </div>
            </div>
          </NavLink>
        </article>
      ))}
    </>
  );
}
