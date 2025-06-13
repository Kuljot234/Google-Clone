"use client"

import type React from "react"
import { useState } from "react"
import SearchBar from "./search-bar"

export default function SearchSection() {
  const [query, setQuery] = useState("")

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would redirect to Google search results
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank")
    }
  }

  // Handle "I'm Feeling Lucky" button click
  const handleFeelingLucky = () => {
    window.open("https://www.google.com/doodles", "_blank")
  }

  return (
    <section className="flex-grow flex flex-col items-center justify-center px-6 -mt-16 relative z-10">
      {/* Google Logo - White version for dark background */}
      <div className="mb-8">
        <h1 className="text-white text-8xl font-normal">Google</h1>
      </div>

      {/* Search form */}
      <div className="w-full max-w-[584px]">
        <form onSubmit={handleSearch}>
          <SearchBar query={query} setQuery={setQuery} />

          {/* Search buttons */}
          <div className="mt-8 flex justify-center space-x-3">
            <button
              type="submit"
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 text-sm rounded hover:bg-white/20 border border-transparent transition-colors duration-200 cursor-pointer"
            >
              Google Search
            </button>
            <button
              type="button"
              onClick={handleFeelingLucky}
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 text-sm rounded hover:bg-white/20 border border-transparent transition-colors duration-200 cursor-pointer"
            >
              I'm Feeling Lucky
            </button>
          </div>
        </form>

        {/* Language options */}
        <div className="mt-6 text-center text-sm">
          <span className="text-white/90">Google offered in: </span>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            हिन्दी
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            বাংলা
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            తెలుగు
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            मराठी
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            தமிழ்
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            ગુજરાતી
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            ಕನ್ನಡ
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            മലയാളം
          </a>
          <a href="#" className="text-white hover:underline mx-1 hover:text-white/80 transition-colors duration-200">
            ਪੰਜਾਬੀ
          </a>
        </div>
      </div>
    </section>
  )
}
