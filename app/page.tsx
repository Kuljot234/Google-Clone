import Header from "@/components/header"
import SearchSection from "@/components/search-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-wallpaper">
      <main className="flex min-h-screen flex-col relative z-10">
        {/* Header navigation */}
        <Header />

        {/* Main search section with logo and search bar */}
        <SearchSection />

        {/* Footer with links and country */}
        <Footer />
      </main>
    </div>
  )
}
