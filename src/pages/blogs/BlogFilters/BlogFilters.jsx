import { FiSearch } from "react-icons/fi";

export default function BlogFilters({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  categories,
}) {
  return (
    <div className="sticky top-20 z-40 bg-[#0a0a0a] backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث في المقالات..."
              className="input-dark w-full px-5 py-3 pr-12"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
              }`}
            >
              جميع المقالات
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
