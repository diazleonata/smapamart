import "./App.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import QuickActions from "./components/QuickActions";
import TopPicks from "./components/TopPicks";
import CustomerReviews from "./components/CustomerReviews";
import PopularCategories from "./components/PopularCategories";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    // Desktop centering wrapper
    <div className="min-h-screen bg-gray-100 flex justify-center items-start">
      {/* Mobile container */}
      <div className="w-96 pb-16 relative bg-white inline-flex flex-col justify-start items-center gap-3 shadow-lg">
        {/* Header Component */}
        <Header />
        {/* Search Section Component */}
        <SearchSection />
        {/* Quick Actions Component */}
        <QuickActions />
        {/* Top Picks Component */}
        <TopPicks />
        {/* Customer Reviews Component */}
        <CustomerReviews />
        {/* Popular Categories Component */}
        <PopularCategories />
        {/* Bottom Navigation Component */}
        <BottomNavigation />
      </div>
    </div>
  );
}

export default App;
