import { NavLink } from "react-router-dom";
import { FiFrown, FiHome, FiBookOpen } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="flex-grow">
      <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-[float_6s_ease-in-out_infinite]" />

          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[100px] animate-[float_8s_ease-in-out_infinite_1s]" />
        </div>

        {/* Content */}
        <div className="relative text-center px-4 max-w-lg mx-auto">
          {/* 404 Number */}
          <div className="relative mb-6">
            <h1 className="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none">
              404
            </h1>

            <div className="absolute inset-0 text-[140px] md:text-[180px] font-black text-orange-500/20 blur-2xl leading-none select-none pointer-events-none">
              404
            </div>
          </div>

          {/* Error Icon */}
          <div className="relative w-28 h-28 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <FiFrown
                className="w-14 h-14 text-orange-500"
                strokeWidth={1.5}
              />
            </div>

            <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce" />

            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
          </div>

          {/* Text */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            عفواً! الصفحة غير موجودة
          </h2>

          <p className="text-neutral-400 mb-8 text-lg">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <NavLink
              to="/"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <FiHome className="w-5 h-5" />
              الذهاب للرئيسية
            </NavLink>

            <NavLink
              to="/blogs"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <FiBookOpen className="w-5 h-5" />
              تصفح المقالات
            </NavLink>
          </div>

          {/* Useful Links */}
          <div className="pt-8 border-t border-[#262626]">
            <p className="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <NavLink
                to="/blogs"
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              >
                المدونة
              </NavLink>

              <span className="text-neutral-600">•</span>

              <NavLink
                to="/about"
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              >
                من نحن
              </NavLink>

              <span className="text-neutral-600">•</span>

              <NavLink
                to="/privacy"
                className="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              >
                الخصوصية
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
