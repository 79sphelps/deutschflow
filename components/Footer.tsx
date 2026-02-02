export function Footer() {
  return (
    <footer className="border-t dark:border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} DeutschFlow</span>
        <span>Built with Next.js, MongoDB, Tailwind</span>
      </div>
    </footer>
  );
}
