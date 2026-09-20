import { NavLink } from "react-router-dom";
import { FiClock, FiCalendar, FiArrowLeft } from "react-icons/fi";

export default function BlogCard({ post, index = 0, viewMode = "grid" }) {
  const formattedDate = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  /* =========================
     LIST VIEW
  ========================= */

  if (viewMode === "list") {
    return (
      <article
        className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <NavLink
          to={`/blogs/${post.slug}`}
          className="flex flex-col md:flex-row"
        >
          <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                {post.category}
              </span>

              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <FiClock className="w-4 h-4" />
                {post.readTime}
              </span>

              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <FiCalendar className="w-4 h-4" />
                {formattedDate}
              </span>
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h2>

            <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    {post.author.name}
                  </p>

                  <p className="text-xs text-neutral-500">{post.author.role}</p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                اقرأ المقال
                <FiArrowLeft className="w-5 h-5 rotate-180" />
              </span>
            </div>
          </div>
        </NavLink>
      </article>
    );
  }

  /* =========================
     GRID VIEW
  ========================= */

  return (
    <article
      className="group card overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <NavLink to={`/blogs/${post.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <FiClock className="w-4 h-4" />
              {post.readTime}
            </span>

            <span className="w-1 h-1 bg-neutral-600 rounded-full" />

            <span>{formattedDate}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
              />
              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <FiArrowLeft className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" />
            </div>
          </div>
        </div>
      </NavLink>
    </article>
  );
}
