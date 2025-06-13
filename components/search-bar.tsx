"use client"

import { Search, Mic, Camera } from "lucide-react"
import { useState } from "react"

interface SearchBarProps {
  query: string
  setQuery: (query: string) => void
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false)

  // Handle voice search
  const handleVoiceSearch = () => {
    alert("Voice search activated")
    // In a real implementation, this would activate the browser's speech recognition API
  }

  // Handle image search
  const handleImageSearch = () => {
    window.open("https://images.google.com", "_blank")
  }

  return (
    <div
      className={`flex items-center w-full px-4 py-3 rounded-full bg-white ${
        isFocused ? "shadow-[0_1px_6px_rgba(32,33,36,.28)]" : ""
      }`}
    >
      {/* Search icon */}
      <Search className="w-5 h-5 text-[#9aa0a6] mr-3" />

      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-grow outline-none text-base"
        placeholder="Search Google or type a URL"
        aria-label="Search"
      />

      {/* Voice search and image search icons */}
      <div className="flex items-center space-x-3 ml-2">
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-[#70757a] hover:text-[#202124] cursor-pointer"
            aria-label="Clear search"
          >
            <span className="text-xl font-light">×</span>
          </button>
        )}
        <div className="h-6 border-l border-[#dfe1e5] mx-1"></div>
        <button
          type="button"
          onClick={handleVoiceSearch}
          className="p-2 hover:bg-[#f8f9fa] rounded-full transition-colors duration-200 cursor-pointer"
          aria-label="Search by voice"
        >
          <Mic className="w-5 h-5 text-[#4285f4]" />
        </button>
        <button
          type="button"
          onClick={handleImageSearch}
          className="p-2 hover:bg-[#f8f9fa] rounded-full transition-colors duration-200 cursor-pointer"
          aria-label="Search by image"
        >
          <Camera className="w-5 h-5 text-[#4285f4]" />
        </button>
      </div>
    </div>
  )
}
