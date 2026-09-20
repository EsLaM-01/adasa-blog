import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
          currentPage === 1
            ? "bg-[#111111] border-[#262626] text-neutral-700 cursor-not-allowed"
            : "bg-[#161616] border-[#262626] text-neutral-400 hover:border-orange-500/30 hover:text-orange-500"
        }`}
        aria-label="الصفحة السابقة"
      >
        <FiArrowRight className="w-5 h-5" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold border transition-all duration-300 ${
              currentPage === page
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500"
                : "bg-[#161616] border-[#262626] text-neutral-400 hover:border-orange-500/30 hover:text-white"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-[#111111] border-[#262626] text-neutral-700 cursor-not-allowed"
            : "bg-[#161616] border-[#262626] text-neutral-400 hover:border-orange-500/30 hover:text-orange-500"
        }`}
        aria-label="الصفحة التالية"
      >
        <FiArrowLeft className="w-5 h-5" />
      </button>
    </div>
  );
}
