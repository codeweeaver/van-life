import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <section>
            <Header />
            <div className="wrapper">
                <Outlet />
            </div>
            <Footer />
        </section>
    );
}
