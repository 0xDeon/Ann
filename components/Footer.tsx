export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 px-6 sm:px-12 md:px-24 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] font-mono uppercase tracking-[0.18em] text-zinc-500">
        <span className="text-[#171717] font-medium">ANN ANIDUMAKA &middot; 2026</span>
        <span>
          Cooked by{" "}
          <a
            href="https://github.com/0xDeon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A1942] hover:underline"
          >
            Deon
          </a>
        </span>
      </div>
    </footer>
  );
}
