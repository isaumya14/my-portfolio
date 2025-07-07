import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t border-border mt-16 px-6 py-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Made with <span className="text-pink-400">♥</span> by{" "}
          <span className="font-medium text-pink-300">Saumya Singh</span>. All rights reserved.
        </p>

        <a
          href="#hero"
          className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-pink-300 transition-colors"
        >
          <ArrowUp size={18} />
          <span className="text-xs hidden sm:inline">Back to top</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
