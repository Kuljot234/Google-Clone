export default function Footer() {
  return (
    <footer className="mt-auto bg-black/30 backdrop-blur-sm text-white/80 text-sm">
      {/* Country section */}
      <div className="py-3 px-8 border-b border-white/10">
        <span>India</span>
      </div>

      {/* Links section */}
      <div className="py-3 px-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-wrap justify-center md:justify-start gap-y-2">
          <a
            href="https://about.google"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 hover:underline hover:text-white transition-colors duration-200"
          >
            About
          </a>
          <a
            href="https://ads.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 hover:underline hover:text-white transition-colors duration-200"
          >
            Advertising
          </a>
          <a
            href="https://www.google.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 hover:underline hover:text-white transition-colors duration-200"
          >
            Business
          </a>
          <a
            href="https://www.google.com/search/howsearchworks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 hover:underline hover:text-white transition-colors duration-200"
          >
            How Search works
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-y-2 mt-3 md:mt-0">
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 hover:underline hover:text-white transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 hover:underline hover:text-white transition-colors duration-200"
          >
            Terms
          </a>
          <a href="#" className="px-3 hover:underline hover:text-white transition-colors duration-200">
            Settings
          </a>
        </div>
      </div>
    </footer>
  )
}
