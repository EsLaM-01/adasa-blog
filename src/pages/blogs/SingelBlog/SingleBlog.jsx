import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";

import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiHome,
  FiImage,
  FiLink,
  FiList,
  FiMail,
  FiShare2,
  FiTag,
  FiCamera,
} from "react-icons/fi";

import { FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

import postsData from "../../../data/posts.json";

export default function SingleBlog() {
  const { slug } = useParams();

  const post = postsData.posts.find((item) => item.slug === slug);

  const formattedDate = post
    ? new Date(post.date).toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const sections = useMemo(() => {
    if (!post) return [];

    return post.content
      .split("\n\n")
      .map((block) => block.trim())
      .filter(Boolean);
  }, [post]);

  const articleSections = useMemo(() => {
    return sections
      .filter((block) => block.startsWith("## "))
      .map((block, index) => ({
        id: `section-${index}`,
        title: block.replace(/^##\s+/, ""),
      }));
  }, [sections]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];

    return postsData.posts
      .filter((item) => item.id !== post.id && item.category === post.category)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <main className="flex-grow bg-[#0a0a0a] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            المقال غير موجود
          </h1>

          <p className="text-neutral-400 mb-8">
            عذراً، لم نتمكن من العثور على المقال المطلوب.
          </p>

          <NavLink
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
          >
            العودة إلى المدونة
            <FiArrowLeft className="w-5 h-5 rotate-180" />
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow">
      <article className="bg-[#0a0a0a] min-h-screen">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-8 right-8 left-8">
            <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-sm border border-white/10">
              <NavLink
                to="/"
                className="text-white/70 hover:text-white transition-colors"
              >
                <FiHome className="w-4 h-4" />
              </NavLink>

              <FiArrowLeft className="w-3 h-3 text-white/30" />

              <NavLink
                to="/blogs"
                className="text-white/70 hover:text-white transition-colors"
              >
                المدونة
              </NavLink>

              <FiArrowLeft className="w-3 h-3 text-white/30" />

              <span className="text-orange-400 font-medium truncate max-w-[200px]">
                {post.category}
              </span>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <NavLink
                  to={`/blogs?category=${encodeURIComponent(post.category)}`}
                  className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors"
                >
                  {post.category}
                </NavLink>

                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    {formattedDate}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                />

                <div>
                  <p className="font-bold text-white">{post.author.name}</p>

                  <p className="text-sm text-white/60">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="order-2 lg:order-1">
              {/* Excerpt */}
              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20 mb-10">
                <p className="text-lg text-neutral-200 leading-relaxed italic">
                  "{post.excerpt}"
                </p>
              </div>

              {/* Dynamic Content */}
              <div className="prose-custom">
                {sections.map((block, index) => {
                  if (block.startsWith("## ")) {
                    const title = block.replace(/^##\s+/, "");
                    const sectionIndex = articleSections.findIndex(
                      (section) => section.title === title,
                    );

                    return (
                      <h2
                        key={block}
                        id={`section-${sectionIndex}`}
                        className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4 scroll-mt-24"
                      >
                        <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30">
                          <FiCamera className="text-orange-500" />
                        </span>

                        {title}
                      </h2>
                    );
                  }

                  return (
                    <p
                      key={`${block}-${index}`}
                      className="text-neutral-300 leading-relaxed mb-6 text-lg"
                    >
                      {block}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                    <FiTag className="text-orange-500" />
                  </div>

                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <FiShare2 className="text-orange-500" />
                    </div>

                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <FaXTwitter />
                    </button>

                    <button
                      type="button"
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </button>

                    <button
                      type="button"
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <FaWhatsapp />
                    </button>

                    <button
                      type="button"
                      className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <FiLink />
                    </button>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                  />

                  <div className="text-center sm:text-right flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>

                    <h3 className="text-xl font-bold text-white mt-1">
                      {post.author.name}
                    </h3>

                    <p className="text-neutral-500 text-sm mb-3">
                      {post.author.role}
                    </p>

                    <p className="text-neutral-400 text-sm leading-relaxed">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Table of Contents */}
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                      <FiList className="text-orange-500" />
                    </div>

                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>

                  <nav className="space-y-2">
                    {articleSections.map((section, index) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() =>
                          document.getElementById(section.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                        className="w-full flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group text-right"
                      >
                        <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors shrink-0">
                          {index + 1}
                        </span>

                        <span className="text-sm">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Article Info */}
                <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FiClock className="text-orange-500 text-xl mb-2 mx-auto" />

                      <p className="text-white font-bold">{post.readTime}</p>

                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>

                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <FiCalendar className="text-orange-500 text-xl mb-2 mx-auto" />

                      <p className="text-white font-bold text-sm">
                        {new Date(post.date).toLocaleDateString("ar-EG", {
                          day: "numeric",
                          month: "long",
                        })}
                      </p>

                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>

                {/* More Articles */}
                <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FiMail className="text-orange-500 text-xl" />
                    </div>

                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>

                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>

                    <NavLink
                      to="/blogs"
                      className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors text-center"
                    >
                      تصفح المزيد
                    </NavLink>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-[#262626]">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                    <FiImage className="text-orange-500 text-xl" />
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      مقالات قد تعجبك
                    </h2>

                    <p className="text-neutral-500 text-sm">
                      استكشف المزيد من المحتوى المميز
                    </p>
                  </div>
                </div>

                <NavLink
                  to="/blogs"
                  className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group"
                >
                  عرض الكل
                  <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </NavLink>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <NavLink
                    key={relatedPost.id}
                    to={`/blogs/${relatedPost.slug}`}
                    className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />

                      <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                        {relatedPost.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                        {relatedPost.title}
                      </h3>

                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <span className="flex items-center gap-2">
                          <img
                            alt={relatedPost.author.name}
                            className="w-6 h-6 rounded-full object-cover"
                            src={relatedPost.author.avatar}
                          />

                          {relatedPost.author.name}
                        </span>

                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
