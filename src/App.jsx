import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomerReviews from "./pages/CustomerReviews";
import DefaultLayout from "./layouts/DefaultLayout";

const App = () => {
    return (
        <Router>
            <DefaultLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reviews" element={<CustomerReviews />} />
                </Routes>
            </DefaultLayout>
        </Router>
    );
};

export default App;
