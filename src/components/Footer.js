import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 dark:bg-[#080d1a] text-slate-400 dark:text-slate-500 py-8 text-center border-t border-slate-800/40 dark:border-[#1a2332] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 space-y-2">
        <p className="text-sm font-medium text-slate-300 dark:text-slate-400">
          Thank you for visiting my portfolio.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          &copy; {currentYear} Vinay Vaghani. All rights reserved.
        </p>
        <p className="text-[10px] text-slate-500 dark:text-slate-600">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
