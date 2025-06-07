import Header from "../components/home/Header";
import SearchSection from "../components/home/SearchSection";
import QuickActions from "../components/home/QuickActions";
import TopPicks from "../components/home/TopPicks";
import CustomerReviews from "../components/home/CustomerReviews";
import PopularCategories from "../components/home/PopularCategories";
import RecentProducts from "../components/home/RecentProducts";

function Home() {
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
            {/* Recent Products Component */}
            <RecentProducts />
        </div>
    );
}

export default Home;
