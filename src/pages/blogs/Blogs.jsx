import { useEffect, useMemo, useState } from "react";
import postsData from "../../data/posts.json";
import BlogFilters from "./BlogFilters/BlogFilters";
import BlogHero from "./Bloghero/BlogHero";
import BlogCard from "./BlogCard/BlogCard";
import { FiGrid, FiMenu } from "react-icons/fi";
import Pagination from "./Pagination/Pagination";

export default function Blogs() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const filteredPosts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return postsData.posts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;

      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt?.toLowerCase().includes(search) ||
        post.author?.name?.toLowerCase().includes(search) ||
        post.category?.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  return (
    <>
      {" "}
      <BlogHero />
      <BlogFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={postsData.categories}
      />
      <main className="min-h-screen bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
            </p>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض شبكي"
                >
                  <FiGrid className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض قائمة"
                >
                  <FiMenu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "flex flex-col gap-6"
                }
              >
                {currentPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                    viewMode={viewMode}
                  />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-neutral-400">
                لا توجد مقالات تطابق بحثك.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
