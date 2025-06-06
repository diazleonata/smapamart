import "./App.css";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import QuickActions from "./components/QuickActions";
import TopPicks from "./components/TopPicks";
import CustomerReviews from "./components/CustomerReviews";
import PopularCategories from "./components/PopularCategories";
import BottomNavigation from "./components/BottomNavigation";
import RecentProducts from "./components/RecentProducts";

function App() {
    return (
        <div className="w-full max-w-md mx-auto bg-white pb-16 flex flex-col gap-3 shadow-lg overflow-hidden">
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
            {/* Recent Products Component */}
            <RecentProducts />
        </div>
    );
}

export default App;
