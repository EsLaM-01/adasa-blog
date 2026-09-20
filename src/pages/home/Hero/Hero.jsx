// import React from "react";
import { FaNewspaper, FaUsers, FaFolderOpen, FaPenNib } from "react-icons/fa";
import { FiArrowLeft, FiInfo } from "react-icons/fi";
import { NavLink } from "react-router-dom";
export default function Hero() {
  const stats = [
    {
      icon: FaNewspaper,
      value: "+50",
      label: "مقالة",
      delay: "0ms",
    },
    {
      icon: FaUsers,
      value: "+10ألف",
      label: "قارئ",
      delay: "100ms",
    },
    {
      icon: FaFolderOpen,
      value: "4",
      label: "تصنيفات",
      delay: "200ms",
    },
    {
      icon: FaPenNib,
      value: "6",
      label: "كاتب",
      delay: "300ms",
    },
  ];

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="blob absolute left-10 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div
          className="blob absolute bottom-20 right-10 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"
          style={{ animationDelay: "-2s" }}
        />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="section-label mb-8 inline-flex items-center gap-2 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>

              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في عدسة
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              اكتشف <span className="gradient-text">فن</span>
              <br />
              التصوير الفوتوغرافي
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-neutral-400 md:text-2xl">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
              <NavLink
                to="/blogs"
                className="btn-primary group inline-flex items-center justify-center gap-2"
              >
                <span>استكشف المقالات</span>

                <FiArrowLeft
                  className="h-5 w-5 rotate-180 transition-transform group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </NavLink>

              <NavLink
                to="/about"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FiInfo className="h-5 w-5" aria-hidden="true" />

                <span>اعرف المزيد</span>
              </NavLink>
            </div>

            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map(({ icon: Icon, value, label, delay }) => (
                <div
                  key={label}
                  className="glass-card p-4 transition-transform duration-300 hover:scale-105 flex flex-col items-center"
                  style={{ animationDelay: delay }}
                >
                  <Icon
                    className="mb-1 text-2xl text-orange-500"
                    aria-hidden="true"
                  />

                  <p className="gradient-text text-2xl font-bold md:text-3xl">
                    {value}
                  </p>

                  <p className="text-sm text-neutral-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
