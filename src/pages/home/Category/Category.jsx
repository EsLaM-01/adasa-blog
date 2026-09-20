import { NavLink } from "react-router-dom";
import { FaSun, FaUser, FaMountainSun, FaSliders } from "react-icons/fa6";
import { FiChevronLeft } from "react-icons/fi";
// import postsData from "";
import postsData from "../../../data/posts.json";
const categoryIcons = {
  إضاءة: FaSun,
  بورتريه: FaUser,
  "مناظر طبيعية": FaMountainSun,
  تقنيات: FaSliders,
  معدات: FaSun,
};
const gradients = [
  "from-orange-500 to-yellow-300",
  "from-orange-600 to-orange-400",
  "from-orange-500 to-yellow-500",
  "from-orange-500 to-orange-500",
  "from-orange-500 to-yellow-600",
];
// استخراج التصنيفات وحساب عدد المقالات تلقائيًا
const categories = [
  ...new Set(postsData.posts.map((post) => post.category)),
].map((category, index) => ({
  name: category,
  count: postsData.posts.filter((post) => post.category === category).length,
  href: `/blog?category=${encodeURIComponent(category)}`,
  icon: categoryIcons[category] || FaSun,
  gradient: gradients[index % gradients.length],
  delay: `${index * 100}ms`,
}));
export default function Category() {
  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label mb-4">
            <span className="relative flex h-2 w-2 ml-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            التصنيفات
          </span>
          <h2 className="section-title text-white">استكشف حسب الموضوع</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <NavLink
                key={category.name}
                to={category.href}
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: category.delay }}
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <Icon className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Category Name */}
                  <h3 className="font-bold text-lg text-white mb-1">
                    {category.name}
                  </h3>

                  {/* Article Count */}
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.count} {category.count === 1 ? "مقالة" : "مقالات"}
                  </p>

                  {/* Arrow */}
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <FiChevronLeft className="w-4 h-4 text-white rotate-180" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
